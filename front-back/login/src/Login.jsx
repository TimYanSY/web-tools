import React from 'react';

const Login = ({
    handleNameChange,
    handlePasswordChange,
    handleLogin,
}) => {
    return (
        <div className="Login">
            <div>Name</div>
            <input type="text" onChange={handleNameChange}/>
            <div>Password</div>
            <input  type="password" onChange={handlePasswordChange}/>
            <button className='login-btn' type="submit" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login