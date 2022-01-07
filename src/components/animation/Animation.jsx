import "./animation.scss"
import AnimationList from "../animationList/AnimationList";
import { useEffect, useState } from "react";
import {aquarium, carrot, carrot2, falling, floss, hug, lofi, traffic} from "../../data";

export default function Animation() {
    const [selected, setSelected] = useState("falling")
    const [data, setData] = useState([])

    const list = [
        {
            id: "falling",
            title: "falling for you",
        },
        {
            id: "carrot",
            title: "oops!",
        },
        {
            id: "carrot2",
            title: "oops! pt. 2",
        },
        {
            id: "floss",
            title: "dance party",
        },
        {
            id: "hug",
            title: "feel better",
        },
        {
            id: "lofi",
            title: "study vibes",
        },
        {
            id: "traffic",
            title: "beep beep",
        },
        {
            id: "aquarium",
            title: "aquarium",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "falling":
                setData(falling)
                break;
            case "carrot":
                setData(carrot)
                break;
            case "carrot2":
                setData(carrot2)
                break;
            case "floss":
                setData(floss)
                break;
            case "hug":
                setData(hug)
                break;
            case "lofi":
                setData(lofi)
                break;
            case "traffic":
                setData(traffic)
                break;
            case "aquarium":
                setData(aquarium)
                break;
            default:
                setData(falling)
        }
    },[selected])

    
    return (
        <div className="animation" id="animation">
            <h1>animation</h1>
            <div className="container">
            <div className="left">
                <ul>
                    {list.map(item=> (
                        <AnimationList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}
                       />
                    ))}
                </ul>
            </div>
            <div className="right">
                <div className="container">
                    {data.map((d) => (
                        <div className="item">
                            <video src={d.video} controls="false" loop/>
                        </div>
                    ))}
                </div>    
            </div>  
            </div>
        </div>
    )
}