import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'

function Cards ( {data : { confirmed, recovered, deaths,  lastUpdate }}) {

    if(!confirmed){
         return(<h1>Loading ...</h1>)
    }
    return (
        <div className={styles.container}>
            <div className={styles.container__card}>
                <Card>
                    <CardContent>
                        <Typography className={styles.textNormal} >Confirmed</Typography>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                            />
                        </h2>
                        <h5 className={styles.textSmall}> REAL DATE</h5>
                        <Typography className={styles.textNormal} >{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.container__card}>
                <Card>
                    <CardContent>
                        <Typography className={styles.textNormal}>Recovered</Typography>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","/>
                        </h2>
                        <h5 className={styles.textSmall}> REAL DATE</h5>
                        <Typography className={styles.textNormal}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.container__card}>
                <Card>
                    <CardContent>
                        <Typography className={styles.textNormal}>Deaths</Typography>
                        <h2 className={styles.textBig}>
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","/>

                        </h2>
                        <h5 className={styles.textSmall}> REAL DATE</h5>
                        <Typography className={styles.textNormal}>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Card>
            </div>            
        </div>         
    
    )
}

export default Cards
