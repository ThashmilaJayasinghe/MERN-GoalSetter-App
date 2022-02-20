const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')


const {protect} = require('../middleware/authMiddleware')


//router.route('/').get(getGoals).post(setGoal)
//Can replace the two lines below with above

router.get('/', protect, getGoals)


router.post('/', protect, setGoal)


//router.route('/:id').put(updateGoal).delete(deleteGoal)
//Can replace the two lines below with above

router.put('/:id', protect, updateGoal)


router.delete('/:id', protect, deleteGoal)



module.exports = router