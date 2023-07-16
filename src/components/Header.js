import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';


export const Header= () => {
    const [section, setSection] = useState('about');

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h1"> 
                        Phuong To 
                    </Typography>
                    <Button 
                        onClick={() => {
                            setSection('about')
                        }} 
                    >About Me</Button>
                    <Button
                        onClick={() => {
                            setSection('portfolio')
                        }}
                    >Portfolio</Button>
                    <Button
                        onClick={() => {
                            setSection('contact')
                        }}
                    >Contact</Button>
                    <Button
                        onClick={() => {
                            setSection('resume')
                        }}
                    >Resume</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}