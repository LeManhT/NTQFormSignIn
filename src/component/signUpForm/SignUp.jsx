import React from 'react'
import Panel from '../panelContainer/Panel'
import Form from '../form/Form'

function SignUp() {
    return (
        <div className="container">
            <div className="forms-container">
                <Form></Form>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <Panel textPanel="Welcome to my website. We feel very happy to server you >>" panelBtn="Sign in" link="/"> </Panel>
                </div>
            </div>
        </div>
    )
}

export default SignUp