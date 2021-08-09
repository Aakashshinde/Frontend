import React from 'react'
import './Home.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home(){
    return(
        <div class="header">
            <div class="title">
            <a href="https://fontmeme.com/fonts/mr-robot-font/"><img src="https://fontmeme.com/permalink/210809/5b79e66832565bbe02266701f0b324c1.png" alt="mr-robot-font" border="0"></img></a>
            </div>
            <div class="banner">
                <div class="app-text">
                    <h3>CYBERSECURITY CLUB</h3>
                    <h1>For<br/>Aspirers</h1>
                    <p>Kickstart your journey of learning cybersecurity for free through this platform. Quizzes, posts and articles related to cybersecurity will be posted here. An encyclopedia for Ethical Hackers!</p>

                    
                </div>
            </div>
            <div class="about-services">
                <ul>
                    <li>
                        <img src="https://i.ibb.co/9pnzksf/537064-removebg-preview.png"></img>
                        <h1>Founder</h1>
                        <p>The club was found and started by Karthik Balejipalli in the year ----. The goal was to share the knowledge he had to fellowmates and create awareness realted to cyber security.</p>

                    </li>
                    <li></li>
                    <li>
                        <img src="https://i.ibb.co/5925Nm8/go-pro-icon-black-network-icon-11553448934rrrspcwl7j-removebg-preview.png"></img>
                        <h1>Our Network</h1>
                        <p>The club got a tremundous response when it was started and continues to be so. We have added a lot of nodes in our network consisting of certified and experienced professionals.</p>

                    </li>
                    <li></li>
                    <li>
                        <img src="https://i.ibb.co/7kgDJCh/the-president-1723739-1464641-removebg-preview.png"></img>
                        <h1>Presidents</h1>
                        <p>Presidents play an important role in the development of the club, don't they? Hence we got the best to handle the club. The five presidents so far were: Karthik, Rishabh, Surya, Anudeep and Akash. </p>

                    </li>
                </ul>
            </div>
            <div class="social-icons">
                <ul>
                    <br/><br/><br/><FacebookIcon onClick={() => window.open('https://www.facebook.com/')}></FacebookIcon><br/><br/><br/>
                    <InstagramIcon onClick={() => window.open('https://instagram.com/cybersec_official?utm_medium=copy_link')}></InstagramIcon><br/><br/><br/>
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com')}></LinkedInIcon>
                    
                </ul>
            </div>
        </div>
    )
}

export default Home