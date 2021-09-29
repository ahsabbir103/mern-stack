const validator = require('validator');

const validate = user =>{
    let errors = {};

    if(!user.email){
        errors.email = 'Please Provide Your Email'
    } else if(!validator.isEmail(user.email)){
        errors.email = 'Please Provide Valid Email'
    }

    if(!user.password){
        errors.password = 'Please Provide a Password'
    } else if(user.password.length < 6){
        errors.password = 'Password must be Greater or Equal 6 Character.'
    }


    return {
        errors,
        isValid: Object.keys(errors).length == 0
    }
}


module.exports = validate