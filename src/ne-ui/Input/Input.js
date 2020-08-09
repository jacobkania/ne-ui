import React from 'react';

const Input = ({label, onClick}) => {
    return <input onClick={onClick} placeholder={label}></input>;
};

export default Input;
