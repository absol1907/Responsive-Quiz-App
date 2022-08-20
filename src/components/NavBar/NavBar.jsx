import style from "./NavBar.module.scss"

const NavBar = () => {

    return(
        <ul className={style.navbar}>
            <li><a href="/">Home</a></li>
            <li><a href="/gamesettings">Game Settings</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
    )
}

export default NavBar;