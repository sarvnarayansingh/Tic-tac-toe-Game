import React from 'react'

export default function Cross(props) {
    const size = props.size || 100
    return (
        <div>
            <svg width={size} height={size} viewBox="0 0 108 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L104 101M104 4L4 101" stroke="black" strokeWidth="10"/>
            </svg>

        </div>
    )
}
