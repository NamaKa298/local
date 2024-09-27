import React from 'react';
import '../styles/CreateAnAccount.css'

function CreateAnAccount() {
    return (
    <div className="createAccount">
        <h2>Create An Account</h2>
        <div className='premierecolonne'>
        <p>Name</p>
        <input type='name' name='name' defaultValue=''/>
        <p>Alias</p>
        <input type='alias' name='alias' defaultValue=''/>
        <p>Postal Address</p>
        <input type='postaladdress' name='postaladdress' defaultValue=''/>
        <p>Create a new email with @ssu</p>
        <input type='email' name='email' defaultValue=''/>
        </div>
        <div className='deuxiemecolonne'>
        <p>Email Address</p>
        <input type='email' name='email' defaultValue=''/>
        <p>Confirm Email Address</p>
        <input type='email' name='email' defaultValue=''/>
        <p>Password</p>
        <input type='password' name='password' defaultValue=''/>
        <p>Confirm Password</p>
        <input type='password' name='password' defaultValue=''/>
        </div>
        <button>Create Account</button>
    </div>
    )
}

export default CreateAnAccount