import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';
import weddingpartypic from '../style/couplepic.jpg';


class WeddingParty extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col position-absolute'>
                        <SideFlower />
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="nav navbar "><TopNav /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div><h1 style={{ fontSize: '275%', textTransform: 'uppercase'}}>Meet the Wedding Party</h1></div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Sarah Christenson &amp; Brady McColman<br/>
                                <div style={{color: '#707070'}}>Bride and Groom</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <img src={weddingpartypic} alt='sarah and brady'/>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Brittani Shaver Flahr<br/>
                                <div style={{color: '#707070'}}>Maid Of Honour</div>
                            </div>
                            <div className="col-8">
                                Sarah and I know each other from volunteering together, but really connected and became good friends
                                in 2018 after she got back from YWAM. She's been my go-to person ever since, whenever I need someone to
                                talk to, pray with, or take shopping. We share a love of hiking and spending time in the mountains, but 
                                most weeks you can find us hanging out together at the climbing gym! One of my favorite things about my
                                friendship with Brady is that he always says "I'll go if Britt goes!", so I guess it's a good thing that 
                                Sarah asked me to be in the wedding party!
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Allison Spinner <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
                            </div>
                            <div className="col-8">
                                i met Sarah at Leo Nickerson Elementary School - back in the days of class pets, sleepovers, 
                                and handmade birthday party invitations. I've been there for all the phases of Sarah's hair - 
                                ginger, bangs, bob, you name it! I met Brady in high school through young life, and while I haven't 
                                known him quite as long, it's enough to know that he is without a doubt the person for Sarah. Getting 
                                the Facebook message from Brady asking if we were all in town on a specific day (wink wink nudge nudge)
                                was so special to me to experience and I am so thrilled to be a part of their big day.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Enter Name Here <br/>
                                <div style={{color: '#707070'}}>Enter Role Here</div>
                            </div>
                            <div className="col-8">
                                Enter Information here
                                Integer luctus vitae eros vel feugiat. Vestibulum nulla mi, sagittis in mi in, porta pellentesque arcu. Pellentesque 
                                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur porttitor tellus interdum 
                                leo vestibulum condimentum. Etiam dapibus, dolor vitae porta fringilla, mauris justo tempus nisi, at finibus arcu mi 
                                a est. Aenean nunc ex, dictum id aliquet sed, efficitur sed urna. In tincidunt nisi metus, in mollis libero suscipit 
                                ornare. Proin molestie enim ac erat maximus, in elementum eros mattis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeddingParty;