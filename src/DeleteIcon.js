import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const DeleteIcon = (props) => {
    const {className, onClick} = props
    return (
        <RiDeleteBin6Line
            className={className}
            onClick={onClick}
        />
    )
}

export {DeleteIcon}
