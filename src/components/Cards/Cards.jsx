//create basic functional componelnt
import React from 'react';

import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import Countup from 'react-countup';

//to imlport multiple classnames
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate } }) => {
    //initiallly we had (props)
    //
    //console.log(data);
    //the data is gotten through props
    //console.log(props);
    if(!confirmed) {
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className= {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary"
                         gutterBottom
                        >Infected

                        </Typography>
                        <Typography variant="h5">
                            <Countup 
                            
                            start = {0}
                            end={confirmed.value}
                            duration={2.5}

                            separator=","
                            />

                           

                        </Typography>
                        <Typography
                        color="textSecondary"
                        >{new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography
                        variant="body2"
                        >Number of active 
                        cases
                        of Covid19

                        </Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary"
                            gutterBottom
                        >Recovered

                        </Typography>
                        <Typography variant="h5">
                            <Countup

                                start={0}
                                end={recovered.value}
                                duration={2.5}

                                separator=","
                            />



                        </Typography>
                        <Typography
                            color="textSecondary"
                        >{new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography
                            variant="body2"
                        >Number of recoveries
                            from
                            of Covid19

                        </Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary"
                            gutterBottom
                        >Deaths

                        </Typography>
                        <Typography variant="h5">
                            <Countup

                                start={0}
                                end={deaths.value}
                                duration={2.5}

                                separator=","
                            />



                        </Typography>
                        <Typography
                            color="textSecondary"
                        >{new Date(lastUpdate).toDateString()}

                        </Typography>
                        <Typography
                            variant="body2"
                        >Number of deaths
                            from
                             Covid19

                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
       
    )
}

export default Cards;