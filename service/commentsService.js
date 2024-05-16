const axios = require("axios");
const client = require("../config/redis");

const getComments = async (req, res) => {
  const commentId = req.query.id;
  try {
    const comments = await client.get('comment-' + commentId);

    if (comments) {
      res.status(200).send({ message: "Success from cache", data: JSON.parse(comments) });
    } else {
      const response = await axios(`https://jsonplaceholder.typicode.com/comments?id=${commentId}`);
      client.set('comment-' + commentId, JSON.stringify(response.data));

      res.status(200).send({ message: "Success From API", data: response.data });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getComments,
};
