import React from 'react'

const HomeTimeLine = () => {
    return (
        <div className="home__timeline">
            <div className="timeline">
                <div className="timeline__dot"></div>
                <section className="timeline__record">
                    <h1>2015</h1>
                    <p>Learned my first programming language (Java) and studied the basics of coding</p>
                </section>
            </div>
            <div className="timeline">
                <div className="timeline__dot"></div>
                <section className="timeline__record">
                    <h1>2016</h1>
                    <p>Created my first working system in C#, A point of sales and inventory management system </p>
                </section>
                <div className="timeline__dot"></div>
            </div>
            <div className="timeline">
                <div className="timeline__dot"></div>
                <section className="timeline__record">
                    <h1>2017</h1>
                    <p>Put an update on the previous project with proper documentation </p>
                </section>
            </div>
            <div className="timeline">
                <div className="timeline__dot" ></div>
                <section className="timeline__record">
                    <h1>2017</h1>
                    <p>Put an update on the previous project with proper documentation </p>
                </section>
                <div className="timeline__dot"></div>
            </div>
        </div>
    )
}

export default HomeTimeLine
