import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin,setUser} = useContext(AuthContext)
  const handleSubmitLogin =(e)=>{
    e.preventDefault();
    const form  = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({email,password});
    
    userLogin(email,password)
    .then((result)=>{
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
  }

  return (
    
      
      <div className="min-h-screen mt-5 ">
          
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0 bg-gray-300 p-10">
            <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>

            <div onSubmit={handleSubmitLogin} className="card-body">
              <form className="form-control">
                <label className="label">Email</label>
                <input type="email" name="email" className="input bg-white" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password" name="password"
                  className="input bg-white"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="w-full btn btn-neutral mt-4">Login</button>
              </form>
              <h2 className="text-center">Don't Have an Account?<Link   to='/auth/signup'
              className="font-semibold text-red-500">Sign Up </Link > </h2>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
