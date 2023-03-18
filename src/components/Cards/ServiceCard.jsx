import React from 'react'

const ServiceCard = () => {
    return (
        <>
            <div className="serviceCard p-5 ">
                <div className="s-card">
                    <div className="s-card0">
                        <div className="s-card1 flex items-center mb-4">
                            <img src="" alt="" />
                            <h5 className="text-2xl font-bold">App Development</h5>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img src="" alt="" />
                            <p className="">Android App</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img src="" alt="" />
                            <p className="">IOS App</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img src="" alt="" />
                            <p className="">Flutter</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img src="" alt="" />
                            <p className="">React Native</p>
                        </div>
                        <div className="s-card1 flex items-center mb-3">
                            <img src="" alt="" />
                            <p className="">Kotlin</p>
                        </div>
                    </div>
                    <div className="s-card2 ">
                        <button className="btn btn1 btn2">
                            <span>Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;
