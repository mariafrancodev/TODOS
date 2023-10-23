import React from "react";
import {HiOutlineCheckCircle} from 'react-icons/hi'

const CompleteIcon = (props) => {
    const {className, onClick} = props
    return (
        <HiOutlineCheckCircle
            className={className}
            onClick={onClick}
        />
    )
}

export {CompleteIcon}
