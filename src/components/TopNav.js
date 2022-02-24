import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
    render() {
        return(
            <ul className='nav NavBar'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/WeddingParty'>Wedding Party</Link>
                </li>
                <li>
                    <Link to='/Venue'>Venue</Link>
                </li>
                <li>
                    <Link to='/Schedule'>Schedule</Link>
                </li>
                <li>
                    <Link to='/Accomodation'>Accomodations</Link>
                </li>
                <li>
                    <Link to='/Registry'>Registry</Link>
                </li>
                <li>
                    <Link to='/RSVP'>RSVP</Link>
                </li>
            </ul>
        )
    }
}

export default TopNav;