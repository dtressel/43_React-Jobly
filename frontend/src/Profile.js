import { useContext } from "react";
import { Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import useFields from './hooks/useFields';
import UserContext from './UserContext';
import './LoginSignup.css';

const Profile = ({ validatePassword, updateUser }) => {
  const user = useContext(UserContext);
  const [formData, handleChange, resetForm] = useFields({
    username: '',
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: ''
  })
  const navigate = useNavigate();

  const handleSubmit = async evt => {
    evt.preventDefault();
    const validated = await validatePassword(formData.password);
    if (validated) {
      const results = await updateUser({ firstName: formData.firstName,
                                         lastName: formData.lastName,
                                         email: formData.email });
      if (results.updated) {
        alert(results.message);
        navigate("/");
      }
      else {
        alert(results.message);
      }
    }
    else {
      alert('Invalid password. Changes not saved. Please try again.');
    }
  }

  return (
    <>
      <h2 className="auth-form-header">Profile</h2>
      <div className="auth-form-wrapper">
        <form onSubmit={handleSubmit} className="auth-form">
          <Label htmlFor="username">Username</Label>
          <Input 
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange} 
            disabled
            placeholder={user.username}
          />
          <Label htmlFor="firstName">First Name</Label>
          <Input 
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Please confirm your current password to apply changes"
          />
          <Button type="submit" color="primary">Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Profile;