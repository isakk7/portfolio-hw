import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import '../styles/Main.scss'
import me from '../assets/mee.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                           
                            <h1>Isaac Adan Lopez</h1>
                            <h5>Soy una persona que le gusta mucho la tecnologia, y me gustaria aprender muchas cosas una vez terminada la carrera.
                                </h5>
                               

                            <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        <button>Hire Me</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={me} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
