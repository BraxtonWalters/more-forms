import React, { useState } from "react";

const Form = ( ) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 
    
    const handleValidation = (e, type) => {
        switch(type) {
            case "firstName":
                setFirstName(e.target.value)
                e.target.value.length < 3 ? setFirstNameError("First Name must be 3 characters or longer!") : setFirstNameError("")
                break
            case "lastName":
                setLastName(e.target.value)
                e.target.value.length < 3 ? setLastNameError("Last Name must be 3 characters or longer!") : setLastNameError("")
                break
            case "email":
                setEmail(e.target.value)
                e.target.value.length < 3 ? setEmailError("Email must be 3 characters or longer!") : setEmailError("")
                break
            case "password":
                setPassword(e.target.value)
                e.target.value.length < 8 ? setPasswordError("Password must be 8 characters or longer!") : setPasswordError("")
                break
            case "confirmPassword":
                setConfirmPassword(e.target.value)
                e.target.value !== password ? setConfirmPasswordError("Passwords no matchy!!!") : setConfirmPasswordError("")
                break
            default:
                break
        }
    }



    return (
        <form className='container mt-5' onSubmit={ (e) => {e.preventDefault()} }>
            <div>
                <label>First Name: </label> 
                <input className='form-control' type="text" value={firstName} onChange={ (e) => handleValidation(e, "firstName") } />
                {firstNameError ? <p>{firstNameError}</p> : ""}
            </div>
            <div>
                <label>Last Name: </label> 
                <input className='form-control' type="text" value={lastName} onChange={ (e) => handleValidation(e, "lastName")} />
                {lastNameError ? <p>{lastNameError}</p> : ""}
            </div>
            <div>
                <label>Email Address: </label> 
                <input className='form-control' type="text" value={email} onChange={ (e) => handleValidation(e, "email")} />
                {emailError ? <p>{emailError}</p> : ""}
            </div>
            <div>
                <label>Password: </label>
                <input className='form-control' type="text" value={password} onChange={ (e) => handleValidation(e, "password")} />
                {passwordError ? <p>{passwordError}</p> : ""}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className='form-control' type="text" value={confirmPassword} onChange={ (e) => handleValidation(e, "confirmPassword")} />
                {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Form