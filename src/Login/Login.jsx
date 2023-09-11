import React from 'react'
import "./login.scss"
export default function Login() {
  return (
    <div className='login'>
        <div  className='card'>
            <div className='left'>
                <h1>Hello World</h1>
                <p>Challange the Real World!
                   Connect With Real World!
                </p>
                <p>
                    Don't you have an account?
                </p>
                <button>Register</button>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='password'/>
                    <button> Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
