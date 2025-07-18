import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender:'',
        department_id: '',
        joining_date: ''
    });
    const [editingId, setEditingId] = useState(null);

    const fetchEmployees = async () => {
        const res = await axios.get('http://localhost:8000/api/auth/get-employees');
        setEmployees(res.data);
    };

    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
    const res = await axios.get('http://localhost:8000/api/auth/get-departments');
    setDepartments(res.data);
    };

     useEffect(() => {
    fetchEmployees();
    fetchDepartments();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreate = async () => {
        await axios.post('http://localhost:8000/api/auth/create-employees', formData);
        fetchEmployees();
        resetForm();
    };

    const handleUpdate = async (id) => {
        await axios.put(`http://localhost:8000/api/auth/update-employees/${id}`, formData);
        fetchEmployees();
        setEditingId(null);
        resetForm();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/auth/delete-employees/${id}`);
        fetchEmployees();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            gender:'',
            department_id: '',
            joining_date: ''
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Employee List</h2>
            <input className='form-field' name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input className='form-field' name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input className='form-field' name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
             <select className='form-field' name="gender" value={formData.gender} onChange={handleChange}>
                <option value="" disabled hidden>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <select
            className='form-field'
            name="department_id"
            value={formData.department_id}
             onChange={handleChange}>
                <option value="" disabled selected hidden>Select Department</option>
                {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                        {dept.name}
                    </option>
                ))}
            </select>
   
            <input className='form-field' name="joining_date" type="date" value={formData.joining_date} onChange={handleChange} placeholder="Joining Date" />
            <button onClick={() => editingId ? handleUpdate(editingId) : handleCreate()}>
                {editingId ? 'Update' : 'Create'}
            </button>

            <table border="1" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>Mobile</th><th>Gender</th><th>Department</th><th>Total Salary</th><th>Joining Date</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.mobile}</td>
                             <td>{emp.gender}</td>
                            <td>{emp.department_name || 'N/A'}</td>
                            <td>₹{emp.total_salary || 0}</td>
                            <td>{emp.joining_date}</td>
                            <td>
                                <button onClick={() => {
                                    setEditingId(emp.id);
                                    setFormData({
                                        name: emp.name,
                                        email: emp.email,
                                        mobile: emp.mobile,
                                        gender:emp.gender,
                                        department_id: emp.department_id,
                                        joining_date: emp.joining_date ? emp.joining_date.split('T')[0] : ''
                                    });
                                }}>Edit</button>
                                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;