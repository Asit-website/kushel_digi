import React from 'react'
import kes1 from '../images/kes1.png';
import kes2 from '../images/kes2.png';
import kes3 from '../images/kes3.png';
import kes4 from '../images/kes4.png';
const NodeJsHire = () => {
    return (
        <>
            <div className="ser-main">
                <div className="php-back">
                    <div className="php-back1 native_back1">
                        <h2>Enhance Your Market Presence With React</h2>
                        <h2>Native App Development Company</h2>
                        <p>
                            Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platform..
                        </p>
                        <button>Hire Developer</button>
                    </div>
                    <div className="php-back2">
                        <div className="exam_form">
                            <h3>Build Your Team</h3>
                            <p>Hire india’s best pre-vetted software developers on -demand</p>
                            <form>
                                <div className="form_exam w-full">
                                    <label htmlFor="">Your Name</label>
                                    <input
                                        className="w-full mt-3"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form_exam w-full mt-5">
                                    <label htmlFor="">Your Email</label>
                                    <input
                                        className="w-full mt-3"
                                        type="text"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="form_exam w-full mt-5">
                                    <label htmlFor="">Your Requirement</label>
                                    <textarea
                                        className="w-full mt-3"
                                        placeholder="Enter your Requirement"
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <div className="form_exam_btn">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="key_features">
                    <div className="key_features1">
                        <h2>KEY FEATURES</h2>
                        <div className="features_card">
                            <div className="features_box">
                                <img src={kes1} alt="" />
                                <p>Cost Effective</p>
                            </div>
                            <div className="features_box">
                                <img src={kes2} alt="" />
                                <p>High Performance</p>
                            </div>
                            <div className="features_box">
                                <img src={kes3} alt="" />
                                <p>Web Support</p>
                            </div>
                            <div className="features_box">
                                <img src={kes4} alt="" />
                                <p>Open Source</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="key_features2">
                    <div className='key_features_head'>
                        <h2>Leverage Our React Native App Development Services</h2>
                        <p>Our React Native app development team delivers high-performing mobile apps that bring your business ideas to life. From customization to consulting and support, Kushel Digi offers the whole spectrum of React Native app development services. We also take care of the design, development, and deployment of your React Native app backed by high-growth engines to ensure your app is ready to escalate in the market from day one.</p>
                    </div>
                    <div className='key_tanda'>
                        <div className="key_tanda1">
                            <img src={sidhaTandi} alt="" />
                            <div className='tandi_nav'>
                                <p onClick={tabAnother1} id='pex1'>React Native App Consultation & Support</p>
                                <p onClick={tabAnother2} id='pex2'>React Native for Android & iOS <br />App Development</p>
                                <p onClick={tabAnother3} id='pex3'>Cross-platform Migration Services</p>
                                <p onClick={tabAnother4} id='pex4'>React Native UI/UX services</p>
                            </div>
                        </div>
                        <div className="key_tanda2">
                            {
                                tab === 1 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 2 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 3 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }

                            {
                                tab === 4 && (
                                    <div className='key_imgTand'>
                                        <p>Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision.</p>
                                        <img className='float-right' src={adimanus} alt="adimanus" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default NodeJsHire