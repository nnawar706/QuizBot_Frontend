import { useEffect, useRef, useState } from "react"
import { Toast } from "primereact/toast"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

import Layout from "../components/Layout"
import { loginBg } from "../images"
import { userRegistration } from "../features/auth/registerUserAction"

const Register = () => {
  const { loading, error, success } = useSelector((state) => state.auth);
  const toast = useRef(null)
  const userRef = useRef()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [password, setPassword] = useState("")
  const [showPWD, setShowPWD] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      })
    }

    if (success) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Registration successful",
        life: 1000,
      })

      setTimeout(() => {
        navigate("/")
      }, 500)
    }
  }, [navigate, success, error]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const role = isChecked ? 2 : 3
    dispatch(userRegistration({ name, email, password, role }))
  }
  const togglePasswordVisibility = () => {
    setShowPWD(!showPWD)
  }

  const handleNameInput = (e) => {
    setName(e.target.value)
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Layout title="QuizBot | Register" content="Registration Page">
      <section className="bg-white min-h-screen flex items-center justify-center">
        <Toast ref={toast} />
        <div className="bg-very-light-green flex rounded-2xl shadow-lg max-w-3xl h-[550px] p-5">
          {/* Registration form */}
          <div className="sm:w-1/2 text-dark-green px-16">
            <h2 className="font-bold text-2xl">Register</h2>
            <p className="text-sm mt-4">
              If you already have an account, kindly{" "}
              <a href="/login" className="underline">
                login.
              </a>
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                id="name"
                value={name}
                ref={userRef}
                placeholder="Name"
                autoComplete="off"
                onChange={handleNameInput}
                required
              ></input>
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                autoComplete="off"
                onChange={handleEmailInput}
                required
              ></input>
              <div className="relative">
                <input
                  className="w-full p-2 rounded-xl border"
                  type={!showPWD ? "password" : "text"}
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
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="absolute top-3 right-2"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 
                  border-gray-300 rounded focus:ring-blue-500 
                  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
                  dark:bg-gray-700 dark:border-gray-600"
                  checked={isChecked}
                  onChange={handleCheckboxChange} 
                />
                <label
                  for="link-checkbox"
                  className="ml-2 text-sm text-dark-green"
                >
                  Register as a faculty.
                </label>
              </div>

              <button
                className="bg-dark-green text-medium text-white rounded-xl py-2"
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing" : "Register"}
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
              Register with Google
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
};

export default Register
