import * as React from 'react';
import { useState } from 'react'
const Contact: React.SFC<IContactProps> = (props) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    return (
        <div className='container'>
            <div className="row justify-content-center mt-2">
                <h1 className="text-dark" id='header'>CONTACT ME</h1>
            </div>
            <form className='form-group w-100 shadow-lg bg-light'>
                <div className="row justify-content-center p-3">
                    <div className="col-md-6 m-2">
                        <input
                            type="text"
                            value={name}
                            className='form-control'
                            placeholder="Name">
                        </input>
                    </div>
                    <div className="col-md-6 m-2">
                        <input
                            type="text"
                            value={email}
                            className='form-control'
                            placeholder="email">
                        </input>
                    </div>
                    <div className="col-md-6 mt-2">
                        <textarea
                            value={message}
                            className='form-control'
                            placeholder="Message">
                        </textarea>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <button className='btn btn-outline-dark m-2 '>Submit</button>

                </div>
            </form>

        </div >


    )
}


export interface IContactProps { }

export interface IContactState {
}

export default Contact;