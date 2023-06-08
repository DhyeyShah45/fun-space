const pool = require("../dbConnection");
const postLikeThread = async (req, res) => {
  try {
    const uid = req.params.uid;
    const tid = req.params.tid;
    const response1 = await pool.query(
      `
        UPDATE threads
        SET thread_likedBy = array_append(thread_likedBy, $1)
        WHERE thread_id = $2 AND NOT ($1 = ANY(thread_likedBy));`,
      [uid, tid]
    );
    const response2 = await pool.query(
      `
    UPDATE threads
    SET thread_dislikedBy = array_remove(thread_dislikedBy, $1)
    WHERE thread_id = $2 AND ($1 = ANY(thread_dislikedBy));
    `,
      [uid, tid]
    );

    // This code is okay but the problem is it solves first half in one run and second in second run
    // const response = await pool.query(
    //   `WITH update_likes AS (
    //     UPDATE threads
    //     SET thread_likedBy = array_append(thread_likedBy, $1)
    //     WHERE thread_id = $2 AND NOT ($1 = ANY(thread_likedBy))
    //     RETURNING thread_id
    //   ),
    //   update_dislikes AS (
    //     UPDATE threads
    //     SET thread_dislikedBy = array_remove(thread_dislikedBy, $1)
    //     WHERE thread_id = $2 AND ($1 = ANY(thread_dislikedBy))
    //     RETURNING thread_id
    //   )
    //   SELECT * FROM update_likes, update_dislikes;
    //   `,
    //   [uid, tid]
    // );

    res.json({ message: "Thread Liked!" });
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};
const postDislikeThread = async (req, res) => {
  try {
    const uid = req.params.uid;
    const tid = req.params.tid;
    const response1 = await pool.query(
      `
      UPDATE threads
      SET thread_dislikedBy = array_append(thread_dislikedBy, $1)
      WHERE thread_id = $2 AND NOT ($1 = ANY(thread_dislikedBy));`,
      [uid, tid]
    );
    const response2 = await pool.query(
      `
  UPDATE threads
  SET thread_likedBy = array_remove(thread_likedBy, $1)
  WHERE thread_id = $2 AND ($1 = ANY(thread_likedBy));
  `,
      [uid, tid]
    );
    res.json({ message: "Thread Disliked" });
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};
const postDislikeComment = async (req, res) => {
  try {
    const uid = req.params.uid;
    const tid = req.params.tid;
    const response1 = await pool.query(
      `
      UPDATE comments
      SET comment_dislikedBy = array_append(comment_dislikedBy, $1)
      WHERE comment_id = $2 AND NOT ($1 = ANY(comment_dislikedBy));`,
      [uid, tid]
    );
    const response2 = await pool.query(
      `
  UPDATE comments
  SET comment_likedBy = array_remove(comment_likedBy, $1)
  WHERE comment_id = $2 AND ($1 = ANY(comment_likedBy));
  `,
      [uid, tid]
    );
    res.json({ message: "Comment Disliked" });
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};
const postLikeComment = async (req, res) => {
  try {
    const uid = req.params.uid;
    const tid = req.params.tid;
    const response1 = await pool.query(
      `
    UPDATE comments
    SET comment_likedBy = array_append(comment_likedBy, $1)
    WHERE comment_id = $2 AND NOT ($1 = ANY(comment_likedBy));`,
      [uid, tid]
    );
    const response2 = await pool.query(
      `
UPDATE comments
SET comment_dislikedBy = array_remove(comment_dislikedBy, $1)
WHERE comment_id = $2 AND ($1 = ANY(comment_dislikedBy));
`,
      [uid, tid]
    );
    res.json({ message: "Comment Liked" });
  } catch (error) {
    console.error();
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postLikeThread,
  postDislikeThread,
  postLikeComment,
  postDislikeComment,
};
