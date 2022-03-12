
var Joi = require("@hapi/joi")

//validation
function validateApplication(data){

   const schema = Joi.object({
      firstName: Joi.string().min(2).required(),
      lastName: Joi.string().min(2).required(),
      email: Joi.string().min(4).required(),
      phoneNumber: Joi.string().min(10).max(10).required(),
      age: Joi.string().required(),
      
      businessName: Joi.string().min(3).required(),
      address: Joi.string().min(3).required(),
      gstNumber: Joi.string().min(15).max(15).required(),
      businessType: Joi.string().min(3).required(),

      amount: Joi.string().min(3).required(),
      interest: Joi.string().max(1001).required(),
      tenure: Joi.string().required(),

   })
   try{
      return schema.validate(data)
   }
   catch(err){
      return err
   }
}




module.exports = {
   validateApplication,
}
