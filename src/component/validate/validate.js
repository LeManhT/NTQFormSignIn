const regexUsername = /^[a-z0-9_-]{3,16}$/
const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const regexPhone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
const isStrongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;


const checkUserName = (name) => {
    if (regexUsername.test(name)) {
        return true
    } else {
        return false;
    }
}

const checkEmail = (email) => {
    if (regexEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}


const checkPhone = (phone) => {
    if (regexPhone.test(phone)) {
        return true;
    } else {
        return false;
    }
}

const checkPassword = (pass) => {
    if (isStrongPassword.test(pass)) {
        return true;
    } else {
        return false;
    }
}

export { checkUserName, checkEmail, checkPhone, checkPassword }