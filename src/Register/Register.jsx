import React from 'react'
import "./register.scss"
export default function Register() {
  return (
    <div className='register'>
        <div  className='card'>
            <div className='left'>
                <h1>Hello World</h1>
                <p>Challange the Real World!
                   Connect With Real World!
                </p>
                <p>
                    Don't you have an account?
                </p>
                <button>Login</button>
            </div>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button> Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
