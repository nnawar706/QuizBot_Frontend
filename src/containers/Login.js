import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import Layout from "../components/Layout";
import { loginBg } from "../images";
import { setCredentials } from "../features/authSlice";
import { useLoginMutation } from "../features/authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [showPWD, setShowPWD] = useState(false);
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus()
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...auth, email }));
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } 
    catch (error) {
      // if (error.response?.status === 401) {
      console.log(error)

      userRef.current.focus();
    }
  }
  const togglePasswordVisibility = () => {
    setShowPWD(!showPWD);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const content = (
    <Layout title="QuizBot | Login" content="Login Page">
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="bg-very-light-green flex rounded-2xl shadow-lg max-w-3xl h-[450px] p-5">
          {/* login form */}
          <div className="sm:w-1/2 text-dark-green px-16">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you already have an account, kindly login.
            </p>

            <form className="flex flex-col gap-4"
            onSubmit={handleSubmit}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                id="email"
                value={email}
                ref={userRef}
                placeholder="Email"
                autoComplete="off"
                onChange={handleEmailInput}
                required
              ></input>
              <div className="relative">
                <input
                  className="w-full p-2 rounded-xl border"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  autoComplete="off"
                  onChange={handlePasswordInput}
                  required
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

            <button
              className="bg-white flex justify-center items-center border 
            py-2 w-full rounded-xl mt-5 text-sm"
            >
              <FcGoogle className="w-[25px] mr-3" />
              Login with Google
            </button>
          </div>

          <div className="w-1/2 p-5 bg-white sm:block hidden">
            <img
              className="mt-12 rounded-2xl"
              src={loginBg}
              alt="quizbot login page"
            />
            <p className="text-right mr-4 text-dark-green underline underline-offset-8">
              Welcome to QuizBot
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );

  return content;
};

export default Login;
