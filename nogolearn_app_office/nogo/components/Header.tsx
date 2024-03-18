import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button'; 
import axios from 'axios'; 
import SecondPage from './SecondPage';

const useStyles = makeStyles({
  container: {
    position: 'relative', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  logo: {
    position: 'absolute',
    top: '200px', 
    left: '50%', 
    transform: 'translateX(-50%)',
  },
  rectangle: {
    width: '470px',
    height: '300px',
    backgroundColor: '#B8D6DE', 
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '5px 10px 269px 33px rgba(148,133,133,0.75)', 
  },
  input: {
    width: 'calc(100% - 40px)', 
    marginTop: '20px', 
    padding: '15px 20px', 
    borderRadius: '50px', 
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
  },
  usernameInput: {
    width: 'calc(100% - 40px)', 
    marginTop: '40px',
    padding: '15px 20px',
    borderRadius: '50px', 
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
  },
  button: {
    marginTop: '20px', 
    borderRadius: '19px', 
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', 
    width: '50%', 
    padding: '15px', 
    color: 'black',
    fontSize: '15px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  bold: {
    fontWeight: 'bold', 
    color: '#7a57d1',
  },
});

const users = [
  { username: 'mahan', password: 'mahan123', phoneNumber: '09331746644' },
];

const Header: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLogin = async () => {
    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      try {
        
        await axios.post('http://localhost:8001/api/customer/auth/signin', { phoneNumber: user.phoneNumber }, { withCredentials: false });

        setLoggedIn(true);
        setShowMessage(true);
        
        console.log('User logged in successfully');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      setShowMessage(false);
      alert('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  
  if (loggedIn) {
    return <SecondPage />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <svg width="240" height="86" viewBox="0 0 240 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M211.931 64.21C195.431 64.21 184.101 52.22 184.101 36.6C184.101 21.09 195.431 8.99 211.931 8.99C228.431 8.99 239.761 21.09 239.761 36.6C239.761 52.22 228.431 64.21 211.931 64.21ZM195.211 36.6C195.211 45.73 201.701 53.54 211.931 53.54C222.161 53.54 228.541 45.73 228.541 36.6C228.541 27.47 222.161 19.55 211.931 19.55C201.701 19.55 195.211 27.47 195.211 36.6Z" fill="#7A57D1"/>
          <path d="M137.163 85.55L133.973 74.99H150.473C159.383 74.99 166.203 69.49 166.203 59.48V37.04C166.203 25.71 159.273 19.55 150.253 19.55C141.343 19.55 134.303 26.04 134.303 35.61C134.303 44.74 140.573 52.55 152.673 52.55H159.383L156.083 63H151.793C134.413 63 123.193 51.01 123.193 35.72C123.193 19.88 134.963 8.99 150.363 8.99C165.763 8.99 177.203 19.55 177.203 36.71V59.48C177.203 75.87 165.543 85.55 150.583 85.55H137.163Z" fill="#7A57D1"/>
          <path d="M90.222 64.21C73.722 64.21 62.392 52.22 62.392 36.6C62.392 21.09 73.722 8.99 90.222 8.99C106.722 8.99 118.052 21.09 118.052 36.6C118.052 52.22 106.722 64.21 90.222 64.21ZM73.502 36.6C73.502 45.73 79.992 53.54 90.222 53.54C100.452 53.54 106.832 45.73 106.832 36.6C106.832 27.47 100.452 19.55 90.222 19.55C79.992 19.55 73.502 27.47 73.502 36.6Z" fill="#7A57D1"/>
          <path d="M0 28.568C0 11.16 11.008 0.151997 27.264 0.151997C43.52 0.151997 54.528 11.16 54.528 28.568V63H41.728V28.568C41.728 18.584 35.968 12.44 27.264 12.44C18.432 12.44 12.8 18.584 12.8 28.568V63H0V28.568Z" fill="#7A57D1"/>
        </svg>
      </div>
      <div className={classes.rectangle}>
        <h1 className={classes.title}>
          به {' '}
          <span className={classes.bold}>نوگو</span> {' '}
          خوش امدید
        </h1>
        <div>
          <input type="text" placeholder="نام کاربری" className={classes.usernameInput} value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="رمز عبور" className={classes.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin} style={{ backgroundColor: '#7cdb98' }}>ادامه</Button>
        {showMessage && loggedIn && (
          <p>پیام به شماره تلفن شما ارسال شد.</p>
        )}
      </div>
    </div>
  );
};

export default Header;
