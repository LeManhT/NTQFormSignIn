import React from 'react'
import Description from '../description/Description'
import InputBox from '../inputBox/InputBox'
import SocialMedia from '../socialMedia/SocialMedia'
import { SIGN_UP, USERNAME, PASSWORD, EMAIL, PHONE } from '../../const/const'
import { useState } from 'react'
import ButtonSubmit from '../button/ButtonSubmit'
import { checkUserName, checkEmail, checkPhone, checkPassword } from '../../utils/validate'
import { debounce } from '../../utils/utils'
import Panel from '../panelContainer/Panel'
import { successMes, warningMess, errMes } from '../../common/toast'
import { useNavigate } from 'react-router-dom'


function Form() {
    const [isPass, setIsPass] = useState(true);
    const [listErr, setListErr] = useState({
        errName: "",
        errEmail: "",
        errPhone: "",
        errPass: ""
    });

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");

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
        if (username, email, phone, pass) {
            notify(() => { successMes("Congratulations, your account has been successful created.") });
            local.push({ username, email, phone, pass });
            window.localStorage.setItem('accountSignUp', JSON.stringify(local));
            setListErr((prev) => ({ ...prev, errName: "" }))
            setListErr((prev) => ({ ...prev, errEmail: "" }))
            setListErr((prev) => ({ ...prev, errPhone: "" }))
            setListErr((prev) => ({ ...prev, errPass: "" }))
            nav('/signIn')
        } else {
            if (checkUserName(username) || checkEmail(email) || checkPhone(phone) || checkPassword(pass)) {
                setListErr((prev) => ({ ...prev, errName: checkUserName(username) }))
                setListErr((prev) => ({ ...prev, errEmail: checkEmail(email) }))
                setListErr((prev) => ({ ...prev, errPhone: checkPhone(phone) }))
                setListErr((prev) => ({ ...prev, errPass: checkPassword(pass) }))
                notify(warningMess);
            } else {
                notify(() => { errMes("Oops, something went wrong. Please try again !") });
            }
        }
    }

    const handleName = (value) => {
        if (checkUserName(value)) {
            setListErr((prev) => ({ ...prev, errName: checkUserName(value) }))
        } else {
            setListErr((prev) => ({ ...prev, errName: "" }));
            setUsername(value);
        }
        if (value === "") {
            setListErr((prev) => ({ ...prev, errName: "" }));
        }

    }
    const handleEmail = (email) => {
        if (checkEmail(email)) {
            setListErr((prev) => ({ ...prev, errEmail: checkEmail(email) }))
        } else {
            setListErr((prev) => ({ ...prev, errEmail: "" }))
            setEmail(email);
        }
        if (email === "") {
            setListErr((prev) => ({ ...prev, errEmail: "" }))
        }
    }

    const handlePhone = (phone) => {
        if (checkPhone(phone)) {
            setListErr((prev) => ({ ...prev, errPhone: checkPhone(phone) }))
        } else {
            setListErr((prev) => ({ ...prev, errPhone: "" }))
            setPhone(phone)
        }
        if (phone === "") {
            setListErr((prev) => ({ ...prev, errPhone: "" }))
        }
    }

    const handlePass = (pass) => {
        if (checkPassword(pass)) {
            setListErr((prev) => ({ ...prev, errPass: checkPassword(pass) }))
        } else {
            setListErr((prev) => ({ ...prev, errPass: "" }))
            setPass(pass)
        }
        if (pass === "") {
            setListErr((prev) => ({ ...prev, errPass: "" }))
        }
    }

    return (
        <div className="container">
            <div className="forms-container">

                <form onSubmit={handleSubmit} action="#" className="sign-up-form">
                    <h2 className="title">{SIGN_UP}</h2>
                    <InputBox icon="fas fa-user"
                        className="input-field" type="text"
                        placeholder={USERNAME}
                        errMessage={listErr.errName}
                        onChange={debounce((e) => {
                            handleName(e.target.value);
                        }, 1000)}

                    >
                    </InputBox>


                    <InputBox
                        icon="fas fa-envelope"
                        className="input-field"
                        type="text"
                        placeholder={EMAIL}
                        errMessage={listErr.errEmail}
                        onChange={debounce((e) => {
                            handleEmail(e.target.value)
                        }, 1000)}

                    >
                    </InputBox>


                    <InputBox
                        icon="fa-solid fa-phone-volume"
                        className="input-field"
                        type="text"
                        placeholder={PHONE}
                        errMessage={listErr.errPhone}
                        onChange={debounce((e) => {
                            handlePhone(e.target.value)
                        }, 1000)}

                    >
                    </InputBox>


                    <InputBox
                        icon="fas fa-lock"
                        className="input-field"
                        autocomplete={false}
                        type={isPass ? "text" : "password"}
                        isPass={isPass} setIsPass={setIsPass}
                        placeholder={PASSWORD} iconPass={isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye "}
                        errMessage={listErr.errPass}
                        onChange={debounce((e) => {
                            handlePass(e.target.value)
                        }, 1000)}

                    >
                    </InputBox>

                    <ButtonSubmit type="submit" classBtn="btn solid" value="Login"></ButtonSubmit>
                    <Description className="social-text" description="Or Sign in with social platforms"></Description>
                    <div className="social-media">
                        <SocialMedia className="social-icon" icon="fa-brands fa-facebook-f"></SocialMedia>
                        <SocialMedia className="social-icon" icon="fa-brands fa-twitter"></SocialMedia>
                        <SocialMedia className="social-icon" icon="fa-brands fa-google"></SocialMedia>
                        <SocialMedia className="social-icon" icon="fa-brands fa-square-instagram"></SocialMedia>
                    </div>

                </form>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <Panel textPanel="Welcome to my website. We feel very happy to server you >>" panelBtn="Sign in" link="/"> </Panel>
                </div>
            </div>
        </div>
    )
}

export default Form
