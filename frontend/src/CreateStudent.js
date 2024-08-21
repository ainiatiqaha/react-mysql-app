import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

function CreateStudent() {
    // State variables for storing the name and email input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate(); // useNavigate hook to navigate programmatically

    // Function to handle form submission
    function handlesubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        axios.post("http://localhost:5070/create", { name, email, marks, grade, city }) // Send POST request to create a new student
            .then(res => {
                console.log(res); // Log the server response
                navigate("/"); // Navigate to the homepage after successful submission
            }).catch(err => console.log(err)); // Log any errors that occur during the request
    }

    return (
        <div>
            <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={handlesubmit}> {/* Form submission triggers handlesubmit function */}
                        <h2>Add Student</h2>
                        <div className='mb-3'>
                            <label>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setName(e.target.value)} // Update name state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)} // Update email state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Marks</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setMarks(e.target.value)} // Update email state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Grade</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setGrade(e.target.value)} // Update email state when input value changes
                            />
                        </div>
                        <div className='mb-3'>
                            <label>City</label>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)} // Update email state when input value changes
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button> {/* Submit button to trigger form submission */}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default CreateStudent