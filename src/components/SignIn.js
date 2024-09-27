import React from 'react';
import '../styles/SignIn.css';

function SignIn({ onCreateAccountClick }) {
    return (
        <div className="SignIn">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <p>Email Address</p>
                <input type='email' name='email' defaultValue='' />
                <p>Password</p>
                <input type='password' name='password' defaultValue='' />
                <div className="remember-forgot-container">
                    <label className="remember-me">
                        <input type="checkbox" name="remember" />
                        Remember me
                    </label>
                    <button type='button' id="forgot">Forgot your password ?</button>
                </div>
                <button type='submit' id='submit'>Sign In</button>
                <button type='button' onClick={onCreateAccountClick} id='notanaccount'>
                    Don't have an account? Create one
                </button>
            </form>
        </div>
    );
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
}

export default SignIn;
