import React from 'react'

function socialMedia(props) {
    return (
        <a href={props.href} className={props.className}>
            <i className={props.icon}></i>
        </a>
    )
}

export default socialMedia