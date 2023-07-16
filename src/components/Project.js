import React from 'react';
import { Link, Grid, Typography } from '@mui/material';

export const Project = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid 
                    item xs={6}
                    sx={{ backgroundImage: '../../public/kitchen.png' }}
                >
                    <Typography>Kitchen Alchemy</Typography>
                    <Link href='https://kitchen-alchemy.herokuapp.com/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/Zed-CSP/dangerForce-Proj-1'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
                <Grid  
                    item xs={6}
                    sx={{ backgroundImage: '../../public/password.jpg' }}
                >
                    <Typography>password Generator</Typography>
                    <Link href='https://phuongtovn.github.io/Generate-password/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/phuongtoVN/Generate-password'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
                <Grid  
                    item xs={6}
                    sx={{ backgroundImage: '../../public/quiz.jpg' }}
                >
                    <Typography>Code Quiz</Typography>
                    <Link href='https://phuongtovn.github.io/Code-quiz/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/phuongtoVN/Code-quiz'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
                <Grid  
                    item xs={6}
                    sx={{ backgroundImage: '../../public/sneeze.jpg' }}
                >
                    <Typography>Sneezer</Typography>
                    <Link href='https://zed-csp.github.io/dangerForce-Proj-1/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/Zed-CSP/dangerForce-Proj-1'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
                <Grid  
                    item xs={6}
                    sx={{ backgroundImage: '../../public/weather.jpg' }}
                >
                    <Typography>Weather Dashboard</Typography>
                    <Link href='https://phuongtovn.github.io/weather_dashboard/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/phuongtoVN/weather_dashboard'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
                <Grid  
                    item xs={6}
                    sx={{ backgroundImage: '../../public/work.jpg' }}
                >
                    <Typography>Work Schedule</Typography>
                    <Link href='https://phuongtovn.github.io/Workday-schedule/'>
                        <img src='../../public/link.jpg' alt='link logo'/>
                    </Link>
                    <Link href='https://github.com/phuongtoVN/Workday-schedule'>
                        <img src='../../public/github.jpg' alt='link logo'/>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}