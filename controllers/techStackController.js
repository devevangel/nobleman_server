const TechStack = require('./../models/stackModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.createTechStack = catchAsync(async (req, res, next) => {
  const techStack = await TechStack.create({
    name: req.body.name,
    percentage: req.body.percentage,
    lastWeek: req.body.lastWeek,
    lastMonth: req.body.lastMonth
  });

  res.status(201).json({
    status: 'success',
    data: techStack
  });
});

exports.updateTechStack = catchAsync(async (req, res, next) => {
  const techStack = await TechStack.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: techStack
  });
});

exports.getTechStack = catchAsync(async (req, res, next) => {
  const techStacks = await TechStack.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    results: techStacks.length,
    data: techStacks
  });
});

exports.deleteTechStack = catchAsync(async (req, res, next) => {
  const techStack = await TechStack.findByIdAndDelete(req.params.id);

  if (!techStack) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
