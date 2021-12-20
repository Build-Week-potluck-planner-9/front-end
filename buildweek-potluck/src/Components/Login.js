import React from 'react';
import styled from 'styled-components';


const StyledLogin = styled.div`
    color: #ED732E;
    background-color: #996236;
    padding-bottom: auto;
    text-align: center;

    .login {
        padding: 10%;    
    }
    .loginWrap {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 10%;
        padding-bottom: 10%;
    }
    .loginTitle{
        padding-bottom: 5%;
    }
    h5{
        padding: 5%;
        text-align: center;
    }
    h2{
        font-size: 50px;
        text-align: center;
    }
    button{
        margin-top: 15%;
        background-color: #9D221E;
    }

    button:hover {
        background-color: #ED732E;
    }

    label h5{
        text-align: center;
    }
`


export default function Login() {

    const handleChange = (e) => {

    }

    return (
        <StyledLogin>
        <section className='login'>
            <div className='loginWrap'>
                <div className='loginTitle'>
                    <h2>Potluck Login</h2>
                </div>
                    <form>
                        <label>
                            <h5>Username:</h5>
                            <input 
                                type='text'
                                name='username'
                                placeholder='Enter email here'
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <h5>Password:</h5>
                            <input 
                                type='text' 
                                name='password'
                                placeholder='Enter password here'
                                onChange={handleChange}
                            />
                        </label>
                        <div>
                        <button>Submit</button>
                        </div>
                    </form>
            </div>
        </section>
        </StyledLogin>
    )
}
