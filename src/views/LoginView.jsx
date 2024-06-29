import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import FormUser from "../components/FormUser";
import { registerWithEmail, loginWithEmail } from "../functions/authFunctions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import firebaseErrorsInSpanish from "../utils/firebaseErrorMessages";

const LoginView = () => {
    const navigate = useNavigate();
    const { LoginWithGoogle} = useContext(AuthContext);
    console.log(LoginWithGoogle)

    const notify = (msg, callback = {}) => toast(msg,callback);

    const handleLogin = async () => {
        try {
            const result = await LoginWithGoogle();
            //console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLoginEmail = async (email, password) => {
        try {
            const user = await loginWithEmail(email, password);
            notify(`Bienvenido ${user.user.email}`, {onClose: () => navigate("/")});
            
        } catch (error) {
            notify(firebaseErrorsInSpanish[error.code], {type:error})

        }

    }

    const handleRegisterEmail = async (email, password) => {
        try {
            const user = await registerWithEmail(email, password);
            notify(`Bienvenido ${user.user.email}`, {type:"success", onClose: () => navigate("/"),});

        } catch (error) {
            console.log(error)
            
        }
    }


  return (
    <div className="container min-h-96 flex justify-center items-center flex-col">
        <FormUser handleLoginEmail={handleLoginEmail} handleRegisterEmail={handleRegisterEmail}/>
        <button onClick={handleLogin} className="px-5 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-96">
            <i className="fa-brands fa-google me-3 fa-2x"></i>
            Login
        </button>
    </div>
  )
}

export default LoginView