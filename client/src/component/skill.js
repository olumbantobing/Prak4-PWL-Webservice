import React from 'react'
import { createUseStyles } from 'react-jss';
import Progress_bar from './progressbar';
// import { Link } from 'react-scroll'
const styles = createUseStyles({
    wrapIsi: {
        margin: {
            left: 100,
            right: 100,
            bottom: 30
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        width: '40%',
    },
    box2: {
        width: '40%',
    },
    nama: {
        fontSize: 16,
        fontWeight: '500'
    },
    title: {
        textAlign: 'center'
    }
});

function Skill() {
    const classes = styles();
    return (
        <div>
            <h2 className={classes.title}>Skills and Programming Language</h2>
            <div id="skill" className={classes.wrapIsi}>

                <div className={classes.box1}>

                    <div className={classes.nama}>
                        <p>Python</p>
                        <Progress_bar bgcolor="#A9D2F8" progress='60' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>PHP</p>
                        <Progress_bar bgcolor="#A9D2F8" progress='50' height={30} />
                    </div>
                </div>

                <div className={classes.box2}>
                    <div className={classes.nama}>
                        <p>HTML</p>
                        <Progress_bar bgcolor="#A9D2F8" progress='75' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>CSS</p>
                        <Progress_bar bgcolor="#A9D2F8" progress='60' height={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill