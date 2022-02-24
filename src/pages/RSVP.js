import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';
import { send } from 'emailjs-com';

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname : "",
            mailing : "", 
            attending : "",
            bringingPlusOne : "",
            plusOneName : "",
            dietary : "",
            songs : "",
            plusOneList : ["Megan Bishop", "Ashley Drinkill", "Allison Spinner", "Cai Pare"],
            hasPlusOne : false
        };
    }

    handleName = (e) => {
        this.setState({ fullname: e.target.value });
    }

    handleMailing = (e) => {
        this.setState({ mailing: e.target.value });
    }

    handleAttending = (e) => {
        this.setState({ attending: e.target.value });
        console.log("attending: " + this.state.attending);
    }

    handlePlusOne = (e) => {
        this.setState({ bringingPlusOne: e.target.value });
        console.log("plusone: " + this.state.bringingPlusOne);
    }

    handlePlusOneName = (e) => {
        this.setState({ plusOneName: e.target.value });
    }

    handleDietary = (e) => {
        this.setState({ dietary: e.target.value });
    }

    handleSongs = (e) => {
        this.setState({ songs: e.target.value});
    }

    checkName = () => {
        this.setState({ hasPlusOne: false});
        for(var i = 0; i < this.state.plusOneList.length; i++) {
            var currName = this.state.plusOneList.at(i);
            console.log("Indexed name: " + currName);
            console.log("Entered name: " + this.state.fullname);
            if(currName === this.state.fullname){
                this.setState({ hasPlusOne: true});
                break;
            }
        }
    }

    sendForm = () => {
        var formInfo = {
            fullname: this.state.fullname,
            mailing: this.state.mailing, 
            attending: this.state.attending, 
            bringingPlusOne: this.state.bringingPlusOne, 
            plusOneName: this.state.plusOneName,
            dietary: this.state.dietary,
            songs: this.state.songs
        };
        send(
            'service_m65ihgd',
            'template_d1pgqlo', 
             formInfo, 
             'user_O7sR8Mr8lSEd90g1I6uqG'
        )
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
            console.log("FAILED...", err);
        })
    }

    render() {
        return(
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className='col position-absolute'>
                        <SideFlower />
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="nav navbar"><TopNav /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center p-3 pb-2">
                        <div><h1 style={{ fontSize: '300%' }}>RSVP</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h3 style={{fontFamily:'waterfall'}}>Please RSVP by July 16, 2022</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <p>** Although we love your little ones, this is an event for 16 years old and up 
                            with the exception of nursing babies **
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-8">
                        <div className="row p-3 mt-3">
                        <div className="col-4">
                            Enter first and last name as seen on your invitation: 
                        </div>
                        <div className="col-6">
                            <input type='text' value={this.state.fullname} placeholder="Enter full name" size="40" onChange={this.handleName} onBlur={this.checkName}></input>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-4">
                            Enter Mailing Address:
                        </div>
                        <div className="col-6">
                            <input type='text' value={this.state.mailing} placeholder="Enter full mailing address" size="40" onChange={this.handleMailing}></input>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-4">
                            Will you be attending the reception?
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4 d-flex justify-content-between align-items-center">
                                    Yes <input type="radio" value="yes" checked={this.state.attending === 'yes'} onChange={this.handleAttending}></input>
                                    No <input type="radio" value="no" checked={this.state.attending === 'no'} onChange={this.handleAttending}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3" style={{display:this.state.hasPlusOne ? null : 'none'}}>
                        <div className="col-4">
                            Will you be bringing a plus one? 
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-4 d-flex justify-content-between align-items-center">
                                    Yes <input type="radio" value="yes" checked={this.state.bringingPlusOne === 'yes'} onChange={this.handlePlusOne} ></input>
                                    No <input type="radio" value="no" checked={this.state.bringingPlusOne === 'no'} onChange={this.handlePlusOne}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    If yes, what's their full name? <input type="text" value={this.state.plusOneName} size="15" onChange={this.handlePlusOneName}></input>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div className="row p-3">
                        <div className="col-4">
                            Do you have any dietary restrictions? Add them here
                        </div>
                        <div className="col-6">
                            <textarea value={this.state.dietary} placeholder="Enter dietary restrictions here" rows="3" cols="40" onChange={this.handleDietary}></textarea>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-4">
                            If you have any song requests, include them here!
                        </div>
                        <div className="col-6">
                            <textarea value={this.state.songs} placeholder="Limit to 2-3 songs please" rows="3" cols="40" onChange={this.handleSongs}></textarea>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-10 d-flex justify-content-center">
                            <button type="button" className="btn btn-lg buttonPrimary" onClick={this.sendForm}>Submit RSVP</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RSVP;