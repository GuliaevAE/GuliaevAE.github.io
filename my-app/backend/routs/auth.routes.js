const {Router} = require ('express')
const router = Router()
const User = require('../models/User')
const {check, validationResault} = require('express-validator')



// api/auth/register
router.post('/register', async (req , res) => {
    try {
        
        const {email, password} = req.body

        const candidate = await User.findOne({ email})


        if(candidate){
           return res.status(400).json({message:'Такой пользователь уже существует'})
        }

        const user = new User ({email, password})


        await user.save(


            res.status(201).json({massage: 'Пользователь создан'})
        )


    } catch (error) {
        res.status(500).json({message: 'Чтото пошло не так'})
    }
})


// api/auth/register
router.post('/login', async (req , res) => {

})


module.export = router