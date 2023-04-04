import React from 'react';
import { NavLink } from "react-router-dom";

const MobCard = () => {
    return (
        <>
            <div className="mob-app11121 flex items-center justify-between py-6 px-14">
                <div className="mob-app111211">
                    <p className='sara'>Lorem Ipsum is simply dummy text of the and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy </p>
                    <p className="mt-3 mb-9 dara">We have a wide variety of certified partners and a
                        customer-centric team to manage your projects
                        end-to-end.</p>
                    <NavLink to="/" className="mob-a">VIEW CASE STUDY</NavLink>
                </div>
                <div className="mob-app111212">
                    <img src="/static/images/b5.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default MobCard;
