import React from 'react';
import Button from 'ne-ui/Button/Button';
import Input from 'ne-ui/Input/Input';

const Main = () => {
    const visitorNumber = Math.floor(Math.random() * 500000 + 500000);

    return (
        <div>
            <div>You're visitor number {visitorNumber}</div>
            <div>This is a button:</div>
            <Button label="This button" />
            <div>This is an input:</div>
            <Input label="This input" />
        </div>
    )
}

export default Main;