import Card from "../UI/Card";
import './AddUsers.css';

export default function AddUsers() {

    function onSubmitHandler(event) {
        event.preventDefault();
    }

    return (
        <Card className='input' >
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" />
            </form>
        </Card>
    )
}