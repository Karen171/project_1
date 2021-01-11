import React from 'react'
import './style.scss'

const Button = (props) => {
    return (
        <Button className="button" onClick={props.onClick} type={props.type}>
            {props.value}
        </Button>
    )
}

export default Button