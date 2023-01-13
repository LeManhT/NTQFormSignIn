import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


function InputBox(props) {

    return (
        <>
            <div className={props.className}>
                {props.icon ? <i className={props.icon}></i> : <></>}
                <input type={props.type} className={props.classInput} placeholder={props.placeholder} onChange={props.onChange} />
                {
                    props.iconPass ? <div onClick={props.isPass ? () => { props.setIsPass(false) } : () => { props.setIsPass(true) }}> <i className={`${props.iconPass} iconEye`} ></i></div> : <></>
                }
            </div >

            {props.errMessage ? <p className='errMessage'>{props.errMessage}</p> : <></>}
        </>

    )
}

export default InputBox