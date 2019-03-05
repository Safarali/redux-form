import React from 'react';

const SimpleFormInput = props => {
    console.log(props);

    const {label, type, input, meta } = props;
    
    return (
        <div className="simpleForm__wrapper">
            <label 
                htmlFor={input.name}
                className="simpleForm__label"
            >
                {label}
            </label>
            <input 
                type={type}
                {...input}
                id={input.name}
                className={props.className}
            />
            {meta.error && meta.touched && (
                <div className="errorMessage">{meta.error}</div>
            )}
        </div>
    );
};

export default SimpleFormInput;