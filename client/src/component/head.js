import React from 'react';
import bg from '../assets/bg.jpg';
import profile from '../assets/profile.png'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'
const styles = createUseStyles({
    wrap: {
        alignItems: 'center',
        textAlign: 'center',
        margin: {
            left: 100,
            right: 100,
        },
        padding: {
            top: 50
        }
    },
    latar: {
        padding: {
            bottom: 100
        },

        backgroundSize: "cover",
    },
    prof: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    deskripsi: {
        fontSize: 20
    },
    navbar: {
        backgroundColor: 'white',
        height: 40,
        fontWeight: '500',
    },
    subnav: {
        display: 'inline',
        "&:hover": {
            color: "#A9D2F8",
            fontWeight: 'bold',
            padding: 3,
            borderRadius: 5
        },
        cursor: 'pointer'
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

function Head() {
    const classes = styles()
    return (
        <div className={classes.latar} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', }} >
            <div className={classes.navbar}>
                <ul className={classes.nav}>
                    <li className={classes.subnav}>Home</li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}> <Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li className={classes.subnav}> <Link to="skill" spy={true} smooth={true}>Skill</Link></li>
                    <li className={classes.subnav}> <Link to="portofolio" spy={true} smooth={true}>Portofolio</Link></li>
                    <li className={classes.subnav}> <Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    <li className={classes.subnav}></li>
                </ul>
            </div>
            <div id="about" className={classes.wrap}>
                <img src={profile} alt="prof" className={classes.prof} />
                <h1 className={classes.nama}>Olivia Marlinang Elizabeth Christine Lumbantobing</h1>
                <p className={classes.deskripsi}>Hi! I am a student of Informatics Engineering at 
                Sumatera Institute of Technology and currently in my third year. 
                I am a fast learner, hard worker, eager to learn, and get things done on time. 
                I am keen with social and technology. I am able to work well either in a team or independently.</p>
            </div>
        </div >
    )
}


export default Head