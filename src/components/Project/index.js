import React from "react";

function Project(props) {

    return (
        <div className="row pt-3 pb-4 border-bottom border-white" key={props.portfolioData.name.toString()}>
            <div className="col-lg-6 pt-4 pb-3">
                <div className="card text-center border border-secondary">
                    <img src={props.portfolioData.image} className="card-img-top position-relative"
                        alt={props.portfolioData.name} />
                </div>
            </div>
            <div className="col-lg-6 pt-4 pb-3 px-3">
                <div className="row px-3">
                    <h4 className="text-white text-center">{props.portfolioData.name}</h4>
                    <p className="text-white">{props.portfolioData.description}</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 className="text-white">TECH USED:</h6>
                        <ul className="fa-ul text-white">
                            {props.portfolioData.techUsed.map(item => <li><span className="fa-li"><i className="far fa-check-circle"></i></span>{item}</li>)}
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
            <hr className="primary" />
        </div>
    );
}

export default Project;