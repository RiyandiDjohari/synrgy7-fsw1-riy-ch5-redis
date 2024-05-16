const axios = require("axios");
const client = require("../config/redis");

const getUsers = async (req, res) => {
  const id = req.query.id
  try {
    const users = await client.get('user-' + id);

    if (users) {
      res.status(200).send({ message: "Success from cache", data: JSON.parse(users) });
    } else {
      const response = await axios(`https://jsonplaceholder.typicode.com/users?id=${id}`);
      client.set('user-' + id, JSON.stringify(response.data));

      res.status(200).send({ message: "Success From API", data: response.data})
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// const getPeopleById = (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({ message: "success", data: data.find((row) => row.id == id) });
// };

// const createPeople = (req, res) => {
//   const payload = req.body;

//   if (payload) {
//     data.push(payload);
//     res.status(201).json({ message: "Success", data });
//   } else {
//     res.status(400).json({ message: "Failed" });
//   }
// };

// const deletePeople = (req, res) => {
//   let { id } = req.params;

//   const peopleIndex = data.findIndex((person) => person.id == id);

//   if (peopleIndex !== -1) {
//     data.splice(peopleIndex, 1);
//     res.status(200).json({ message: `Delete id ${id} Success`, data });
//   } else {
//     res.status(404).json({ message: `People with id ${id} not found` });
//   }
// };

// const updatePeople = (req, res) => {
//   const { id } = req.params;
//   const { name, username, email } = req.body;

//   const peopleIndex = data.findIndex((people) => people.id === +id);

//   if (peopleIndex !== -1) {
//     data[peopleIndex] = {
//       id: Number(id),
//       name,
//       username,
//       email,
//     };
//     res.status(200).json({ message: "People Updated", data });
//   } else {
//     res.status(400).json({ message: `People with id ${id} not found` });
//   }
// };

// const uploadImageHandler = (req, res) => {
//   const url = `/uploads/${req.file.filename}`;

//   res.status(200).json({ message: "upload ", url });
// };

// const cdnUploadImageHandler = (req, res) => {
//   const fileBase64 = req.file.buffer.toString("base64");
//   const file = `data:${req.file.mimetype};base64,${fileBase64}`;

//   cloudinary.uploader.upload(file, function (err, result) {
//     if (!!err) {
//       return res.status(400).json({
//         message: "Gagal Upload File!",
//       });
//     }

//     res.status(201).json({ message: "Uploaded!", url: result.url });
//   });
// };

module.exports = {
  getUsers,
  // getPeopleById,
  // createPeople,
  // deletePeople,
  // updatePeople,
  // uploadImageHandler,
  // cdnUploadImageHandler,
};
