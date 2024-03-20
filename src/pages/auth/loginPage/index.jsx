import React from "react";
import { auth, provider} from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {createUserWithEmailAndPassword} from'firebase/auth';


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

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email,password).then(data=>{
            console.log(data,"authData")
        })
    }


    const buttonStyle = {
        userSelect: 'none',
        appearance: 'none',
        backgroundColor: '#131314',
        border: '1px solid #747775',
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: '#e3e3e3',
        cursor: 'pointer',
        fontFamily: "'Roboto', arial, sans-serif",
        fontSize: '14px',
        height: '40px',
        letterSpacing: '0.25px',
        outline: 'none',
        overflow: 'hidden',
        padding: '0 12px',
        position: 'relative',
        textAlign: 'center',
        transition: 'background-color .218s, border-color .218s, box-shadow .218s',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        maxWidth: '400px',
        minWidth: 'min-content',
        borderColor: '#8e918f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const iconStyle = {
        height: '20px',
        marginRight: '12px',
        minWidth: '20px',
        width: '20px',
    };


    // Render Auth component
    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <Input type="email" name="email" placeholder="Email"/>
                <Input type ="password" name="password" placeholder="Password"></Input>
                <Button>Sign In</Button>
                <Separator>or</Separator>
            </form>
            {/* Display error message if there's an error */}
            {error && <p className="error-message">{error}</p>}
            {/* Sign-in button that triggers signInWithGoogle */}
            <button className="login-with-google-btn" onClick={signInWithGoogle} disabled={loading} style={buttonStyle}>
                {/* Button text changes based on loading state */}
                {loading ? 'Signing In...' : 'Sign In With Google'}
                <div style={{ height: '20px', marginRight: '12px', minWidth: '20px', width: '20px'}}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block', /* Additional styles if needed */ }}>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                </div>
            </button>
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: blue; // Replace with LinkedIn's button color
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Separator = styled.div`
  text-align: center;
  margin: 20px 0;
  color: white;
  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }
  &:before {
    margin-right: 10px;
  }
  &:after {
    margin-left: 10px;
  }
`;