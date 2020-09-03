import React, { useState } from 'react'
import Search from './Search'
import { Button } from '@material-ui/core'
import './Banner.css'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {/* DATER PICKER */}
                {showSearch && <Search />}

                <Button 
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {/* DATER PICKER */}
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner