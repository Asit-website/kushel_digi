import React from 'react';
import { NavLink } from "react-router-dom";

const MobCard = () => {
    return (
        <>
            <div className="mob-app11121 flex items-center justify-center py-10 px-14">
                <div className="mob-app111211">
                    <b>Lorem Ipsum is simply dummy text of the and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy </b>
                    <p className="mt-3 mb-9">We have a wide variety of certified partners and a
                        customer-centric team to manage your projects
                        end-to-end.</p>
                    <NavLink to="/" className="mob-a font-semibold">Read More</NavLink>
                </div>
                <div className="mob-app111212">
                    <img src="/static/images/b5.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default MobCard;
