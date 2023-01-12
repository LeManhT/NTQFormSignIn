import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const nav = useNavigate()
    useEffect(() => {
        nav('/signIn')
    }, [])

    return (
        <div>HomePage</div>
    )
}

export default HomePage