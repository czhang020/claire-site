import "./animationList.scss"

export default function animationList({id, title, active, setSelected}) {
    return (
        <li className={active ? "animationList active" : "animationList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}