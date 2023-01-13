import React from 'react'
import Description from '../description/Description'
import InputBox from '../inputBox/InputBox'
import SocialMedia from '../socialMedia/SocialMedia'
import { SIGN_UP, USERNAME, PASSWORD } from '../../const/const'
import { useState } from 'react'
import ButtonSubmit from '../button/ButtonSubmit'
import Panel from '../panelContainer/Panel'
import { successMes, errMes } from '../../common/toast'



function SignInForm() {
    const [isPass, setIsPass] = useState(false);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = JSON.parse(window.localStorage.getItem("accountSignUp"));
        if (account.length) {
            const result = account.find((data) =>
                name.trim() === data.username && pass.trim() === data.pass
            )
            if (result) {
                successMes("Login success. Welcome to my website")
            } else {
                errMes("You don't have an account. Click sign up to register !")
            }
        } else {
            errMes();
        }
    }

    return (
        <div className="container">
            <div className="forms-container">
                <form action="#" className="sign-up-form" onSubmit={handleSubmit} >
                    <h2 className="title">{SIGN_UP}</h2>
                    <InputBox icon="fas fa-user"
                        className="input-field" type="text"
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