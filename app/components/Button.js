"use client"

import { btn } from "./button.module.css"

export default function Button ({ children }) {

    const handleClick = () => {
        alert("Clicked")
    }
    return (
        <button className={btn} onClick={handleClick}>{children}</button>
    )
}
