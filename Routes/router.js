const express = require('express');
const router = express.Router();
const users = require('../model/UserSchemal');


router.post('/register', async (req,res)=>{
    const {name,email,category,contact,age,address,desc} = req.body;
 
    if (!name||!email||!category||!contact || !age||!address||!desc) {
    res.status(404).json("Please fill the data");
}
try {
    const preUser = await users.findOne({email:email});
    if(preUser){
        res.status(404).json("this is user is already present");
    }
    else{
        const adduser = new users({
            name,email,category,contact,age,address,desc
        });
        await adduser.save();
        res.status(201).json(adduser);
    }
} catch (err) {
    res.status(404).json(err);
    
}
})

// get user data

router.get('/getdata',async(req,res)=>{
    try {
        const userData = await users.find();
        res.status(201).json(userData);
        } catch (e) {
        res.status(404).json(e);
    }
})

// get user by id for view

router.get('/getuser/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await users.findById({_id:id});
        res.status(201).json(user);
    }catch(e){
        res.status(404).json(e);
    }
})

// update user by id

router.patch('/update/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const userupate = await users.findByIdAndUpdate(id,req.body,{new:true})
        res.status(202).json(userupate);
    }catch(e){
        res.status(404).json(e);
    }
})

// delete user by id

router.delete('/delete/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const userDelete = await users.findByIdAndDelete({_id:id})
        res.status(200).json(userDelete)
    }
    catch(e){
        res.status(440).json(e);
    }
});
module.exports = router;