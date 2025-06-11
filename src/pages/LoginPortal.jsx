import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import "../css/LoginPortal.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Check for existing session on component mount
  useEffect(() => {
    const savedEmail = sessionStorage.getItem('email');
    const remember = sessionStorage.getItem('rememberMe') === 'true';

    if (savedEmail && remember) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (isLogin) {
      // Login logic
      if (formData.email && formData.password) {
        if (rememberMe) {
          sessionStorage.setItem('email', formData.email);
          sessionStorage.setItem('rememberMe', 'true');
        } else {
          sessionStorage.removeItem('email');
          sessionStorage.removeItem('rememberMe');
        }

        sessionStorage.setItem('authToken', 'simulated-token');
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    } else {
      // Signup logic
      if (formData.name && formData.email && formData.password) {
        const users = JSON.parse(sessionStorage.getItem('users')) || [];
        users.push({
          name: formData.name,
          email: formData.email,
          password: formData.password // In real apps, never store plain passwords
        });
        sessionStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('authToken', 'simulated-token');
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="toggle-form-btn"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? ' Sign up' : ' Log in'}
            </button>
          </p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {!isLogin && (
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          {isLogin && (
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>
          )}

          <Button variant="primary" type="submit" className="w-100 mb-3">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>

          <div className="social-login">
            <p className="text-center">Or continue with</p>
            <div className="social-icons">
              <button type="button" className="social-btn google">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-btn facebook">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-btn linkedin">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
