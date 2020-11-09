const Experience = require('./../models/experienceModel');
const catchAsync = require('./../utils/catchAsync');

exports.createExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.create({
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    summary: req.body.summary,
    startDate: req.body.startDate,
    finishDate: req.body.finishDate
  });

  res.status(201).json({
    status: 'success',
    data: experience
  });
});

exports.updateExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    status: 'success',
    data: experience
  });
});

exports.getExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.find().sort({ createdAt: -1 });

  res.status(200).json({
    status: 'success',
    results: experience.length,
    data: experience
  });
});

exports.deleteExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);

  if (!experience) {
    return next(new AppError(`No document found with that ID`, 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
