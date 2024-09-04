import React, { useState } from 'react';
import styles from './styles'; 

const App = () => {
  const [isSubmitHovered, setSubmitHovered] = useState(false);
  const [isGoogleHovered, setGoogleHovered] = useState(false);
  const [isFacebookHovered, setFacebookHovered] = useState(false);

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.header}>Sign in</h2>

        <label style={styles.label}>School UID</label>
        <input type="text" placeholder="Enter your school ID" style={styles.input} />

        <label style={styles.label}>Password</label>
        <input type="password" placeholder="Enter your password" style={styles.input} />

        <div style={styles.checkboxContainer}>
          <input type="checkbox" style={styles.checkbox} />
          <label>Remember me</label>
        </div>

        <button
          type="submit"
          style={isSubmitHovered ? { ...styles.submitButton, ...styles.submitButtonHover } : styles.submitButton}
          onMouseEnter={() => setSubmitHovered(true)}
          onMouseLeave={() => setSubmitHovered(false)}
        >
          Sign in
        </button>

        <p style={styles.signInText}>
          New to careerदोस्त? <a href="/">Sign up</a>
        </p>

        <p style={styles.or}>or</p>

        <button
          style={isGoogleHovered ? { ...styles.googleButton, ...styles.googleButtonHover } : styles.googleButton}
          onMouseEnter={() => setGoogleHovered(true)}
          onMouseLeave={() => setGoogleHovered(false)}
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            style={styles.icon}
          />
          Sign in with Google
        </button>

        <button
          style={isFacebookHovered ? { ...styles.facebookButton, ...styles.facebookButtonHover } : styles.facebookButton}
          onMouseEnter={() => setFacebookHovered(true)}
          onMouseLeave={() => setFacebookHovered(false)}
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
            style={styles.icon}
          />
          Sign in with Facebook
        </button>
      </form>
    </div>
  );
};

export default App;
