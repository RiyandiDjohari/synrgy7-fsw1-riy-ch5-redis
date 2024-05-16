const redis = require("redis");

const client = redis.createClient({
  url: "redis://localhost:6379",
  socket: {
    connectTimeout: 5000,
  },
});

client.connect().catch((err) => console.log(err));

module.exports = client;
