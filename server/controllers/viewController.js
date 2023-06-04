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
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
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
      res.json({ message: "You can't edit because you're not the owner!" });
    }
  } catch (error) {
    console.error();
    res.status(500).json({ message: error.mesage });
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
    res.status(500).json({ message: error.mesage });
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
    res.status(500).json({ message: error.mesage });
  }
};
const getThread = async (req, res) => {
  try {
    const tid = req.params.tid;
    const response = await pool.query(
      `SELECT t.*, u.user_name
    FROM threads AS t
    INNER JOIN users AS u ON t.thread_author = u.user_id
    WHERE t.thread_id = $1;
    `,
      [tid]
    );
    res.json(response.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.mesage });
  }
};
const getComment = async (req, res) => {
  try {
    const tid = req.params.tid;
    const response = await pool.query(
      `SELECT c.*, u.user_name
      FROM comments AS c
      INNER JOIN users AS u ON c.comment_author = u.user_id
      WHERE c.comment_threadfor = $1;
    `,
      [tid]
    );
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.mesage });
  }
};

module.exports = {
  postThread,
  postComment,
  putThread,

  delThread,
  delComment,
  getThread,
  getComment,
};
