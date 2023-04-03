import React from 'react'

const ServiceCard = (props) => {
    return (
        <>
            <div className="serviceCard p-5 bg-white mx-2">
                <div className="s-card h-full relative">
                    <div className="s-card0">
                        <div className="s-card1 s-card11 flex items-center mb-6">
                            <img src={props.app1} alt="" />
                            <h5 className="ml-4">{props.dev} <br />{props.dev1}</h5>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img width={27} height={27} src={props.android} alt="" />
                            <p className="ml-2">{props.a}</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img width={27} height={27} src={props.apple} alt="" />
                            <p className="ml-2">{props.b}</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img width={27} height={27} src={props.fluter} alt="" />
                            <p className="ml-2">{props.c}</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img width={27} height={27} src={props.react} alt="" />
                            <p className="ml-2">{props.d}</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img width={27} height={27} src={props.kotlin} alt="" />
                            <p className="ml-2">{props.e}</p>
                        </div>
                    </div>
                    <div className="s-card2 absolute bottom-0">
                        <button className="btn btn1 btn2">
                            <span className='mr-2'>Read More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;
