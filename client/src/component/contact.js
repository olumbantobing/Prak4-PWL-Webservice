import React from 'react'
import { createUseStyles } from 'react-jss';
import ig from '../assets/instagram.png';
import lin from '../assets/linkedin.png'
// import { Link } from 'react-scroll'
const styles = createUseStyles({
    wrapContact: {
        backgroundColor: '#A9D2F8'
    },
    sosmed: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        padding: {
            top: 20,
        }
    },
    iconn: {
        height: 40,
        width: 40,
        margin: {
            left: 10,
            right: 10
        }
    },
    teksfoot: {
        textAlign: 'center',
        paddingBottom: 10,
        fontWeight: 'bold'

    }
});

function Contact() {
    const classes = styles();
    return (
        <div id="contact" className={classes.wrapContact}>
            <div className={classes.sosmed}>
                <a href='https://www.instagram.com/olumbantobing/'>
                    <img className={classes.iconn} src={ig} />
                </a>
                <a href=''>
                    <img className={classes.iconn} src={lin} />
                </a>
            </div>
            <div className={classes.teksfoot}>119140159 - Olivia Lumbantobing &copy; 2022</div>
        </div>
    )
}

export default Contact