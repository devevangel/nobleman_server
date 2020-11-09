const express = require('express');
const techStackController = require('./../controllers/techStackController');

const router = express.Router();

router
  .route('/')
  .post(techStackController.createTechStack)
  .get(techStackController.getTechStack);

router
  .route('/:id')
  .delete(techStackController.deleteTechStack)
  .patch(techStackController.updateTechStack);

module.exports = router;
