import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';


export const Header= ({ setSection }) => {


    const handleSectionClick = (option) => {
        setSection(option);
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h2"> 
                        Phuong To   
                    </Typography>
                    <Button 
                        
                        onClick={() => {
                            handleSectionClick('about')
                        }} 
                    >About Me</Button>
                    <Button
                        onClick={() => {
                            handleSectionClick('portfolio')
                        }}
                    >Portfolio</Button>
                    <Button
                        onClick={() => {
                            handleSectionClick('contact')
                        }}
                    >Contact</Button>
                    <Button
                        onClick={() => {
                            handleSectionClick('resume')
                        }}
                    >Resume</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};
