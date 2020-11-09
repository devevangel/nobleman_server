const express = require('express');
const experienceController = require('./../controllers/experienceController');

const router = express.Router();

router
  .route('/')
  .post(experienceController.createExperience)
  .get(experienceController.getExperience);

router
  .route('/:id')
  .delete(experienceController.deleteExperience)
  .patch(experienceController.updateExperience);

module.exports = router;
