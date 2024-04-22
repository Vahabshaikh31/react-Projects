import React, { useState } from 'react';

const Forms = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '', // Corrected from 'mb'
  });

  const event = (e) => {
    const { name, value } = e.target;
    setFullName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Hello, {fullName.fname} {fullName.lname} {fullName.email} {fullName.password}</h1>
        <input type="text" name="fname" placeholder='Enter name' onChange={event} value={fullName.fname}/> 
        <br/>
        <input type="text" name="lname" placeholder='Last Name' onChange={event} value={fullName.lname}/> 
        <br/>
        <input type="text" name="email" placeholder='Email' onChange={event} value={fullName.email}/> 
        <br/>
        <input type="text" name="password" placeholder='Password' onChange={event} value={fullName.password}/> 
        <br/>
        <input type='submit' />
      </form>
    </div>
  );
};

export default Forms;
