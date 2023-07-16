import React, { useState } from 'react';
import { Button, Typography, TextField } from '@material-ui/core';

import Project from './Project.j';


const aboutSection = () => {
    return (
        <div>
            <Typography varient='h1'>About Me</Typography>
            <Typography varient='h4'>
                My name is Phuong, and I am a passionate computer science student at Berkeley University. Currently residing in Seattle, I originally hail from Vietnam. I have a deep affinity for coding, and I possess proficiency in both front-end and back-end development. Beyond the realm of programming, I find joy in pursuing various hobbies. Cooking, reading, exploring the outdoors, and even engaging in the thrilling activity of rock climbing are among my favorite pastimes. In addition to my diverse interests, I also have a furry companion—a pet hamster—who brings a sense of warmth and companionship to my life.
            </Typography>
        </div>
    )
}

const portfolioSection = () => {
    return (
        <div>
            <Project/>
        </div>
    )
}

const contactSection = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    varient='outlined' 
                    required
                    label='Name'
                    value={inputName}
                    onChange={(event) => {
                      setInputName(event.target.value);
                    }}
                >
                </TextField>
                <TextField 
                    varient='Outlined' 
                    required
                    label='Email'
                    value={inputEmail}
                    onChange={(event) => {
                      setInputEmail(event.target.value);
                    }}
                >    
                </TextField>
                <TextField 
                    varient='Outlined' 
                    required
                    label='Message'
                    value={inputMessage}
                    onChange={(event) => {
                      setInputMessage(event.target.value);
                    }}
                >
                </TextField>
                <Button>Submit</Button>
            </form>
        </div>
    )
}

const resumeSection = () => {
    return (
        <div>
            <Typography varient='h1'>Phuong To</Typography>
            <div>
                <Typography varient='h3'>Education</Typography>
                <Typography varient='h5'>2022</Typography>
                <Typography varient='h5'>Associate of Science</Typography>

                <Typography varient='h3'>Skills</Typography>
                <Typography varient='h5'>Team-working</Typography>
                <Typography varient='h5'>Testing and debugging</Typography>
                <Typography varient='h5'>Problem solving</Typography>
                <Typography varient='h5'>Time managing</Typography>
                
                <Typography varient='h3'>Language</Typography>
                <Typography varient='h5'>C++</Typography>
                <Typography varient='h5'>Python</Typography>
                <Typography varient='h5'>Java</Typography>
                <Typography varient='h5'>JavaScript</Typography>

                <Typography varient='h3'>Web Development</Typography>
                <Typography varient='h5'>HTML</Typography>
                <Typography varient='h5'>CSS</Typography>
                <Typography varient='h5'>JavaScript</Typography>
                <Typography varient='h5'>Front-end frameworks: React</Typography>
                <Typography varient='h5'>Back-end frameworks: Node.js</Typography>

                <Typography varient='h3'>Database</Typography>
                <Typography varient='h5'>MySQL</Typography>
                <Typography varient='h5'>MongoDB</Typography>
            </div>
        </div>
    )
}
export const Navigation = (props) => {
    if (props.section === 'about') return (aboutSection)
    else if (props.section === 'portfolio') return (portfolioSection)
    else if (props.section === 'contact') return (contactSection)
    else return (resumeSection);
}