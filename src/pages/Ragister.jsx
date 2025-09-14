import { GrCheckbox } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Ragister = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //get the data

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more then 5 charecter" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user,displayName: name, photoURL: photo});
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            setUser();
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessege = error.massege;
        console.log(errorCode, errorMessege);
      });
  };

  return (
    <div className="min-h-screen mt-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shrink-0 bg-gray-300 p-10">
          <h2 className="text-2xl font-semibold text-center">
            Ragister Your Account
          </h2>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">Your Name </label>
              <input
                type="text"
                className="input bg-white"
                name="name"
                placeholder="Name"
              />
              {error.name && (
                <level className=" text-xs text-red-500">{error.name}</level>
              )}
              <br></br>
              <label className="label">Photo URL </label>
              <input
                type="text"
                className="input bg-white"
                name="photo"
                placeholder="Your Photo URl"
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-white"
                name="email"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input bg-white"
                placeholder="Password"
              />
              <div className="flex mt-2 items-center gap-3 ">
                <GrCheckbox />
                <span>Accept Terms And Condition</span>
              </div>
              <button className="w-full btn btn-neutral mt-4">Sign Up</button>
            </div>
            <h2 className="text-center">
              Don't Have an Account?
              <Link to="/auth/login" className="font-semibold text-red-500">
                Sign In{" "}
              </Link>{" "}
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ragister;
