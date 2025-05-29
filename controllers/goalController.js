import Goal from "../models/Goal.js";

export const getGoals = async (req, res) => {
  const { userId } = req.query; 
  if (!userId) return res.status(400).json({ message: "userId is required" });

  const goals = await Goal.find({ userId });
  res.json(goals);
};

export const createGoal = async (req, res) => {
  try {
    const { title, type, progress, userId } = req.body;
    console.log(title, type, progress, userId);

    if (!title || !type || !progress || !userId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const goal = new Goal({ title, type, progress, userId });
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    console.error("Create Goal Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!goal) return res.status(404).json({ message: "Goal not found" });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ message: "Error updating goal" });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) return res.status(404).json({ message: "Goal not found" });
    res.json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting goal" });
  }
};
