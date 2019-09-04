import React, {useState} from 'react';
import './auth.css';

const Auth = () => {

    let [login, setLogin] = useState(false)
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');


    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <form className="card-like">
            <h1>{ login ? 'Log In' : 'Sign up' }</h1>
            <label htmlFor="email" className="display-block">Email:</label>
            <input type="text" name="email" className="display-block" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password" className="display-block">Password:</label>
            <input type="password" name="password" className="display-block" value={password} onChange={(e) => setPassword (e.target.value)}/>

            {
                login ? null : 
                <React.Fragment>
                <label htmlFor="firstName" className="display-block">First Name:</label>
                <input type="text" name="firstName" className="display-block" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="lastName" className="display-block">Last Name:</label>
                <input type="text" name="lastName" className="display-block" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </React.Fragment>
            }
            <br/>
            <button onClick={(e) => changeLogin(e) }>{ login ? 'Sign Up' : 'Login'}</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Auth;