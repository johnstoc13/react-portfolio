import React from "react";

function Project(props) {
    return (
        <div key={props.portfolioData.name.toString()}>
            <div className="col-lg-6 py-lg-5 pt-4 pb-3">
                <div className="card text-center border border-secondary">
                    <img src={props.portfolioData.image} className="card-img-top position-relative"
                        alt={props.portfolioData.name} />
                </div>
            </div>
            <div className="col-lg-6 py-lg-5 py-3 px-3">
                <div className="row px-3">
                    <h4 className="text-dark text-center">{props.portfolioData.name}</h4>
                    <p className="text-dark">{props.portfolioData.description}</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-dark">TECH USED:</h6>
                        <ul className="fa-ul text-dark">
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>HTML/CSS</li>
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>Foundation CSS</li>
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>Javascript/jQuery</li>
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>Animate.css</li>
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>MovieDB API</li>
                            <li><span className="fa-li"><i className="far fa-check-circle"></i></span>Deck of Cards API</li>
                        </ul>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-around">
                        <a className="btn bg-blue text-white w-75" href={props.portfolioData.code}
                            target="_blank" rel="noreferrer noopener">CODE</a>
                        <a className="btn bg-blue text-white w-75" href={props.portfolioData.application}
                            target="_blank" rel="noreferrer noopener">APPLICATION</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;