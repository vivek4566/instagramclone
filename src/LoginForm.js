/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import useStore from './store';

const LoginForm = () => {
    const { username, password, setUsername, setPassword } = useStore();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8881/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                // ...
            });
            console.log('Response:', response);
            // ...
            if (response.ok) {
                // The login was successful, handle the response here
                const responseData = await response.json();
                console.log('Login successful. Response:', responseData);
              } else {
                // Handle login failure (e.g., incorrect credentials)
                console.error('Login failed. Status:', response.status);
              }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        
        <div ><div className="login-form">
           
            <h1><span><img src="https://tse3.mm.bing.net/th?id=OIP.akd5Zua7121hxmhwiN1JQgHaHa&pid=Api&P=0&h=180" className='insta-logo'/></span>Instagram</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit" >Log In</button>
                <p>__________ OR __________</p>


                <span>
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.6-Etwy2306AInODxxbDK6gHaHY&pid=Api&rs=1&c=1&qlt=95&w=112&h=111" // Replace with the actual path to your Facebook logo image
                        alt="Facebook Logo"
                        className="facebook-logo"
                        style={{ width: '20px', height: '20px' }}
                    /><span><a href="https://www.facebook.com/login.php" className='facebook-text'>Login with Facebook</a>
                    </span></span>
      
      <span><p>forgot password?</p></span>
      </form>
      </div>
      <div className="login-form2">
      <form>
      <p >Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/" class="signup-link">Sign up</a></p> {/* Sign-up link */}
      </form>
        
      </div>
      
    </div>
    
    )           
}; 
 
export default LoginForm;