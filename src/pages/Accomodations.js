import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';

class Accomodations extends Component {
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
                    <div className="d-flex justify-content-center p-3">
                        <div><h1 style={{ fontSize: '275%', textTransform: 'uppercase'}}>Accomodations</h1></div>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h3>Hotel Booking</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    This is the main hotel being used for the wedding weekend. There are 17 rooms blocked off for the occassion.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Hotel Name:</b> Best Western Plus - Edmonton Airport
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Hotel Address:</b> 5705 50 St, Leduc, AB T9E 6Z8
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>To book:</b> <a href="https://www.bestwestern.com/en_US/book/hotel-rooms.61097.html?groupId=G55FM5B2">Booking Link</a> or call 1-800-661-6467 (refer to the McColman/Christenson room block)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Time to Venue:</b> 35 minutes
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <b>Directions from Hotel to Venue: </b>
                                <ul style={{listStyleType: 'square'}}>
                                    <li>Head out of the parking lot and towards 50th Street</li>
                                    <li>Turn left(South) at 50th Street</li>
                                    <li>Turn right(West) at 50th Avenue</li>
                                    <li>Turn left to merge onto Highway 2 South (towards Red Deer), stay on Highway 2 for ~8km</li>
                                    <li>Take Exit 508 toward Glen Park District W (headed west)</li>
                                    <li>Continue west(right off highway 2) on Township Road 490</li>
                                    <li>Turn left on Range Road 10 (headed south)</li>
                                    <li>After 5.7 KM, turn left at the White Tail Woods sign</li>
                                    <li>Continue until you see the next White Tail Woods sign and turn right</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>Other Accomodation Ideas</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>
                                    Apart from the main hotel, there are a bunch of accomodation opportunities in the area. Below are a few other hotel ideas, as well as campgrounds in the
                                    area. 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Hotels</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Hotel Name: </b> Village Creek Country Inn
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Address: 15 Village Dr RR2, Westerose, AB T0C 2V0
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Time to Venue: 30 minutes
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Note: this hotel is not affiliated with the wedding, book as normal <br/>
                                To book: <a href="https://us01.iqwebbook.com/VCCIAB290/">Booking Link</a> (make sure August 5 - August 7 is selected)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Hotel Name: </b> Travelodge by Wyndham Edmonton Airport
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Address: 5704 50 St, Leduc, AB T9E 6J4
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Time to Venue: 35 minutes
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Note: this hotel is not affiliated with the wedding, book as normal <br/>
                                To book: <a href="https://www.wyndhamhotels.com/travelodge/leduc-alberta/travelodge-edmonton-airport/rooms-rates?brand_id=TL&amp;checkInDate=8/5/2022&amp;checkOutDate=8/7/2022&amp;useWRPoints=false&amp;children=0&amp;iata=00093752&amp;adults=2&amp;rooms=1&amp;cid=ME:vxtmnk3tufi5stq:09760&amp;loc=ChIJh66-6XP5n1MRYGoBxYtf16w&amp;sessionId=1645733535&amp;hotel_id=09760">Booking Link</a> (make sure August 5 - August 7 is selected)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pb-3">
                                ** Any hotels in Leduc airport area will be around 35 minutes from the venue **
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4>Campgrounds</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Campground Name: </b> Hilah Ayers Wilderness RV Park
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Address: 473008 Range Road 10, Mulhurst, AB T0C 2C0
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Time to Venue: 12 minutes
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                To book: <a href="http://www.hilahayers.com">Booking Link</a> (make sure August 5 - August 7 is selected)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Campground Name: </b> Pigeon Lake Provincial park and campground
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Address: Township Rd 470, Alberta T0C 2C0
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Time to Venue: 25 minutes
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                To book: <a href="https://www.albertaparks.ca/parks/central/pigeon-lake-pp/information-facilities/camping/pigeon-lake/#">Booking Link</a> (make sure August 5 - August 7 is selected)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <b>Campground Name: </b> Zeiner Campground
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Address: Gilbert Ave, Mulhurst, AB T0C 2C0
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                Time to Venue: 18 minutes
                            </div>
                        </div>
                        <div className="row ps-4">
                            <div className="col">
                                To book: <a href="https://www.albertaparks.ca/parks/central/pigeon-lake-pp/information-facilities/camping/zeiner/">Booking Link</a> (make sure August 5 - August 7 is selected)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accomodations;