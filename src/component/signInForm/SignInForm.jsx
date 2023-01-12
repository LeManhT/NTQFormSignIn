import React from 'react'
import Description from '../description/Description'
import InputBox from '../inputBox/InputBox'
import SocialMedia from '../socialMedia/SocialMedia'
import { SIGN_UP, USERNAME, PASSWORD, EMAIL, PHONE } from '../../const/const'
import { useState } from 'react'
import ButtonSubmit from '../button/ButtonSubmit'
import { debounce } from '../../utils/utils'
import Panel from '../panelContainer/Panel'
import { useEffect } from 'react'
import { successMes, ToastError } from '../common/toast'



function SignInForm() {
    const [isPass, setIsPass] = useState(false);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = JSON.parse(localStorage.getItem("accountSignUp")) || [];
        const result = account.find((data) =>
            name.trim() == data.username && pass.trim() == data.pass
        )
        if (result) {
            successMes()
        } else {
            ToastError()
        }
    }

    return (
        <div className="container">
            <div className="forms-container">
                <form action="#" className="sign-up-form" onSubmit={handleSubmit} >
                    <h2 className="title">{SIGN_UP}</h2>
                    <InputBox icon="fas fa-user"
                        className="input-field" type="text"
                        errMessage="Username is not valid ! Please try again !"
                        placeholder={USERNAME}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    >
                    </InputBox>



                    <InputBox
                        icon="fas fa-lock"
                        className="input-field"
                        type={isPass ? "password" : "text"}
                        errMessage="Password is not valid or isn't strong enough ! Please try again !"
                        isPass={isPass} setIsPass={setIsPass}
                        placeholder={PASSWORD} iconPass={isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye "}
                        onChange={(e) => {
                            setPass(e.target.value)
                        }}
                    >
                    </InputBox>

                    <ButtonSubmit type="submit" classBtn="btn solid" value="Login" ></ButtonSubmit>


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
                    <Panel textPanel="Welcome to my website. We feel very happy to server you. You don't have an account
                    .Please click on Sign up and register !" panelBtn="Sign up" link="/signUp"> </Panel>
                </div>
            </div>
        </div>
    )
}

export default SignInForm