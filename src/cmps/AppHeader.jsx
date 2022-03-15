import { HashLink } from 'react-router-hash-link';
import {TypingAnimation} from './TypingAnimation'

export function AppHeader() {


    return (
        <section className="app-header" >
            <div className="app-header-container">
                <h2>Hi!</h2>
                <h2>I'm Angelica</h2>
                <TypingAnimation/>
                <div className="header-link-btns flex">
                <HashLink smooth to='/#portafolio'>Portafolio</HashLink>|
                <HashLink smooth to='/#about-me'>Meet Me</HashLink>
                </div>
            </div>
        </section>
    )
}