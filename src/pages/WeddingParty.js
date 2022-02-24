import { Component } from "react/cjs/react.production.min";
import TopNav from '../components/TopNav.js';
import SideFlower from '../components/sideFlower.js';
import weddingpartypic from '../style/couplepic.jpg';


class WeddingParty extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
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
                                Eric Moon <br/>
                                <div style={{color: '#707070'}}>Best Man</div>
                            </div>
                            <div className="col-8">
                                Brady and I met when we were just 8 years old playing on the same minor hockey team. Ever since then 
                                we've been joined at the hip doing everything together. We still play hockey to this day!
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
                                Sam McColman <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                                I was Bradys roommate, hockey line-mate, late night chatter, and have seen him get ill 30+ times. 
                                Brady also told me him and Sarah were going on dates back when Brady didn't talk to girls. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Cai Pare <br/>
                                <div style={{color: '#707070'}}>Bridesman</div>
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
                                Megan Bishop <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
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
                                Kelsie  <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
                            </div>
                            <div className="col-8">
                            I briefly met Sarah when she was doing work crew and I was doing summer staff at rock ridge canyon in 2016! When I moved to 
                            Edmonton, I started to hang out with a few people from rock ridge, including Sarah. Over the next few years we hung out a lot more, 
                            went to small groups together, found indie band concerts to go to and took small road trips to veggreville or elk island. She is 
                            truly one of those people that you know is going to be a lifelong friend of yours, and I can't explain how much I appreciate her 
                            for being that to me! Brady and I also met at rock ridge canyon, but as campers in 2014! This was back in his young, super short hair 
                            phase, so you can't blame me for thinking he was younger than his brother Sam. We have both grown up a lot in the last 8 years, and 
                            yet I think both of our awful puns, and jokes have stayed the same. From sonic boom weekend, to charades in a Calgary basement, I can 
                            always count on Brady being the guy who's down for great conversations, and a lot of laughing. One of the best guys you can know!
                            Knowing these two separate, to knowing them together has been an absolute treasure. I am over the moon excited for these two gems!! 
                            I have third wheeled them for years, and I am so excited to do the same at their wedding!
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
                                Ashley Drinkill <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
                            </div>
                            <div className="col-8">
                                Sarah and I had a rocky start to our friendship; back in the days of elementary school cliques and playground drama I was actually a 
                                bully towards her (I cant believe it either). I can only thank the gods that she had the heart to forgive me the many years later when 
                                we connected again. Since highschool, Sarah and I have shared many crazy adventures, including mountain trips, wine nights, and many more!
                                I am so thankful that I can call her one of my closest friends. All the times I've spent with Brady and Sarah as a couple makes me realize 
                                how compatible they are for eachother. I cannot wait to see what shenanigans they get up to at the wedding, a couple with that sense of 
                                humor must hava some stuff up their sleeves!
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
                                Emily Vilsack <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
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