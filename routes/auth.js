const express = require('express');
const router = express.Router();

router.post("/", (req, resp) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) resp.status(200).send(`Hello ${name}`);
  else resp.status(401).send("Enter username");
});

module.exports = router;
