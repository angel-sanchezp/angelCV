

export function Portafolio() {


    return (
        <section id='portafolio' className="portafolio flex" >
            <div className="portafolio-container">
                <h2>Portafolio</h2>
                <div className="bnb-container">
                    <div className="bnb-img">
                        <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972876/resume/explore_lmtygw.png" alt="" />
                    </div>
                    <div className="bnb-exp">
                        <h2>Go <img className='logobnb' src="https://res.cloudinary.com/angelsa/image/upload/v1645972817/resume/bnb-icon_zziruh.png" alt="" />bnb</h2>
                        <p>builded in React Framwork, copy of airbnb app, Coding Academy final Proyect. I worked with 2 frinds and we also used
                            MongoDb,NodeJS,ExpressJS.
                        </p>
                        <div className="btn-action">
                            <button className="btn-link"><a href="https://github.com/LiatBiton/sprint4.git" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972824/resume/code-icon_rqo0rh.png" alt="" /></a></button>
                            <button className="btn-link"><a href="https://gobnbproj.herokuapp.com/" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972829/resume/link-icon_qruluy.png" alt="" /></a></button>
                        </div>
                    </div>
                </div>
                <div className="bcw-container">
                    <div className="bcw-img">
                        <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972894/resume/home_ey7fv4.png" alt="" />
                    </div>
                    <div className="bcw-exp">
                        <h2>BCW🪙</h2>
                        <p>builded in Vue Framwork, its a little digital wallet for
                            holding my bitcoins and sending (paying) them to my contacts.
                            also I worked in NodeJS,ExpressJS,Mongodb.
                        </p>
                        <div className="btn-action">
                            <button className="btn-link"><a href="https://github.com/angel-sanchezp/BWC-vue-project.git" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972824/resume/code-icon_rqo0rh.png" alt="" /></a></button>
                            <button className="btn-link"><a href="https://misterbcw.herokuapp.com/" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972829/resume/link-icon_qruluy.png" alt="" /></a></button>
                        </div>
                    </div>
                </div>
                <div className="app-container">
                    <div className="app-img">
                        <img src="https://res.cloudinary.com/angelsa/image/upload/v1645972899/resume/apsus_dkrktj.png" alt="" />
                    </div>
                    <div className="bcw-exp">
                        <h2>Apsus App</h2>
                        <p>builded in React Framwork, apsus its a simple app we do to learn react, jsx, there you will 
                            found simulations of mail app,book shop and notes app.
                        </p>
                        <div className="btn-action">
                            <button className="btn-link"><a href="https://github.com/angel-sanchezp/Apsus-React-Project" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972824/resume/code-icon_rqo0rh.png" alt="" /></a></button>
                            <button className="btn-link"><a href="https://angel-sanchezp.github.io/Apsus-React-Project/#/" target="_blank"><img src="https://res.cloudinary.com/angelsa/image/upload/v1645972829/resume/link-icon_qruluy.png" alt="" /></a></button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}