import React from 'react'

export default function Login() {

    const handleChange = (e) => {

    }

    return (
        <section className='login'>
            <div className='loginWrap'>
                <div className='loginTitle'>
                    <h2>Enter username and Password to continue</h2>
                </div>
                    <form>
                        <label>
                            <h5>Username:</h5>
                            <input 
                                type='text'
                                name='username'
                                placeholder='hotmale@hotmail'
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <h5>Password:</h5>
                            <input 
                                type='text' 
                                name='password'
                                onChange={handleChange}
                            />
                        </label>
                        <div>
                        <button>Submit</button>
                        </div>
                    </form>
            </div>
        </section>
    )
}
