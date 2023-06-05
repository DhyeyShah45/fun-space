const pool = require("../dbConnection");

const getStat = async (req, res) => {
  try {
    const response = await pool.query(`SELECT
    (SELECT COUNT(*) FROM users) AS users_count,
    (SELECT COUNT(*) FROM threads) AS threads_count,
    (SELECT COUNT(*) FROM comments) AS comments_count;`);
    res.json(response.rows[0]);
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
      ORDER BY array_length(thread_likedBy, 1),array_length(thread_tags, 1) DESC NULLS LAST 
      LIMIT 5
      ;
    `);
    res.json(response.rows);
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

const getAllThreads = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM threads;");
    res.json(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getSearch = async (req, res) => {
  try {
    const search = req.body.search;
    const keywords = search.split(" ");
    console.log(keywords);
    const conditions = [];

    // Build the conditions for each keyword
    keywords.forEach((keyword) => {
      conditions.push(`thread_description ILIKE '%${keyword}%'`);
      conditions.push(`array_to_string(thread_tags, ',') ILIKE '%${keyword}%'`);
    });

    // Construct the final SQL query
    const query = `SELECT * FROM threads WHERE ${conditions.join(" OR ")};`;
    const response = await pool.query(query);
    if (response.rows.length !== 0) {
      res.json(response.rows);
    } else {
      res.json({
        message: "Either not found or use only commas to separate the keywords",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStat,
  getTop5,
  getAllThreads,
  getSearch,
};
