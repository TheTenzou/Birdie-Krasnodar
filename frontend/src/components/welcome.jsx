import React from "react"

import "./welcome.css"
// import About from "./About"

const Welcome = ({ element }) => {
    return (
        <main>
            <section className="welcome">
                <div ref={element}>
                    {/* <img src={Logo} alt="logo" className="welcome--logo" /> */}
                    <p>Even if you scroll, I will stick with you</p>
                    <button className="welcome__cta-primary">Contact us</button>
                </div>
            </section>
            {/* <About /> */}
        </main>
    )
}

export default Welcome