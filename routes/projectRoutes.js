const express = require('express');
const projectController = require('./../controllers/projectController');

const router = express.Router();

router
  .route('/')
  .post(projectController.createProject)
  .get(projectController.getProjects);

router
  .route('/:id')
  .delete(projectController.deleteProject)
  .patch(projectController.updateProject);

module.exports = router;
