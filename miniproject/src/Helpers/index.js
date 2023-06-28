function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.fullname === "") {
        error.fullname = "Name should not be empty"
    }else {
        error.fullname = ""
    }
    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    }else {
        error.email = ""
    }
    if(values.number === "") {
        error.number = "Number should not be empty"
    }else {
        error.number = ""
    }
    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }else {
        error.password = ""
    }
    if(values.confirmpwd === "") {
        error.confirmpwd = "Password should not be empty"
    }
    else {
        error.confirmpwd = ""
    }
    return error;
}
export default Validation;