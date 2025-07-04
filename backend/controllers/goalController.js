const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'}); 
};

const setGoal = (req, res) => {
    console.log(req.body);
    res.status(201).json({message: 'Set goal'});
};

const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
};

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});
};



module.exports = {getGoals, setGoal, updateGoal, deleteGoal};