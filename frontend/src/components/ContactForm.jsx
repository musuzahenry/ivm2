import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// The URL of your Django Rest Framework API endpoint
const API_URL = 'http://127.0.0.1:8000/api/contact/'; 

// Define the shape of your form data for TypeScript/intelliSense, 
// though we use it here just for clear documentation.
// type FormData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

export default function ContactForm() {
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors, isSubmitting } 
    } = useForm();
    
    const [status, setStatus] = useState({
        message: '',
        type: '' // 'success' or 'error'
    });

    // 1. Function executed on successful form validation
    const onSubmit = async (data) => {
        // Clear previous status
        setStatus({ message: '', type: '' });
        
        try {
            // 2. Send the POST request to the Django DRF endpoint
            const response = await axios.post(API_URL, data);

            // 3. Handle a successful response
            setStatus({ 
                message: 'Thank you for your message! We will get back to you shortly.',
                type: 'success'
            });
            reset(); // Clear the form fields
            
        } catch (error) {
            // 4. Handle API errors (e.g., 400 validation, 500 server error)
            let errorMessage = 'An unexpected error occurred. Please try again.';

            if (error.response) {
                // The request was made and the server responded with a status code
                if (error.response.status === 400) {
                    // This is usually a validation error from DRF
                    errorMessage = 'Please correct the errors in the form.';
                } else if (error.response.data && error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else {
                     errorMessage = `Server Error: ${error.response.status}`;
                }
            } else if (error.request) {
                // The request was made but no response was received
                errorMessage = 'No response from the server. Check the API URL or server status.';
            }

            setStatus({ 
                message: errorMessage,
                type: 'error' 
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            
            <h2>Contact Us</h2>

            {/* Status Message Display */}
            {status.message && (
                <div className={`message ${status.type}`}>
                    {status.message}
                </div>
            )}

            {/* Name Field */}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    // Register the input with react-hook-form and define validation rules
                    {...register('name', { required: 'Name is required' })}
                    disabled={isSubmitting}
                />
                {/* Display validation error */}
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    disabled={isSubmitting}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* Subject Field */}
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    disabled={isSubmitting}
                />
                {errors.subject && <p className="error">{errors.subject.message}</p>}
            </div>

            {/* Message Field */}
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    disabled={isSubmitting}
                ></textarea>
                {errors.message && <p className="error">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
