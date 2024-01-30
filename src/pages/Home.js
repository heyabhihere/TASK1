// Home.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openBox1, openBox2 } from "../actions";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function Home() {
    const dispatch = useDispatch();
    const { showSet1, showSet2 } = useSelector((state) => state);

    const handleSignInClick = () => {
        dispatch(openBox1());
    };

    const handleSignUpClick = () => {
        dispatch(openBox2());
    };

    return (
        <>
            <div className="container1">
                <h1>Welcome to the website </h1>
                <button className="button" onClick={handleSignInClick}>Sign in</button>
                <button className="button" onClick={handleSignUpClick}>Sign up</button>
            </div>

            {showSet1 && <SignIn />}
            {showSet2 && <SignUp />}
        </>
    );
}
