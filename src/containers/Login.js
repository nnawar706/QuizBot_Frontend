import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import Layout from "../components/Layout";
import { login } from "../images";

const Login = () => {
  const [showPWD, setShowPWD] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPWD(!showPWD);
  };

  return (
    <Layout title="QuizBot | Login" content="Login Page">
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="bg-very-light-green flex rounded-2xl shadow-lg max-w-3xl h-[400px] p-5">
          {/* login form */}
          <div className="sm:w-1/2 text-dark-green px-16">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you already have an account, kindly login.
            </p>

            <form className="flex flex-col gap-4" action="">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              ></input>
              <div className="relative">
                <input
                  className="w-full p-2 rounded-xl border"
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
                {showPWD ? (
                  <BsEyeFill
                    className="absolute top-3 right-2"
                    onClick={() => togglePasswordVisibility}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="absolute top-3 right-2"
                    onClick={() => togglePasswordVisibility}
                  />
                )}
              </div>

              <button
                className="bg-dark-green text-medium text-white rounded-xl py-2"
                type="submit"
              >
                Login
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-grey-400">
              <hr className="border-grey-400"></hr>
              <p className="text-sm text-center">OR</p>
              <hr className="border-grey-400"></hr>
            </div>
          </div>

          {/* login image */}
          <div className="w-1/2 p-5 bg-white sm:block hidden">
            <img
              className="mt-12 rounded-2xl"
              src={login}
              alt="quizbot login page"
            />
            <p className="text-right mr-4">Welcome to QuizBot</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
