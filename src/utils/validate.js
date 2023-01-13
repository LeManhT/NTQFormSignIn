import { BLANK_ERR_NAME, BLANK_ERR_EMAIL, BLANK_ERR_PHONE, BLANK_ERR_PASS, NAME_ERR, EMAIL_ERR, PHONE_ERR, PASS_ERR } from '../const/const'

const regexUsername = /^[a-z0-9_-]{3,16}$/
const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const regexPhone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
const isStrongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;



const checkUserName = (name) => {
    if (!regexUsername.test(name) && name !== "") {
        return NAME_ERR;
    } else if (name === "") {
        return BLANK_ERR_NAME;
    }
}

const checkEmail = (email) => {
    if (!regexEmail.test(email) && email !== "") {
        return EMAIL_ERR;
    } else if (email === "") {
        return BLANK_ERR_EMAIL
    }

}


const checkPhone = (phone) => {
    if (!regexPhone.test(phone) && phone !== "") {
        return PHONE_ERR
    } else if (phone === "") {
        return BLANK_ERR_PHONE
    }
}

const checkPassword = (pass) => {
    if (!isStrongPassword.test(pass) && pass !== "") {
        return PASS_ERR
    } else if (pass === "") {
        return BLANK_ERR_PASS
    }
}

export { checkUserName, checkEmail, checkPhone, checkPassword }

