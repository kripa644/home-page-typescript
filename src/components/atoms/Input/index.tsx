import React from 'react';
import './style.css';

type InputProps = {
    placeholder: string,
    inputValue?: string,
    type: string,
    className?: string,
}

const Input = ({placeholder, inputValue, type, className}: InputProps) => {
    return (
        <input type={type} className={className} placeholder={placeholder} autoComplete="off" value={inputValue}/>
    );
};

export default Input;