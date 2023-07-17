import React from 'react';
import { Link, Grid, Typography } from '@material-ui/core';

const Project = () => {
  const gridItemStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200px', // Set a height for the grid item if needed
  };
const gridContainerStyle = {
  padding: '30px', // Add desired spacing here (e.g., 10px, 20px, etc.)
};
const typographyStyle = {
    fontWeight: 'bold',
    color: 'red',
  };
  return (
    <div>
      <Grid container spacing={10} style={gridContainerStyle}>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            ...gridContainerStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/kitchen.png)`,
          }}
        >
          <Typography style={typographyStyle}>Kitchen Alchemy</Typography>
          <Link href='https://kitchen-alchemy.herokuapp.com/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='link logo' />
          </Link>
          <Link href='https://github.com/Zed-CSP/dangerForce-Proj-1'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/password.jpg)`,
          }}
        >
          <Typography style={typographyStyle}>password Generator</Typography>
          <Link href='https://phuongtovn.github.io/Generate-password/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='link logo' />
          </Link>
          <Link href='https://github.com/phuongtoVN/Generate-password'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/quiz.jpg)`,
          }}
        >
          <Typography style={typographyStyle}>Code Quiz</Typography>
          <Link href='https://phuongtovn.github.io/Code-quiz/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='link logo' />
          </Link>
          <Link href='https://github.com/phuongtoVN/Code-quiz'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/sneeze.jpg)`,
          }}
        >
          <Typography style={typographyStyle}>Sneezer</Typography>
          <Link href='https://zed-csp.github.io/dangerForce-Proj-1/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='github link' />
          </Link>
          <Link href='https://github.com/Zed-CSP/dangerForce-Proj-1'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/weather.jpg)`,
          }}
        >
          <Typography style={typographyStyle}>Weather Dashboard</Typography>
          <Link href='https://phuongtovn.github.io/weather_dashboard/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='github link' />
          </Link>
          <Link href='https://github.com/phuongtoVN/weather_dashboard'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            ...gridItemStyle,
            backgroundImage: `url(${process.env.PUBLIC_URL}/work.jpg)`,
          }}
        >
          <Typography style={typographyStyle}>Work Schedule</Typography>
          <Link href='https://phuongtovn.github.io/Workday-schedule/'>
            <img src={`${process.env.PUBLIC_URL}/link.jpg`} alt='github link' />
          </Link>
          <Link href='https://github.com/phuongtoVN/Workday-schedule'>
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='link logo' />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
