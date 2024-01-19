const adminRoute=require('express').Router()
const {AddAdmin,LoginAdmin,UpdateAdmin}=require("../controllers/admin.controller")



adminRoute.post('/admin/register',AddAdmin)
adminRoute.post('/admin/login',LoginAdmin)
adminRoute.put('/admin/update/:id',UpdateAdmin)

module.exports=adminRoute