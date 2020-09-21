import React from 'react';

const Input = props => {
        return (
                <div className="form-label">
                        <label htmlFor={props.id}>{props.label}</label>
                        <input  type={props.type}  id={props.id}></input>
                </div>
        )
}

export default Input;