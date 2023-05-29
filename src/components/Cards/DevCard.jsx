import React from 'react'

const DevCard = ({imgSrc,heading,classji,headin}) => {
    return (
        <>
            <div className="d-card py-6 px-6 mx-2 my-2">
                <div className="d-card1">
                    <div className="d-card11 flex justify-between items-center">
                        <h5 className='font-semibold'>{heading}</h5>
                        <img className={classji} src={imgSrc} alt={imgSrc} />
                    </div>
                    <div className="d-card12">
                        <p>{headin}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevCard;
