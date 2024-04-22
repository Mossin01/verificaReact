import Header from "../components/Header";
import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";

import React, { useState } from 'react';
import { IoEyeSharp as ShowPassword } from 'react-icons/io5';
import { FaEyeSlash as HidePassword } from 'react-icons/fa6';

import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';


function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [formErrors, setFormErrors] = useState({});

  function changePasswordInputType() {
    setPasswordInputType(prevType => (prevType === 'text' ? 'password' : 'text'));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function validateForm() {
    const errors = {};

    if (name.length < 3) {
      errors.name = "Nome con almeno 3 caratteri";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email in forma coretta";
    }

    if (password.length < 8) {
      errors.password = "La password deve contenere almeno 8 caratteri.";
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "La password deve contenere almeno una lettera maiuscola.";
    } else if (!/[a-z]/.test(password)) {
      errors.password = "La password deve contenere almeno una lettera minuscola";
    } else if (!/[0-9]/.test(password)) {
      errors.password = "La password deve contenere almeno un numero.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "le password non corrispondono.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      // Submit the form data to the server
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    }
  }

  const passwordRequirements = {
    length: 'Almeno 8 caratteri',
    uppercase: 'Almeno una lettera maiuscola',
    lowercase: 'Almeno una lettera minuscola',
    number: 'Almeno un numero',
  };
  function onClick(){
     
  }
  return (
    <div>
      <Header title="Signup" icon={<DashboardIcon  />} to="/signup" />
      <Card>
        <h1 className="text-2xl">Signup</h1>
        <hr className="h-1 w-32 bg-dark-green" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>
          <div className="w-full">
            <Input type="email" placeholder="example@test.com" value={email} onChange={handleEmailChange} />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="Password" value={password} onChange={handlePasswordChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === 'text' ? <HidePassword /> : <ShowPassword />}
            </span>
            {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}
          </div>
          <div className="w-full">
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            {formErrors.confirmPassword && <p className="text-red-500">{formErrors.confirmPassword}</p>}
          </div>
          <div className="w-full">
            <Button title="Signup" onClick={onClick}/>
          </div>
        </form>
        <ul className="text-sm text-gray-500 mt-2">
          {Object.entries(passwordRequirements).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default SignupPage;
