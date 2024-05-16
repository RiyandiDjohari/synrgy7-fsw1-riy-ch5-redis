const axios = require("axios");
const client = require("../config/redis");

const getPosts = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const posts = await client.get('post-' + id);

    if (posts) {
      res.status(200).send({ message: "Success from cache", data: JSON.parse(posts) });
    } else {
      const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
      client.set('post-' + id, JSON.stringify(response.data));

      res.status(200).send({ message: "Success From API", data: response.data });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getPosts,
};
