import React from "react";

let Intro = () => {

    const domain = 'React';
    let OTT = {
        webSeries: 'Squid Game',
        platform: 'Netflix'
    }

    return(
        <div>
            <h2>
                We are Learning Concept of Components in {domain}
            </h2>

            <p>
                We are Watching {OTT.webSeries} on {OTT.platform}
            </p>
        </div>
    )
}

export default Intro;