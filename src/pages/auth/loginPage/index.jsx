import { auth, provider} from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Auth = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const signInWithGoogle = async () => {
        setLoading(true); // Start loading
        setError(''); // Reset error message

        try {
            const results = await signInWithPopup(auth, provider);
            const authInfo = {
                userID: results.user.uid,
                name: results.user.displayName,
                profilePhoto: results.user.photoURL,
                isAuth: true,
            };
            localStorage.setItem("auth", JSON.stringify(authInfo));
            navigate("/home-page")
        } catch (error) {
            console.error("Authentication error:", error.message);
            setError('Failed to sing in. Please try again later.');
        } finally {
            setLoading(false);
        }

    };


    // Render Auth component
    return (
        <div className="login-page">
            <p>Sign In With Google to Continue</p>
            {/* Display error message if there's an error */}
            {error && <p className="error-message">{error}</p>}
            {/* Sign-in button that triggers signInWithGoogle */}
            <button className="login-with-google-btn" onClick={signInWithGoogle} disabled={loading}>
                {/* Button text changes based on loading state */}
                {loading ? 'Signing In...' : 'Sign In With Google'}
            </button>
        </div>
    );
};
