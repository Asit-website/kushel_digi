import React from 'react'

const DevCard = ({imgSrc,heading}) => {
    return (
        <>
            <div className="d-card py-5 px-5 mx-2 my-2">
                <div className="d-card1">
                    <div className="d-card11 flex justify-between items-center mb-3">
                        <h5 className='font-semibold'>{heading}</h5>
                        <img src={imgSrc} alt={imgSrc} />
                    </div>
                    <div className="d-card12">
                        <p>Our ecommerce solutions deliver
                            a seamless experience regardless
                            of which device you browse it from
                            at home or on the go</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevCard;
