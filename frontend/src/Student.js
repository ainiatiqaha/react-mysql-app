import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5070/")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5070/student/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-70 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success w-100'>Add student data</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.marks}</td>
                                <td>{data.grade}</td>
                                <td>{data.city}</td>
                                <td>
                                    <Link to={`update/${data.id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student;
