import Layout from "../components/Layout";
import { login } from "../images";

const Login = () => (
  <Layout title="QuizBot | Login" content="Login Page">
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-very-light-green flex rounded-2xl shadow-lg max-w-3xl h-[400px] p-5">
        {/* login form */}
        <div className="w-1/2">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">If you already have an account, kindly login.</p>
        </div>

        {/* login image */}
        <div className="w-1/2 p-5 bg-white">
          <img className="mt-12 rounded-2xl" src={login} alt="quizbot login page" />
          <p className="text-right mr-4">Welcome to QuizBot</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Login;
