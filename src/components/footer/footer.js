import React from 'react'
import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
// import {Link} from 'react-router-dom'

const Footer =() => {

    return(
        <div>
            <footer className= 'text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                    <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>
                    </nav>
                </div>
            </footer>

        </div>
    )
}
export default Footer
