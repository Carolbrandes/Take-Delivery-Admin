import React from 'react';

const Select = props => {
        return(
                <select className="select" name={props.name} id={props.id}>
                        {props.children}
                </select>
        )
}

export default Select;