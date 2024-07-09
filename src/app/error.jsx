'use client'
import { useEffect } from "react"
const Error = ({ error, reset }) => {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="text-center mt-6">
            <h1 className="text-2xl">Something went wrong. Please try again later</h1>
            <button className="hover:text-yellow-400" onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default Error