import React from 'react'
import"./about.css"
const Aboutme = () => {
    return (
        <div className="about">
            <h3>About Me</h3>
            <div className="aboutmain">
                <div className="info">
                    <p>Name : Suman Rajak</p> 
                    <p>Roll : 1806261</p>
                    <p>github profile : <a href="https://github.com/sumanrajak">https://github.com/sumanrajak</a></p>
                    <p>Skills : React/Redux ,Nodejs,Express.js,javascript,C/C++,HTML/CSS,Python,MongoDB,SQL,JAVA</p>
                </div>
                <div className="proj">
                    <h5>Projects :</h5>
                    <ol>
                        <li><h6>BOOM-MEET :</h6> A VIDEO MEETING WEB APP<br></br>node.js, ejs, socket.io, WebRTC ,REACT<br></br>
                        <a href="https://boom-meet.web.app/">https://boom-meet.web.app/</a>
                        
                        </li>
                        <li>
                            <h6>MERN: HOLA</h6>WHATSAPP CLONE<br></br>react.js /redux, node.js , mongo dB , Express.js, Material
ui, Firebase<br></br><a href="https://hola-21edb.web.app/">https://hola-21edb.web.app/</a>
                        </li>

                        <li>
                            <h6>MERN KEMAKON</h6> FULL STACK E-COMMERCE PROJECT<br></br>react.js /redux ,node.js , mongo dB , Express.js,node.js
<br></br><a href="https://github.com/sumanrajak/kemakon-front">https://github.com/sumanrajak/kemakon-front</a>
                        </li>
                        <li>
                            <h6>ReatApp Store</h6> Internship Projet :a live comerial project  that I got an ownership 
<br></br>React <br></br><a href="http://i-managed.biz/appstoregulf/v4/#/">http://i-managed.biz/appstoregulf/v4/#/</a>

                        </li>
                        <li>
                            <h6>KRM PROJECT</h6> UNIVERSITY PROJECT (MINOR PROJECT)
<br></br>react scheduler React.js/redux <br></br><a href="https://github.com/sumanrajak/REACT-scheduler">https://github.com/sumanrajak/REACT-scheduler</a>

                        </li>

                    </ol>
                </div>

            </div>
        </div>
    )
}

export default Aboutme
