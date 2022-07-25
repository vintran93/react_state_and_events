// presentational component; no state; not a high level component

import React from 'react'
import { TomatoButton } from './Styles'

export const Item = ({id, title, handleOnDelete}) => {
    
    const onDelete = () => {
        handleOnDelete(id)
    }
    
    return (
        <div>
            <TomatoButton onClick={onDelete}>X</TomatoButton>
            {title}
        </div>
    )
}

