import React from 'react';

export function MeetMe() {

    return (
        <div id='about-me' className="about-app">
            <div className="card-about-app">
                <img className="angel-img" src="https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" alt="angel" />
                <div className="card-about-txt">
                    <h1>Angelica Serebnitski</h1>
                    <p className="title-about-app">Technical Software Engineer & Frontend-Backend Developer</p>
                     {/* <p>Links</p>  */}
                    <div style={{margin: "24px 0"}}>
                        <a href="https://www.linkedin.com/in/angelica-serebnitzki-165153192/" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972835/resume/linkdin_qabohr.png" className="linkdin-icon"/></a>
                        <a href="https://github.com/angel-sanchezp" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972850/resume/github-icon_tzpo4h.png" className="github-icon"/></a>
                    </div>
                   <a href="mailto: angelsa9292@gmail.com"><button className="btn-about-app">Contact me</button></a>
                </div>
            </div>
            <div className="meet-me">
            <h1 className='meet-me-p'>Nice to meet you</h1>
            <p className='meet-me-p'>I'm Angelica Serebnitski a Frontend/Backend Developer. I finished Coding Academy bootcamp, also 
                I have a Technical Software degree from Atid collage. Love music, dance, traveling and to paint pictures... </p>
            </div>
        </div>


        
    )
}