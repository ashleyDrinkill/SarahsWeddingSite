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
                            The first time we met, we didn't even know we had met. We both attended the same high school, went to the same events, 
                            and had many mutual friends. It wasn't until we both volunteered together that we discovered one another's love for 
                            super cool (definitely not lame) music, rock climbing, and making one another laugh. Friendship was immediate and then 
                            came the love part. After nearly 5 years together we still love cool (but now slightly lame) music, climbing lots of 
                            rocks, and bringing tremendous amounts of joy to one another. We cannot wait to grow older and deeper in love not only 
                            as best friends but also as soulmates.
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
                            I've known Sarah back from our highschool days. Since then she's been a loyal friend. And I'm blessed to be a 
                            part of this wedding day. I remember the first time she told me her and Brady were an item. It was when I had 
                            gotten back from living in Ireland and we took a long walk through river valley to catch up on the months we'd 
                            been a part. it was crazy to have been a part for roughly 5 months and in that time they had developed a relationship. 
                            It's been a privilege to see Brady and Sarah grow and to see my best friend fall in love with someone like Brady.

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Connor Minshull <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                                I met Brady when we were in highschool, and we quickly became friends towards the end of grade 12. We weren't super close 
                                until shortly after highschool when I joined a youth group with him as leaders, and there we started becoming great friends.
                                We've been good friends ever since, and he helped me through a lot in my faith in our early adult life, which I'll forever
                                be thankful for. 
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
                            I've known Sarah since elementary school, but I wasn't her friend until junior high— and even then, I wasn't sure if I really liked 
                            her. Lucky for me, I quickly realized that Sarah is a really hard person not to like, and she has been one of my closest friends since. 
                            I have many memories of wine nights, weekend trips, and more that I deeply cherish. Many of those wine nights were spent listening to 
                            Sarah as she denied that Brady had any feelings for her— they were just friends. I am so excited to be included in their wedding day 
                            and get to say, “I told you so."
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Asher McColman <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                                I am Bradys youngest brother and we play video games and talk about TV shows. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Kelsie Wert<br/>
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
                                Walter Bonilla <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                            I met Brady through younglife a few years ago. We got close because of our love for sports and standup comedy. Our relationship grew deeper 
                            when he forced me to live with him for a year. That's when I really got to see how well him and Sarah worked together as a couple even though 
                            she would steal my coffee all the time.
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
                                how great they are together. I cannot wait to see what shenanigans they get up to at the wedding, a couple with that sense of 
                                humor must hava some stuff up their sleeves!
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Chase McColman <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                            Brady's my oldest brother and has always been a role model for me. He always somehow convinced me to come out to youth group or whatever weird 
                            sport he was playing at the time like spikeball or tennis. Seeing him getting married is crazy to imagine because until recently the guy didn't
                             really have great game but it's awesome to see the connection him and Sarah have and I'm super excited for them.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-5 pt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Emily Vilcsak <br/>
                                <div style={{color: '#707070'}}>Bridesmaid</div>
                            </div>
                            <div className="col-8">
                            Sarah and I started out as summer camp pals, where I also met Brady. We volunteered together and quickly became close. 
                            We've gone on rafting and camping trips together, we worked together, and now Sarah and I are roommates until their big day! 
                            Our lives have been weaved together in so many different ways. Now, every time either of us have a big win in life, we have 
                            a dance party in our apartment to Doja Cat's “Woman.” You'll catch me on the dance floor when that song comes on to celebrate 
                            this incredible woman and her man. I'm so excited for both Sarah and Brady as they enter into this next chapter of life together!
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                Spencer Burchett <br/>
                                <div style={{color: '#707070'}}>Groomsman</div>
                            </div>
                            <div className="col-8">
                            Brady and I met at a church event in 2015. Since then, Brady and I have become tennis rivals, travelled the world together 
                            (or at least to Portland), and even lived together for over a year. While I pretend to hate it, Brady's knack for making 
                            puns is a key part of our friendship.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeddingParty;