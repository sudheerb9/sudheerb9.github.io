import React from 'react';

function About () {
    return(
        <div className="about-div">

            <div style={{'transfrom': 'scale(1) translateY(0)'}} className="diamond1">
                <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                    <path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" class="Diamond__StyledPath-du3w5o-2 hPLPCk" fill="#242329"></path>
                </svg>
            </div>

            <div style={{'transfrom': 'scale(1) translateY(0)'}} class="diamond2">
                <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                    <path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" class="Diamond__StyledPath-du3w5o-2 hPLPCk" fill="#242329"></path>
                </svg>
            </div>
            

            <div className="about-content">

            </div>
            <div className="about-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fbfbff" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,202.7C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
        </div>
    );
}

export default About;