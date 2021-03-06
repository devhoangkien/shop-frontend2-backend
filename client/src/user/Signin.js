import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signInForm = () => (
        <form>
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
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              id="customCheckLogin"
              type="checkbox"
              className="form-checkbox text-gray-800 ml-1 w-5 h-5"
              style={{ transition: "all .15s ease" }}
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Remember me
            </span>
          </label>
        </div>

        <div className="text-center mt-6">
          <button
          onClick={clickSubmit}
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Sign In
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

    const showLoading = () =>
        loading && (
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-blue-500">
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize">Loading!</b>
                </span>
                <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                    <span>??</span>
                </button>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
      <main>
        <section className="absolute w-full h-full">
        {showLoading()}
          <div
            className="absolute top-0 w-full h-full bg-blue-900"
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-6">
                  
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                        <h3 className="text-gray-600 text-lg font-bold">
                        Sign in 
                      </h3>
                      {showError()}
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    {signInForm()}
                   
                    <div className="flex flex-wrap mt-6">
                
                  <div className="w-1/2">
                    <a
                      href="#"
                      className="text-gray-900"
                    >
                      <b>Forgot password?</b>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="/signup"
                      className="text-gray-900"
                    >
                      <b>Create new account</b>
                    </a>
                  </div>
                </div>
                  </div>
                
                
                </div>
              </div>
            </div>
          </div>
        </section>
        {redirectUser()}
      </main>       
    );
};

export default Signin;
