const adminRoute=require('express').Router()
const {AddAdmin,LoginAdmin,UpdateAdmin,UpdatePassword}=require("../controllers/admin.controller")



adminRoute.post('/admin/register',AddAdmin)
adminRoute.post('/admin/login',LoginAdmin)
adminRoute.put('/admin/update/:id',UpdateAdmin)
adminRoute.put('/admin/updatePass/:id',UpdatePassword)
module.exports=adminRoute