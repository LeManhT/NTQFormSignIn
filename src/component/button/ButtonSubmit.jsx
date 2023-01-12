import React from 'react'

function ButtonSubmit(props) {
    return (
        <div className={props.className}>
            <button className={props.classBtn}>{props.value}</button>
        </div >
    )
}

export default ButtonSubmit