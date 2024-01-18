const adminRoute=require('express').Router()
const {AddAdmin,LoginAdmin}=require("../controllers/admin.controller")



adminRoute.post('/admin/register',AddAdmin)
adminRoute.post('/admin/login',LoginAdmin)


module.exports=adminRoute