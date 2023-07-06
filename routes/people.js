const express = require('express');
const router = express.Router();
let {
  getPeople,
  postPerson,
  postPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people');

router.get("/", getPeople);
router.post("/", postPerson);
router.post("/postman", postPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

//Alternative method
// router.route('/').get(getPeople).post(postPerson);
// router.route('/postman').post(postPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;