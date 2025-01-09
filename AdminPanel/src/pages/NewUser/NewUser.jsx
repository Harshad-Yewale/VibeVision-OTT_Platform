import React from 'react';
import './NewUser.scss';
import { Paper } from '@mui/material';
const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className='newUserTitle'>New User</h1>
      <Paper elevation={3} className='formArea'>
      <form  className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" required />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" required/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.con" required />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type='password' placeholder='password' required/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="tel" placeholder="+1 123 456 67"  required/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA"  />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender" >
            <input type='Radio' name="Gender" id='male' value='Male' required/>
            <label for="male">Male</label>
            <input type='Radio' name="Gender" id='female' value="Female" required/>
            <label for="female">Female</label>
            <input type='radio' name="Gender" id='other' value='Other' required/>
            <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name='active' id='active' className='newUserSelect'>
              <option value="yes" >Yes</option>
              <option value="No" >No</option>
            </select>
             </div>
            <button className='newUserBtn'>Create</button>
      </form>
      </Paper>
    </div>
  );
};

export default NewUser;