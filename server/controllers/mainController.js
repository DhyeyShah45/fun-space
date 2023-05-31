const pool = require("../dbConnection");

const getStat = async (req, res) => {
  try {
    const response = await pool.query(`SELECT
    (SELECT COUNT(*) FROM users) AS users_count,
    (SELECT COUNT(*) FROM threads) AS threads_count,
    (SELECT COUNT(*) FROM comments) AS comments_count;`);
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const getTop5 = async (req, res) => {
  try {
    const response =
      await pool.query(`SELECT thread_title, thread_description,thread_id
      FROM threads
      ORDER BY array_length(thread_likedBy, 1) DESC NULLS LAST 
      LIMIT 5
      ;
    `);
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStat,
  getTop5,
};
