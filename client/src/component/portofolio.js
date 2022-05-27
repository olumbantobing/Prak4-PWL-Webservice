import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    baris: {
        // flexDirection: 'row',
        display: 'flex',
        // justifyContent: 'space-between',
        margin: {
            left: 50,
            right: 50,
        },
        flexWrap: 'wrap'
    },
    wrapbig: {
        padding: {
            left: 80,
            right: 80,
            top: 5
        },
        backgroundColor: '#DDE4EA'
    },
    gambar: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
    },
    kolom: {
        textAlign: 'center',
        padding: {
            left: 20,
            right: 20,
        },
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        "&:hover": {
            background: "#efefef",
            padding: {
                left: 24,
                right: 20
            },
        },
        margin: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 30
        },
        maxWidth: 300,
    },
    title: {
        textAlign: 'center'
    }
});

const Portofolio = () => {
    const [daftar] = useState(['Sistem Inventaris Barang']);
    const [images] = useState([require('../assets/project1.jpeg')])
    // console.log(images)
    console.log(images[3])
    const classes = styles();
    return (
        <div id="portofolio" className={classes.wrapbig}>
            <h2 className={classes.title}>Portofolio</h2>
            <div className={classes.baris}>
                {daftar.map((item, index) => (
                    <div key={index} className={classes.kolom}>
                        <h4>#{index + 1} Project</h4>
                        <div>
                            <img className={classes.gambar} src={images[index]} />
                        </div>
                        <hr></hr>
                        <p>{item}</p>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Portofolio