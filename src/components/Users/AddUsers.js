import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import './AddUsers.css';

export default function AddUsers() {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge <= 0) {
            return;
        }
        console.log(enteredUsername, enteredAge);
    }

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className='input' >
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Button type='submit' onClick={onSubmitHandler}>Add User</Button>
            </form>
        </Card>
    )
}