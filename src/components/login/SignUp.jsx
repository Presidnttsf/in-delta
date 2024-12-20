import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../dashboard/Modal';
import { UserContext } from '../../UserContext';


export default function SignUp() {

  const { person, setPerson } = useContext(UserContext);

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: "",
    password: '',
    confirmPassword: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, mobile, password, confirmPassword } = formData;

    if (!name) {
      setMessage("Name cannot be empty!");
      setShowModal(true);
      return;
    }

    if (!email) {
      setMessage("Email cannot be empty!");
      setShowModal(true);
      return;
    }

    if (!mobile) {
      setMessage("Mobile cannot be empty!");
      setShowModal(true);
      return;

    }

    if (mobile.length !== 10) {
      setMessage("Mobile number should be 10 digits.");
      setShowModal(true);
      return;

    }
    if (!password) {
      setMessage("Password cannot be empty!");
      setShowModal(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password mismatch!!!");
      setShowModal(true);
      return;
    }

    if (password.length < 6) {
      setMessage("Password should be greater than 6 digit")
      setShowModal(true);
      return;
    }


    const userData = { name, email, password, mobile };
    try {
      // localStorage.setItem('user', JSON.stringify(userData));
      // console.log("userdata", userData)
      setPerson(userData);

      setMessage("Sign-up successful! Please log in.");
      setShowModal(true);

      // Redirect to login after a delay
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      setMessage("An error occurred during sign-up. Please try again.");
      setShowModal(true);
    }
  };

  const handleLogin = () => {

    navigate("/");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFocus = () => {
    setShowModal(false);
  };

  // Apply the no-pointer-events class to the body when the modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('no-pointer-events');
    } else {
      document.body.classList.remove('no-pointer-events');
    }

    return () => {
      document.body.classList.remove('no-pointer-events');
    };
  }, [showModal]);




  return (
    <div className="main-log login-page">
      {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
      <div className="log-container">
        <div className="row align-items-center me-lg-5">
          <div className="col-lg-8">
            <div className="log-left pe-lg-5 pt-lg-5">
              <img
                src="images/log-create-acc-bg.png"
                className="img-fluid log-bg-img"
                alt="Background"
              />

              <div className="login-logo">
                <img
                  src="images/log-logo.svg"
                  className="img-fluid log-logo"
                  alt="Logo"
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <strong style={{ color: "red", fontSize: "large", opacity: "40%" }}>
                  Tauseef Akhtar
                </strong>
              </div>
              <div className="log-back-button">
                <img
                  onClick={handleLogin}
                  src="images/back-button.svg"
                  alt="Back"
                />
                <span className="log-back-button-text ps-2">Back</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="log-right ps-lg-4">
              <div className="two-step mb-5">
                <div className="row">
                  <div className="col-6 text-lg-center">
                    <p className="varify-para-one">
                      <span className="varfify-one me-3">1</span>Personal Info
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="varify-para-two">
                      <span className="varfify-two me-3">2</span>Interested Categories
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="log-heading pb-3">Create Your Free Account</h3>
              <h6 className="log-para pb-4">
                Lorem ipsum is simple dummy text that can help.
              </h6>

              {/* Name */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/redProfile.png"
                    className="img-fluid"
                    alt="Profile Icon"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-msg-icon.svg"
                    className="img-fluid"
                    alt="Email Icon"
                  />
                </div>
              </div>
              {/* mobile */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="tele"
                    name="mobile"
                    id="mobile"
                    placeholder="902XXXXX36"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/redphone.png"
                    className="img-fluid"
                    alt="Confirm Password Icon"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-pass-icon.svg"
                    className="img-fluid"
                    alt="Password Icon"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-pass-icon.svg"
                    className="img-fluid"
                    alt="Confirm Password Icon"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="main-btn text-center">
                <a onClick={handleSignup} >
                  Create an Account
                </a>
              </div>

              {/* Login Link */}
              <div className="create-account text-center pt-4">
                Already Registered? <span onClick={handleLogin}>Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="images/login-bg/loging-right-shape.svg"
        className="img-fluid log-bottom-bg"
        alt="Background Shape"
      />
    </div>
  );
}
