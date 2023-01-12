import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'


function InputBox(props) {
    const inputRef = useRef();


    return (
        <>
            <div className={props.className}>
                {props.icon ? <i className={props.icon}></i> : <></>}
                <input ref={inputRef} type={props.type} className={props.classInput} placeholder={props.placeholder} onChange={props.onChange} />
                {
                    props.iconPass ? <div onClick={props.isPass ? () => { props.setIsPass(false) } : () => { props.setIsPass(true) }}> <i className={`${props.iconPass} iconEye`} ></i></div> : <></>
                }
            </div >
            {(props.errName && !props.isSubmit) || (props.errEmail && !props.isSubmit) || (props.errPhone && !props.isSubmit) || (props.errPass && !props.isSubmit) ? <p className='errMessage'>{props.errMessage}</p> : <></>}
        </>

    )
}

export default InputBox