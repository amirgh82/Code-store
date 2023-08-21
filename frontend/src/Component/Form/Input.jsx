import React, { useReducer } from 'react'
import './Input.css'


const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        }

            break;

        default: {
            return state
        }
            break;
    }
}

export default function Input(props) {

    const onChangeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            value: event.target.value,
            isValid: true
        })
    }

    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false
    })

    const element = props.element === 'input' ? (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
            onChange={onChangeHandler}
            value={mainInput.value}
        />
    ) : (
        <textarea
            placeholder={props.placeholder}
            className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
            onChange={onChangeHandler}
            value={mainInput.value}
        ></textarea>
    )

    return (
        <div>
            {element}
        </div>

    )
}
