
import React, { useState } from 'react';
import { Button, Typography, TextField } from '@material-ui/core';

import Project from './Project';
import Header from './Header';
const AboutSection = () => {
  return (
    <div>
      <Typography variant='h3'>About Me</Typography>
      <img src={`${process.env.PUBLIC_URL}/a.jpg`} alt='link logo' />
      <Typography variant='h6'>
        My name is Phuong, and I am a passionate computer science student at Berkeley University. Currently residing in Seattle, I originally hail from Vietnam. I have a deep affinity for coding, and I possess proficiency in both front-end and back-end development. Beyond the realm of programming, I find joy in pursuing various hobbies. Cooking, reading, exploring the outdoors, and even engaging in the thrilling activity of rock climbing are among my favorite pastimes. In addition to my diverse interests, I also have a furry companion—a pet hamster—who brings a sense of warmth and companionship to my life.
      </Typography>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div>
      <Project />
    </div>
  );
};

const ContactSection = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputName('');
    setInputEmail('');
    setInputMessage('');
  };
  const textFieldStyle = {
    marginTop: '20px', // You can adjust the margin value as needed
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={textFieldStyle}>
            <TextField
              variant='outlined'
              required
              label='Name'
              value={inputName}
              onChange={(event) => {
                setInputName(event.target.value);
              }}
            />
        </div>

        <div style={textFieldStyle}>
            <TextField
              variant='outlined'
              required
              label='Email'
              value={inputEmail}
              onChange={(event) => {
                setInputEmail(event.target.value);
              }}
            />
        </div>

        <div style={textFieldStyle}>
            <TextField
              variant='outlined'
              required
              label='Message'
              multiline
              rows={9}
              value={inputMessage}
              onChange={(event) => {
                setInputMessage(event.target.value);
              }}
            /> 
        </div>
        <Button type='submit' variant="contained"  style={textFieldStyle}>Submit</Button>
      </form>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <div>
      
      <Typography variant='h1'>Phuong To</Typography>
          <div>
              <Typography variant='h3'>Education</Typography>
              <Typography variant='h5'>2022</Typography>
              <Typography variant='h5'>Associate of Science</Typography>
              <Typography variant='h3'>Skills</Typography>
              <Typography variant='h5'>Team-working</Typography>
              <Typography variant='h5'>Testing and debugging</Typography>
              <Typography variant='h5'>Problem solving</Typography>
              <Typography variant='h5'>Time managing</Typography>
              
              <Typography variant='h3'>Language</Typography>
              <Typography variant='h5'>C++</Typography>
              <Typography variant='h5'>Python</Typography>
              <Typography variant='h5'>Java</Typography>
              <Typography variant='h5'>JavaScript</Typography>
              <Typography variant='h3'>Web Development</Typography>
              <Typography variant='h5'>HTML</Typography>
              <Typography variant='h5'>CSS</Typography>
              <Typography variant='h5'>JavaScript</Typography>
              <Typography variant='h5'>Front-end frameworks: React</Typography>
              <Typography variant='h5'>Back-end frameworks: Node.js</Typography>
              <Typography variant='h3'>Database</Typography>
              <Typography variant='h5'>MySQL</Typography>
              <Typography variant='h5'>MongoDB</Typography>
          </div>
      
    </div>
  );
};

export const Navigation = ({ section }) => {
  return (
    <div>

      {section === 'about' && <AboutSection />}
      {section === 'portfolio' && <PortfolioSection />}
      {section === 'contact' && <ContactSection />}
      {section === 'resume' && <ResumeSection />}
    </div>
  );
};
