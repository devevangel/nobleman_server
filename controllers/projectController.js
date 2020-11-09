const Project = require('./../models/projectModel');
const catchAsync = require('./../utils/catchAsync');

exports.createProject = catchAsync(async (req, res, next) => {
  const project = await Project.create({
    name: req.body.name,
    link: req.body.link,
    language: req.body.language
  });

  res.status(201).json({
    status: 'success',
    data: project
  });
});

exports.getProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: projects
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: project
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
