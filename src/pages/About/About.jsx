import style from "./About.module.scss"

const About = () => {
    
    return(
        <div>
            <ul>
                <li>This is a bootcamp graduation project.</li>
            </ul>
            <footer className={style.footer}>
                <ul className={style.footer}>
                    <li>Created by Bahri Berke Ok</li>
                    <li>All rights reserved. Aug-2022</li>
                </ul>
            </footer>
        </div>
    )
}

export default About;