import {Skills} from '../cmps/Skills.jsx'
import {MyStack} from '../cmps/MyStack.jsx'
import {Portafolio} from'../cmps/Portafolio.jsx'
import {MeetMe} from'../cmps/MeetMe.jsx'

export function HomePage() {

    return (
        <section className="home-page">
            <Skills/>
            <MyStack/>
            <Portafolio/>
            <MeetMe/>
        </section>
    )
}