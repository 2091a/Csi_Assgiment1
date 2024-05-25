import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = /^[6-9]\d{9}$/; // Starts with 6-9 and is followed by 9 digits
const aadharValidator = /^\d{12}$/; // 12 digits
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // 5 letters, 4 digits, 1 letter

const FormComponent = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    showPassword: false,
    phoneNumber: "",
    country: "",
    city: "",
    panNumber: "",
    aadharNumber: "",
    errors: {},
    isFormSubmitted: false,
    countries: ["India", "USA", "UK"], // Add your country options here
    cities: ["Mumbai", "New York", "London"] // Add your city options here
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
      errors: { ...state.errors, [name]: "" }
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    validateField(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "phoneNumber",
      "country",
      "city",
      "panNumber",
      "aadharNumber"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = validateField(field) && isValid;
    });

    if (isValid) {
      setState({ ...state, isFormSubmitted: true });
      navigate("/details", { state });
    } else {
      setState({ ...state, isFormSubmitted: false });
    }
  };

  const validateField = (name) => {
    let errors = { ...state.errors };
    const value = state[name];

    switch (name) {
      case "firstName":
      case "lastName":
      case "username":
        if (value.trim() === "") errors[name] = `${name.replace(/([A-Z])/g, ' $1')} is required`;
        break;
      case "emailAddress":
        if (value.trim() === "") errors[name] = "Email Address is required";
        else if (!emailValidator.test(value)) errors[name] = "Email is not valid";
        break;
      case "password":
        if (value.trim() === "") errors[name] = "Password is required";
        else if (!passwordValidator.test(value))
          errors[name] = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
        break;
      case "phoneNumber":
        if (value.trim() === "") errors[name] = "Phone Number is required";
        else if (!phoneValidator.test(value)) errors[name] = "Phone Number is not valid";
        break;
      case "country":
      case "city":
        if (value.trim() === "") errors[name] = `${name.replace(/([A-Z])/g, ' $1')} is required`;
        break;
      case "panNumber":
        if (value.trim() === "") errors[name] = "PAN Number is required";
        else if (!panValidator.test(value)) errors[name] = "PAN Number is not valid";
        break;
      case "aadharNumber":
        if (value.trim() === "") errors[name] = "Aadhar Number is required";
        else if (!aadharValidator.test(value)) errors[name] = "Aadhar Number is not valid";
        break;
      default:
        break;
    }

    setState({ ...state, errors });
    return !errors[name];
  };

  const toggleShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg transform transition duration-500 hover:scale-105">
        <h3 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Sign Up Form</h3>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.firstName ? 'blink' : ''}`}
              />
              {state.errors.firstName && <div className="text-red-500 text-sm mt-1">{state.errors.firstName}</div>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.lastName ? 'blink' : ''}`}
              />
              {state.errors.lastName && <div className="text-red-500 text-sm mt-1">{state.errors.lastName}</div>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={state.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.username ? 'blink' : ''}`}
              />
              {state.errors.username && <div className="text-red-500 text-sm mt-1">{state.errors.username}</div>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={state.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.emailAddress ? 'blink' : ''}`}
              />
              {state.errors.emailAddress && <div className="text-red-500 text-sm mt-1">{state.errors.emailAddress}</div>}
            </div>
          </div>
          <div className="mb-4 relative">
            <input
              type={state.showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.password ? 'blink' : ''}`}
            />
            <button type="button" onClick={toggleShowPassword} className="absolute right-3 top-3 text-sm text-indigo-600">
              {state.showPassword ? "Hide" : "Show"}
            </button>
            {state.errors.password && <div className="text-red-500 text-sm mt-1">{state.errors.password}</div>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.phoneNumber ? 'blink' : ''}`}
              />
              {state.errors.phoneNumber && <div className="text-red-500 text-sm mt-1">{state.errors.phoneNumber}</div>}
            </div>
            <div>
              <select
                name="country"
                value={state.country}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.country ? 'blink' : ''}`}
              >
                <option value="">Select Country</option>
                {state.countries.map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {state.errors.country && <div className="text-red-500 text-sm mt-1">{state.errors.country}</div>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <select
                name="city"
                value={state.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.city ? 'blink' : ''}`}
              >
                <option value="">Select City</option>
                {state.cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {state.errors.city && <div className="text-red-500 text-sm mt-1">{state.errors.city}</div>}
            </div>
            <div>
              <input
                type="text"
                placeholder="PAN Num e.g., ABCDE1234F"
                name="panNumber"
                value={state.panNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className={`w-full px-1 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.panNumber ? 'blink' : ''}`}
              />
              {state.errors.panNumber && <div className="text-red-500 text-sm mt-1">{state.errors.panNumber}</div>}
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Aadhar Number e.g., 123456789012"
              name="aadharNumber"
              value={state.aadharNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 ${state.errors.aadharNumber ? 'blink' : ''}`}
            />
            {state.errors.aadharNumber && <div className="text-red-500 text-sm mt-1">{state.errors.aadharNumber}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transform transition duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
