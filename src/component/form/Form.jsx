import React from 'react'
import Description from '../description/Description'
import InputBox from '../inputBox/InputBox'
import SocialMedia from '../socialMedia/SocialMedia'
import { SIGN_UP, USERNAME, PASSWORD, EMAIL, PHONE } from '../../const/const'
import { useState } from 'react'
import ButtonSubmit from '../button/ButtonSubmit'
import { checkUserName, checkEmail, checkPhone, checkPassword } from '../validate/validate'
import { debounce } from '../../utils/utils'
import { useEffect } from 'react'
import { successMes, warningMess } from '../common/toast'
import { useNavigate } from 'react-router-dom'


function Form() {
    const [isPass, setIsPass] = useState(false);
    const [errName, setErrName] = useState(false);
    const [errEmail, setErrEmail] = useState(false);
    const [errPhone, setErrPhone] = useState(false);
    const [errPass, setErrPass] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [data, setData] = useState({});
    const [msg, setMsg] = useState({})

    let local = window.localStorage.getItem("accountSignUp")
    const nav = useNavigate();


    const notify = (fn) => { fn() };;


    if (!local) {
        local = [];
        window.localStorage.setItem('accountSignUp', JSON.stringify(local));
    } else {
        local = JSON.parse(local)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        if (username, email, phone, pass) {
            setData({
                username, email, phone, pass
            });
            notify(successMes);
            setIsSubmit(false);
            local.push({ username, email, phone, pass });
            window.localStorage.setItem('accountSignUp', JSON.stringify(local));
            nav('/')
        } else {
            if (username == "" || email == "" || phone == "" || pass == "") {
                msg.err = "You can not leave field blank"
                setMsg(msg);
            } else {
                msg.err = ""
                setMsg(msg);
            }
            notify(warningMess);
        }
    }

    const handleName = (value) => {
        setIsSubmit(false);
        if (checkUserName(value)) {
            setErrName(false);
            setUsername(value);
        } else {
            setErrName(true);
            setUsername("")
        }
        if (value == "") {
            setErrName(false)
        }
    }
    const handleEmail = (email) => {
        setIsSubmit(false);
        if (checkEmail(email)) {
            setErrEmail(false);
            setEmail(email);
        } else {
            setErrEmail(true);
            setEmail("")
        }
        if (email == "") {
            setErrEmail(false);
        }
    }

    const handlePhone = (phone) => {
        setIsSubmit(false);
        if (checkPhone(phone)) {
            setErrPhone(false);
            setPhone(phone)
        } else {
            setErrPhone(true);
            setPhone("")
        }
        if (phone == "") {
            setErrPhone(false)
        }
    }

    const handlePass = (pass) => {
        setIsSubmit(false);
        if (checkPassword(pass)) {
            setErrPass(false);
            setPass(pass)
        } else {
            setErrPass(true);
            setPass("")
        }
        if (pass == "") {
            setErrPass(false);
        }
    }

    const resetErr = () => {
        if (errName && isSubmit) {
            setErrName(false);
        } else if (errEmail && isSubmit) {
            setErrEmail(false)
        } else if (errPhone && isSubmit) {
            setErrPhone(false)
        } else if (errPass && isSubmit) {
            setErrPass(false)
        }
    }
    useEffect(() => {
        resetErr()
    }, [data, isSubmit])

    return (
        <>
            <form onSubmit={handleSubmit} action="#" className="sign-up-form">
                <h2 className="title">{SIGN_UP}</h2>
                <InputBox icon="fas fa-user"
                    className="input-field" type="text"
                    errMessage="Username is not valid ! Please try again !"
                    placeholder={USERNAME}
                    errName={errName}
                    onChange={debounce((e) => {
                        handleName(e.target.value);
                    }, 1000)}

                >
                </InputBox>


                <InputBox
                    icon="fas fa-envelope"
                    className="input-field"
                    type="text"
                    errMessage="Email is not valid or malformed ! Please try again !"
                    placeholder={EMAIL}
                    errEmail={errEmail}
                    onChange={debounce((e) => {
                        handleEmail(e.target.value)
                    }, 1000)}

                >
                </InputBox>


                <InputBox
                    icon="fa-solid fa-phone-volume"
                    className="input-field"
                    type="text"
                    errMessage="Phone is not valid or not compatible in VietNam ! Please try again !"
                    placeholder={PHONE}
                    errPhone={errPhone}
                    onChange={debounce((e) => {
                        handlePhone(e.target.value)
                    }, 1000)}

                >
                </InputBox>


                <InputBox
                    icon="fas fa-lock"
                    className="input-field"
                    type={isPass ? "password" : "text"}
                    errMessage="Password is not valid or isn't strong enough ! Please try again !"
                    isPass={isPass} setIsPass={setIsPass}
                    placeholder={PASSWORD} iconPass={isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye "}
                    errPass={errPass}
                    onChange={debounce((e) => {
                        handlePass(e.target.value)
                    }, 1000)}

                >
                </InputBox>

                {isSubmit ? <p className='errMessageFill'>{msg.err}</p> : <>    </>}
                <ButtonSubmit type="submit" classBtn="btn solid" value="Login"></ButtonSubmit>
                <Description className="social-text" description="Or Sign in with social platforms"></Description>
                <div className="social-media">
                    <SocialMedia className="social-icon" icon="fa-brands fa-facebook-f"></SocialMedia>
                    <SocialMedia className="social-icon" icon="fa-brands fa-twitter"></SocialMedia>
                    <SocialMedia className="social-icon" icon="fa-brands fa-google"></SocialMedia>
                    <SocialMedia className="social-icon" icon="fa-brands fa-square-instagram"></SocialMedia>
                </div>

            </form>
        </>
    )
}

export default Form