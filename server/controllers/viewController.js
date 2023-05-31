const pool = require("../dbConnection");
const postThread = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;
  const uid = req.params.uid;
  try {
    const response = await pool.query(
      `INSERT INTO threads(thread_title,thread_description,thread_tags,thread_author)
    VALUES ($1,$2,$3,$4);`,
      [title, description, tags, uid]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ mesage: error.message });
  }
};
const postComment = async (req, res) => {
  const description = req.body.description;
  const uid = req.params.uid;
  const tid = req.params.tid;
  try {
    const response = await pool.query(
      `INSERT INTO comments(comment_des,comment_threadfor,comment_author)
    VALUES ($1,$2,$3);`,
      [description, tid, uid]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ mesage: error.message });
  }
};
const putThread = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const tags = req.body.tags;
  const uid = req.params.uid;
  const tid = req.params.tid;
  try {
    const check = await pool.query(
      `SELECT EXISTS (
        SELECT 1 FROM threads
        WHERE thread_author = $1 AND thread_id = $2
      ) AS you_can_edit;
      `,
      [uid, tid]
    );
    // console.log(check.rows[0].you_can_edit);
    if (check.rows[0].you_can_edit) {
      const response = await pool.query(
        `UPDATE threads
        SET thread_title = $1,
            thread_description = $2,
            thread_tags = $3
        WHERE thread_id = $4;`,
        [title, description, tags, tid]
      );
      // console.log(response);
      res.json(response.rows);
    } else {
      res.json({ mesage: "You can't edit because you're not the owner!" });
    }
  } catch (error) {
    console.error();
    res.status(500).json({ mesage: error.mesage });
  }
};
const putComment = async (req, res) => {
  const des = req.body.des;
  const uid = req.params.uid;
  const tid = req.params.tid;
  const check = await pool.query(
    `SELECT EXISTS (
    SELECT 1 FROM comments WHERE comment_author = $1 AND comment_id = $2
  )AS you_can_edit;`,
    [uid, tid]
  );
  if (check.rows[0].you_can_edit) {
    const response = await pool.query(
      `
    update comments
      set comment_des = $1
    where comment_id = $2; `,
      [des, tid]
    );
    res.json(response.rows);
  } else {
    res.json({ mesage: "You can't edit because you're not the owner!" });
  }
};
const delThread = async (req, res) => {
  try {
    const tid = req.params.tid;
    const response = await pool.query(
      `DELETE FROM threads WHERE thread_id = $1`,
      [tid]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ mesage: error.mesage });
  }
};
const delComment = async (req, res) => {
  try {
    const tid = req.params.tid;
    const response = await pool.query(
      `DELETE FROM comments WHERE comment_id = $1`,
      [tid]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ mesage: error.mesage });
  }
};

module.exports = {
  postThread,
  postComment,
  putThread,
  putComment,
  delThread,
  delComment,
};
