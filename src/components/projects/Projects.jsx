import "./projects.scss";
import {useState} from "react";

export default function Projects() {
        const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./claire-site/assets/projects/tix.png",
            title: "penntix",
            desc: "PennTix is a web application that makes it easy to resell and buy tickets for Penn events and events/concerts in Philly. Users can select an event to see available tickets and seller info and can also select/create an event and list their tickets. I made the profile page which displays a user’s personal information and the tickets they are selling. I also worked on the front end for the events page. ",
            tools: "Python, Django, React, HTML, CSS",
            img: "./claire-site/assets/projects/penntix.png",
        },
        {
            id: "2",
            icon: "./claire-site/assets/projects/data.png",
            title: "data analytics project",
            desc: "This project aims to observe the correlation between the daily intake of different nutrients and diseases rates and life expectancies around the world. We used Random Forest Regressor, XGB, and Ordinary Least Squares Regression for data modeling and prediction making, and we compared their results to see which had the highest performance. I did the data cleaning and preprocessing, exploratory data analysis, and helped with the modeling. ",
            tools: "Python, Pandas SQL",
            img: "./claire-site/assets/projects/545.png",
        },
        {
            id: "3",
            icon: "./claire-site/assets/projects/mine.png",
            title: "minesweeper",
            desc: "I made the classic Minesweeper for my CIS 120 game project. The game features a timer that, paired with File I/O, allows a leaderboard to show the current fastest players’ names and times. The game logic also uses recursion to uncover areas of number tiles once a tile is clicked.",
            tools: "Java",
            img: "./claire-site/assets/projects/minesweeper.png",
        },
        {
            id: "4",
            icon: "./claire-site/assets/projects/claire.png",
            title: "personal website",
            desc: "Hey, that's what you're looking at now! I followed a tutorial on how to make a personal website and had lots of fun experimenting with the layouts and designs.",
            tools: "React, HTML, Sass",
            img: "./claire-site/assets/projects/personalsite.png",
        },
        
    ]

    const handleClick = (way)=>{
        way ==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="projects" id="projects">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <h4>{d.desc}</h4>
                                <p>{d.tools}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="./claire-site/assets/whitearrow.png"  className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="./claire-site/assets/whitearrow.png"  className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}