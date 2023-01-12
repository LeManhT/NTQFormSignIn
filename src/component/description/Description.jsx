import React from 'react'

function Description(props) {
    return (
        <p className={props.className}>{props.description}</p>
    )
}

export default Description