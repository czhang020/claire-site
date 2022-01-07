import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortflioList";
import "./portfolio.scss"
import {comicPortfolio, designPortfolio, drawingPortfolio, illustrationPortfolio} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("comic")
    const [data, setData] = useState([])

    const list = [
        {
            id: "comic",
            title: "comic",
        },
        {
            id: "design",
            title: "design",
        },
        {
            id: "drawing",
            title: "drawing",
        },
        {
            id: "illustration",
            title: "illustration",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "comic":
                setData(comicPortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "drawing":
                setData(drawingPortfolio)
                break;
            case "illustration":
                setData(illustrationPortfolio)
                break;
            default:
                setData(comicPortfolio)
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>art</h1>
            <ul>
                {list.map(item=> (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt=""/>
                </div>
                ))}
            </div>
        </div>
    )
}