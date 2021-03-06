import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <form>
            <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Name
          </label>
          <input
            onChange={handleChange("name")}
            value={name}
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
            placeholder="Name"
            style={{ transition: "all .15s ease" }}
          />
        </div>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email
          </label>
          <input
            onChange={handleChange("email")}
            value={email}
            type="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
            placeholder="Email"
            style={{ transition: "all .15s ease" }}
          />
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
           onChange={handleChange("password")}
           value={password}
            type="password"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
            placeholder="Password"
            style={{ transition: "all .15s ease" }}
          />
        </div>
        

        <div className="text-center mt-6">
          <button
          onClick={clickSubmit}
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Register
          </button>
        </div>
      </form>
       
           
   
    );

    const showError = () => (
        <div
        className=" text-purple-600"
        style={{ display: error ? "" : "none" }}
    >
        {error}
    </div>
    );

    const showSuccess = () => (
        <div className="text-purple-600" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-blue-900"
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-6">
                  
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                        <h3 className="text-gray-600 text-lg font-bold">
                        Sign Up 
                      </h3>
                      {showError()}
                      {showSuccess()}
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    {signUpForm()}
                   
                    <div className="flex flex-wrap mt-6">
                
                  <div className="w-1/2">
                    <a
                      href="#"
                      className="text-gray-900"
                    >
                      
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="/signin"
                      className="text-gray-900"
                    >
                      <b>Sign In</b>
                    </a>
                  </div>
                </div>
                  </div>
                
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
};

export default Signup;
