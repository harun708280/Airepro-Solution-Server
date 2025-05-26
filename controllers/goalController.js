import Goal from '../models/Goal.js';

export const getGoals = async (req, res) => {
  const goals = await Goal.find({ userId: req.user });
  res.json(goals);
};

export const createGoal = async (req, res) => {
  const goal = new Goal({ ...req.body, userId: req.user });
  await goal.save();
  res.status(201).json(goal);
};

export const updateGoal = async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(goal);
};

export const deleteGoal = async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Goal deleted' });
};
