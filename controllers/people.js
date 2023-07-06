let { people } = require("../data");

const getPeople = (req, resp) => {
  resp.status(200).json({ success: true, data: people });
};

const postPerson = (req, resp) => {
  // 201 response when sent request is successful
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    return resp
      .status(401)
      .json({ success: false, msg: "Please provide a Name" });
  }
  return resp.status(201).json({ success: true, person: name });
};

const postPersonPostman = (req, resp) => {
  const { name } = req.body;
  console.log(req.body);
  console.log(name);
  if (!name) {
    return resp
      .status(401)
      .json({ success: false, msg: "Please provide details" });
  }
  return resp.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, resp) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  // resp.send('hello world');
  const person = people.find((person) => person.id == id);
  if (!person) {
    return resp
      .status(404)
      .json({ success: false, msg: `Please enter a valid id` });
  } else {
    person.name = name;
    return resp.json({ success: true, data: [...people] });
  }
};

const deletePerson = (req, resp) => {
  const { id } = req.params;
  const person = people.find((person) => person.id == Number(id));
  if (!person) {
    return resp.status(404).json({
      success: false,
      msg: `${id} is invalid please provide a valid one`,
    });
  } else {
    const newPeople = people.filter((person) => person.id != Number(id));
    return resp.status(200).json({ newPeople });
  }
};

module.exports = {
  getPeople,
  postPerson,
  postPersonPostman,
  updatePerson,
  deletePerson,
};
