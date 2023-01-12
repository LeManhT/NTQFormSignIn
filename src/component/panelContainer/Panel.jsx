import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Panel(props) {
    const nav = useNavigate()
    return (
        <div className="panel left-panel">
            <div className="content">
                <h3>New here ?</h3>
                <p>
                    {props.textPanel}
                </p>
                <button onClick={() => { nav(props.link) }} className="btn transparent" id="sign-up-btn">
                    {props.panelBtn}
                </button>

            </div>
            <img src={"../img/log.svg"} className="image" alt="" />
        </div>
    )
}

export default Panel