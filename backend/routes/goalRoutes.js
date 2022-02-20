const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')


//router.route('/').get(getGoals).post(setGoal)
//Can replace the two lines below with above

router.get('/', getGoals)


router.post('/', setGoal)


//router.route('/:id').put(updateGoal).delete(deleteGoal)
//Can replace the two lines below with above

router.put('/:id', updateGoal)


router.delete('/:id', deleteGoal)



module.exports = router