const adminRoute=require('express').Router()
const {AddAdmin,LoginAdmin,UpdateAdmin,UpdatePassword, acceptProviderRegistration}=require("../controllers/admin.controller")



adminRoute.post('/admin/register',AddAdmin)
adminRoute.post('/admin/login',LoginAdmin)
adminRoute.put('/admin/update/:id',UpdateAdmin)
adminRoute.put('/admin/updatePass/:id',UpdatePassword)

//route for accept/reject provider registration
adminRoute.post('/admin/acceptProviderRegistration/:id', acceptProviderRegistration)

module.exports=adminRoute