import React from 'react';

export function Skills() {

    return (
        <div className="home-page-container">
            <div className="skills-icons flex">
                <div className="self-learn-icon">
                    <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972059/resume/self-learn-icon_zdzedp.png" alt="" />
                    <h3>Self Learning</h3>
                    <p className="selfLearn-p">I love to learn new things always.</p>

                </div>
                <div className="self-learn-icon">
                    <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972083/resume/team-work-icon_qyq6mk.png" alt="" />
                    <h3>Team Collaborator</h3>
                    <p className="selfLearn-p">I have experence as Team Collaborator</p>
                </div>
                <div className="self-learn-icon">
                    <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972073/resume/problem-solve-icon_qpmkj1.png" alt="" />
                    <h3>Problem Solving</h3>
                    <p className="selfLearn-p">Bugs its another way to learn </p>
                </div>
                {/* <div className="self-learn-icon">
                    <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972089/resume/she-codes-logo_brskv6.png" alt="" />
                    <h3>Voluntier</h3>
                    <p className="selfLearn-p">I'm a voluntier at she codes org. </p>
                </div> */}
            </div>

            <div className="normal-line"></div>

        </div>
    )
}