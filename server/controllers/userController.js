const pool = require("../dbConnection");

const delUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(`DELETE FROM users WHERE user_id = $1;`, [
      id,
    ]);
    res.status(200).json({ message: "User Deleted Successfully!" });
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const getUserThreads = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `SELECT thread_title,thread_description FROM threads WHERE thread_author = $1;`,
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const getUserComments = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `SELECT t.thread_title as title, array_agg(c.comment_des) as description
      from threads t
      inner join comments c on t.thread_id = c.comment_threadfor where c.comment_author = $1
      group by t.thread_title;`,
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query(
      `SELECT t.no_of_thread, c.no_of_comments
FROM
  (SELECT COUNT(*) AS no_of_thread FROM threads WHERE thread_author = $1) AS t,
  (SELECT COUNT(*) AS no_of_comments FROM comments WHERE comment_author = $1) AS c;
`,
      [id]
    );
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;

    const id = await pool.query(
      `INSERT INTO users (user_name, user_email)
    SELECT $1,$2
    WHERE NOT EXISTS (
      SELECT 1 FROM users WHERE user_email = $2
    );`,
      [name, email]
    );
    const checkId = await pool.query(
      `
      SELECT * FROM users WHERE user_email = $1;`,
      [email]
    );
    res.json(checkId.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  delUser,
  getUserComments,
  getUserDetails,
  getUserThreads,
  userLogin,
};
