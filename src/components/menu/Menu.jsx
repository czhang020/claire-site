import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">about</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">art</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#animation">animation</a>
                </li>
            </ul>
        </div>
    )
}