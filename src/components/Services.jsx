import React from 'react'

const Services = () => {
    return (
        <>
            <div className="ser-main">
                <div className="ser1">
                    <div className="ser11 px-20 pt-12 pb-4 flex items-center">
                        <div className="ser111">
                            <h1 className=''>Services</h1>
                            <h1 className="blue">Ecommerce Solutions</h1>
                        </div>
                        <div className="ser112">
                            <img src="/static/images/b1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="ser2">
                    <div className="ser21">
                        <div className="home412 flex justify-center items-center">
                            <div className="home4121">
                                <img className=' block m-auto' src="/static/images/a7.png" alt="" />
                                <p>Shopify</p>
                            </div>
                            <div className="home4121">
                                <img className=' block m-auto' src="/static/images/a5.png" alt="" />
                                <p>Woo Commerce</p>
                            </div>
                            <div className="home4121">
                                <img className=' block m-auto' src="/static/images/a6.png" alt="" />
                                <p>Big Commerce</p>
                            </div>
                            <div className="home4121">
                                <img className=' block m-auto' src="/static/images/a8.png" alt="" />
                                <p>Magento</p>
                            </div>
                            <div className="home4121">
                                <img className='block m-auto' src="/static/images/b3.png" alt="" />
                                <p>Wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
