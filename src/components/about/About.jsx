import "./about.scss"

export default function About() {

    return (
        <div className="about" id="about">
            <h1>about</h1>
            <div className="container">
                <div className="left">
                    <img src="./claire-site/assets/penn.png" alt=""/>
                    <h3>activities</h3>
                    <div className="listContainer">
                        <h4>CIS 160 TA</h4>
                        <p>taught weekly recitations to 10+ students</p>
                        <p>explained concepts to students one-on-one during office hours</p>
                        
                        <h4>penn spark</h4>
                        <p>learned basics of HTML/CSS, Django MVC framework, and React</p>
                        <p>worked in team to design and develop useful web applications</p>
                                        
                        <h4>k-beats</h4>
                        <p>production manager</p>
                        <p>filmed and edited music videos for k-beats dance team</p>
                        <a href="https://www.youtube.com/watch?v=y7bkqZo_dmA" target="_blank"><img src="./claire-site/assets/play.png"></img></a>             
                    </div>
                </div>
                <div className="center">
                    <div className="imgContainer">
                        <img src="./claire-site/assets/czhangz.jpg" alt=""/>
                    </div>
                    <h3>this is me</h3>
                    <p>Hello! I'm Claire, a sophomore at the University of Pennsylvania currently majoring in Computer Science and minoring in Fine Arts. While some might view computer science as a more methodical field of study, I enjoy the creative side of it. I have a passion for art and design and try to integrate them into my CS work. To that end, much of my work includes animation and front end design.</p>
                </div>
                <div className="right">
                    <img src="./claire-site/assets/heart.png" alt=""/>
                    <h3>likes and interests</h3>
                    <div className="container">
                        <h4>singing, dancing, playing violin</h4>
                        <img src="./claire-site/assets/violin.png" alt=""/>
                        <h4>stuffed animals, especially sharks</h4>
                        <img src="./claire-site/assets/shark.png" alt=""/>
                        <h4>playing pool</h4>
                        <img className="pool" src="./claire-site/assets/pool.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}