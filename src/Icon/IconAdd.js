import * as React from "react"

function IconAdd(props) {
    return (
        <svg
            width={42}
            height={41}
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M21 37.584c9.665 0 17.5-7.649 17.5-17.084 0-9.434-7.835-17.083-17.5-17.083S3.5 11.066 3.5 20.5c0 9.435 7.835 17.084 17.5 17.084z"
                fill="#F6F6F6"
                stroke="#1389F6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 13.667v13.667M14 20.5h14"
                stroke="#1389F6"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default IconAdd;
