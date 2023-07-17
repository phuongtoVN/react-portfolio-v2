import React from 'react';
import { AppBar, Toolbar, Link, Grid } from '@material-ui/core';

export const Footer = () => {
    return (
        <div>
            <AppBar 
                position="fixed"
                style={{ top: 'auto', bottom: 0 }}
            >
              <Toolbar>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <Link href='https://github.com/phuongtoVN'>
                            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='Github logi'/>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link href='https://www.linkedin.com/in/phuong-to-b83535214/'>
                            <img src= {`${process.env.PUBLIC_URL}/linkedin.png`} alt='Linkedin'/>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link href='https://twitter.com/PhuongTo597601'>
                            <img src={`${process.env.PUBLIC_URL}/Twitter.png`} alt='Twitter'/>
                        </Link>
                    </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
        </div>
    )
}