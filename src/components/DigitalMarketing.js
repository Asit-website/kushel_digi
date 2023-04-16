import React from 'react'
import VectorArrow from '../digimarket assets/Vector.svg'
import KickProduction1 from '../digimarket assets/0109_Kick-Eez-Production 1.png'
import KickProduction2 from '../digimarket assets/0109_Kick-Eez-Production 1 (1).png'
import KickProduction3 from '../digimarket assets/0109_Kick-Eez-Production 1 (2).png'
import KickProduction4 from '../digimarket assets/0109_Kick-Eez-Production 2.png'

import Close1 from '../digimarket assets/close 1.svg'
import Group72322 from '../digimarket assets/Group 72322.svg'
import Group72323 from '../digimarket assets/Group 72323.svg'
import Group72327 from '../digimarket assets/Group 72327.svg'

import check1 from '../digimarket assets/check 1.svg'
import check4 from '../digimarket assets/check (1) 4.svg'

import Rectangle17725 from '../digimarket assets/Rectangle 17725.png'
import Rectangle17726 from '../digimarket assets/Rectangle 17726.png'
import Ellipse37 from '../digimarket assets/Ellipse 37.png'

import Group72437 from '../digimarket assets/Group 72437.svg'
import Speed1 from '../digimarket assets/speed 1.svg'
import ContentWriting1 from '../digimarket assets/content-writing 1.svg'
import Search1 from '../digimarket assets/search 1.svg'
import SaveMoney1 from '../digimarket assets/save-money 1.svg'
import Test1 from '../digimarket assets/test 1.svg'

import Group72246 from '../digimarket assets/Group 72246.svg'
import Arrow from '../digimarket assets/arrow.svg'
import Vector1 from '../digimarket assets/Vector (1).png'
import Vector2 from '../digimarket assets/Vector (2).png'
import Vector3 from '../digimarket assets/Vector (3).png'
import Vector from '../digimarket assets/Vector.png'

function DigitalMarketing() {
    return (
        <>
            {/* // <!-- Hero Section --> */}
            <section className="heroSection">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Digital Marketing <strong>Agency that <br /> will</strong> skyrocket your sales</h1>
                        <hr className="blueLine" />
                        <p>Measurable, results-driven digital <br />
                            marketing services.</p>
                        {/* <!-- input for email --> */}
                        <div className="input">
                            <input type="email" placeholder="Enter your business e-mail" />
                            <button>SCHEDULE YOUR FREE STRATEGY SESSION <img src={VectorArrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="whatwedo">
                    <h1>Scaling a <span>Business</span> Should <br />Not Be a <span>Mystery</span> </h1>
                    <hr className="blackLine" />
                    <div className="whatwedo__cards">
                        <figure className="card">
                            <img src={KickProduction1} alt="What we Do" />
                            <figcaption>Have you <strong>spent thousands</strong> of dollars without seeing any qualified leads?
                            </figcaption>
                        </figure>
                        <figure className="card">
                            <img src={KickProduction2} alt="What we Do" />
                            <figcaption>Are you <strong>pumping money</strong> into digital marketing but aren’t sure if it’s
                                actually working?
                            </figcaption>
                        </figure>
                        <figure className="card">
                            <img src={KickProduction3} alt="What we Do" />
                            <figcaption>Do you feel <strong>frustated</strong> by the lack
                                of marketing results?</figcaption>
                        </figure>
                        <figure className="card">
                            <img src={KickProduction4} alt="What we Do" />
                            <figcaption>Are you <strong>bouncing</strong> from one <strong>digtial marketing</strong> agency to
                                another trying to see real
                                results?</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            {/* <!-- End of Hero Section --> */}

            {/* <!-- Package Section --> */}
            <section>
                <div className="packages">
                    <div className="package-types">
                        <ul>
                            <li><a href="#">LOCAL SEO PACKAGES</a>
                            </li>
                            <li><a href="#">LOCAL SEARCH OPTIMATION</a>
                            </li>
                            <li><a href="#">CONTENT MARKETING</a>
                            </li>
                            <li><a href="#">OFF PAGE OPTIMAZTION</a>
                            </li>
                            <li><a href="#">MONTHLY REPORTING</a>
                            </li>
                        </ul>
                    </div>
                    <div className="package-cards">
                        <div className="package-card">
                            <div className="package-card__heading">
                                <h2 style={{ color: "#FFBA31" }}>Basic</h2>
                                <img src={Group72322} alt="not found" />
                            </div>
                            <div className="package-card__text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="package-card__price">
                                <h3>160$</h3>
                                <p>/Month</p>
                            </div>
                            <div className="package-card__button">
                                <button onclick="showBenefits()">See Benefits</button>
                            </div>
                            <div className="package-card__benefits">
                                <img className="package-card__benefits__close" src={Close1} alt="" />
                                <ul>
                                    <li><img src={check4} alt="" />In-Depth Site Analysis</li>
                                    <li><img src={check4} alt="" />Duplicate Content Check</li>
                                    <li><img src={check4} alt="" />Canonicalization</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                    <li><img src={check4} alt="" />Google Webmaster Tools Set Up
                                        (if not setup)</li>
                                    <li><img src={check4} alt="" />Google Analytics set up
                                        (if not set up)</li>
                                    <li><img src={check4} alt="" />Title & Meta Tags Optimization
                                        ( 5 Pages )</li>
                                    <li><img src={check4} alt="" />Existing Web Content Optimization</li>
                                    <li><img src={check4} alt="" />Fresh Web Content Suggestions* (writing
                                        charges
                                        extra)</li>
                                    <li><img src={check4} alt="" />Schema Implemantation for Contact Address
                                    </li>
                                    <li><img src={check4} alt="" />Geo Targeting (via GWT & Code)</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                </ul>
                            </div>
                        </div>
                        <div className="package-card">
                            <div className="package-card__heading">
                                <h2 style={{ color: "#408EE9" }}>Growth</h2>
                                <img src={Group72323} alt="not found" />
                            </div>
                            <div className="package-card__text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="package-card__price">
                                <h3>300$</h3>
                                <p>/Month</p>
                            </div>
                            <div className="package-card__button">
                                <button onclick="showBenefits()">See Benefits</button>
                            </div>
                            <div className="package-card__benefits">
                                <img className="package-card__benefits__close" src={Close1} alt="" />
                                <ul>
                                    <li><img src={check4} alt="" />In-Depth Site Analysis</li>
                                    <li><img src={check4} alt="" />Duplicate Content Check</li>
                                    <li><img src={check4} alt="" />Canonicalization</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                    <li><img src={check4} alt="" />Google Webmaster Tools Set Up
                                        (if not setup)</li>
                                    <li><img src={check4} alt="" />Google Analytics set up
                                        (if not set up)</li>
                                    <li><img src={check4} alt="" />Title & Meta Tags Optimization
                                        ( 5 Pages )</li>
                                    <li><img src={check4} alt="" />Existing Web Content Optimization</li>
                                    <li><img src={check4} alt="" />Fresh Web Content Suggestions* (writing
                                        charges
                                        extra)</li>
                                    <li><img src={check4} alt="" />Schema Implemantation for Contact Address
                                    </li>
                                    <li><img src={check4} alt="" />Geo Targeting (via GWT & Code)</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                </ul>
                            </div>
                        </div>
                        <div className="package-card">
                            <div className="package-card__heading">
                                <h2 style={{ color: "#ED6868" }}>Booster</h2>
                                <img src={Group72327} alt="not found" />
                            </div>
                            <div className="package-card__text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="package-card__price">
                                <h3>400$</h3>
                                <p>/Month</p>
                            </div>
                            <div className="package-card__button">
                                <button onclick="showBenefits()">See Benefits</button>
                            </div>
                            <div className="package-card__benefits">
                                <img className="package-card__benefits__close" src={Close1} alt="" />
                                <ul>
                                    <li><img src={check4} alt="" />In-Depth Site Analysis</li>
                                    <li><img src={check4} alt="" />Duplicate Content Check</li>
                                    <li><img src={check4} alt="" />Canonicalization</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                    <li><img src={check4} alt="" />Google Webmaster Tools Set Up
                                        (if not setup)</li>
                                    <li><img src={check4} alt="" />Google Analytics set up
                                        (if not set up)</li>
                                    <li><img src={check4} alt="" />Title & Meta Tags Optimization
                                        ( 5 Pages )</li>
                                    <li><img src={check4} alt="" />Existing Web Content Optimization</li>
                                    <li><img src={check4} alt="" />Fresh Web Content Suggestions* (writing
                                        charges
                                        extra)</li>
                                    <li><img src={check4} alt="" />Schema Implemantation for Contact Address
                                    </li>
                                    <li><img src={check4} alt="" />Geo Targeting (via GWT & Code)</li>
                                    <li><img src={check4} alt="" />Xml Sitemap/Analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End of Package Section --> */}

            {/* <!-- Portfolio Section --> */}
            <section>
                <div class="ourtalent">
                    <div class="ourtalent-text">
                        <div class="ourtalent-text__heading">
                            <h1>Work with <span>Top-Notch</span> Talent To Scale Your Revenue</h1>
                            <hr class="blueLine" style={{ marginInlineStart: 0 }} />
                        </div>
                        <div class="ourtalent-text__list">
                            <p><img src={check1} alt="" />&nbsp; More qualified leads (and therefore more sales 💰)
                            </p>
                            <p><img src={check1} alt="" />&nbsp; Save thousands of dollars from unproven strategies
                            </p>
                            <p><img src={check1} alt="" />&nbsp; A website that converts 3x-5x higher 😀</p>
                            <p><img src={check1} alt="" />&nbsp; Improved organic ranking</p>
                            <p><img src={check1} alt="" />&nbsp; The right customers/clients</p>
                            <p><img src={check1} alt="" />&nbsp; Increased company revenue 📈</p>
                        </div>
                    </div>
                    <div class="ourtalent-image">
                        <img src={Rectangle17725} alt="not found" />
                        <img src={Rectangle17726} alt="" />
                        <img src={Ellipse37} alt="" />
                    </div>

                </div>
                <div class="process">
                    <h1>Our <span>R.O.C.K.E.T</span> process</h1>
                    <div class="process-container">
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Research</h3>
                                <img src={Group72437} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>When we kick-off an SEO campaign, your dedicated SEO consultant begins by doing a deep dive
                                    into your company, your website, your competitors and your industry. <br /><br />- In-depth
                                    Competitor Analysis <br /><br />- Site & Server Analysis <br /><br />- Analyze 200+ On-Site SEO
                                    Factors
                                    <br /><br />We put on our detective hats and use data to put together a roadmap for your
                                    website’s
                                    SEO.
                                </p>
                            </div>
                        </div>
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Optimize</h3>
                                <img src={Speed1} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>From IA to UX, we make hundreds of changes both big and small to your website to help Google
                                    better understand who you are.
                                    <br /><br />- Attention-grabbing titles & meta descriptions <br /><br />-
                                    Improve usability <br /><br />- Update Site Architecture
                                    <br /><br />With a dedicated web development team, our SEO company will also take care of your
                                    technical SEO, helping you increase the usability, speed, and functionality of your website.
                                </p>
                            </div>
                        </div>
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Content</h3>
                                <img src={ContentWriting1} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>Your website content is what users count on to help educate and guide them through the
                                    purchasing funnel. <br /><br />- Website SEO Copy That Converts <br /><br />- Longform Copy That
                                    Educates
                                    <br /><br />- Informative Blog Posts That Intrigue
                                    <br /><br />Whether discussing your company’s unique selling point or providing educational
                                    content,
                                    we’ll provide topic suggestions, professional copy, and quality content to propel not only
                                    your site’s ranking but also your company’s growth.
                                </p>
                            </div>
                        </div>
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Keywords</h3>
                                <img src={Search1} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>Our meticulous keyword research process is at the heart of our SEO services. The specific
                                    keywords we target help us define our audience and drive valuable traffic to your site.
                                    <br /><br />- Competitor Keyword Analysis <br /><br />- Keyword Mapping Report <br /><br />- Advanced
                                    Rank Tracking
                                    <br /><br />With relevant traffic heading to your website, your company can secure fresh leads,
                                    high-value sales, and more.
                                </p>
                            </div>
                        </div>
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Earned media
                                    & links</h3>
                                <img src={SaveMoney1} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>Earned media and off-page SEO are crucial services for getting your site in front of your
                                    target audience. <br /><br />- Content Promotion <br /><br />- Relevant Mentions From Blogs/Press
                                    <br /><br />-
                                    Viral Marketing Campaigns
                                    <br /><br />Our dedicated content marketing team will create new opportunities for website
                                    growth by
                                    helping your company build links (and relationships) with trusted experts in your industry.
                                </p>
                            </div>
                        </div>
                        <div class="process-container__card">
                            <div class="process-container__card__heading">
                                <h3>Testing</h3>
                                <img src={Test1} alt="" />
                            </div>
                            <div class="process-container__card__text">
                                <p>Getting relevant, qualified search traffic to your site is just the beginning of our SEO
                                    optimization services. <br /><br />- Conversion Path Analysis <br /><br />- Calls-to-action
                                    Improvements
                                    <br /><br />- Continual Improvements Via ROI Tracking
                                    <br /><br />We believe in testing everything and making continual improvements to your SEO
                                    marketing
                                    strategy so your business can continue to drive revenue from SEO.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- FAQ section --> */}
            <section className="faq">
                <div className="faq-heading">
                    <h2>FREQUENTLY ASKED <span>QUESTION</span> </h2>
                    <p>Here are some common queries and question that brands ask.</p>
                </div>
                <div className="faq-container">
                    <div className="faq-container__box">
                        <div className="faq-container__box__heading">
                            <h3>What is SEO?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>SEO stands for Search Engine Optimization. It is the process of optimizing your website to
                                increase
                                organic traffic from search engines like Google, Bing, and Yahoo. SEO is a long-term strategy
                                that
                                focuses on improving your website’s ranking in search engines to drive more relevant traffic to
                                your
                                site.</p>
                        </div>
                    </div>
                    <div className="faq-container__box">
                        <div className="faq-container__box__heading">
                            <h3>How much do SEO services cost?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>SEO services cost anywhere from $500 to $10,000 per month, depending on the size of your
                                business
                                and the scope of your SEO campaign. The average cost of SEO services is $1,000 to $2,000 per
                                month.
                                If you’re looking for a more affordable option, you can also hire an SEO freelancer for $20
                                to $100
                                per hour.</p>
                        </div>
                    </div>
                    <div className="faq-container__box">
                        <div className="faq-container__box__heading">
                            <h3>How does SEO work?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>SEO works by optimizing your website to increase its ranking in search engines like Google,
                                Bing,
                                and Yahoo. The higher your website ranks in search engines, the more relevant traffic it
                                will
                                drive
                                to your site. SEO is a long-term strategy that focuses on improving your website’s ranking
                                in
                                search
                                engines to drive more relevant traffic to your site.</p>
                        </div>
                    </div>
                    <div className="faq-container__box">
                        <div className="faq-container__box__heading">
                            <h3>How do I know which type of SEO service I need?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>There are many different types of SEO services, including on-page SEO, off-page SEO,
                                technical
                                SEO, local SEO, and more. The type of SEO service you need depends on your business
                                goals
                                and
                                the current state of your website. For example, if you’re looking to increase your
                                website’s
                                ranking in search engines, you may need to hire an SEO agency to perform on-page SEO
                                and
                                off-page
                                SEO services.</p>
                        </div>
                    </div>
                    <div className="faq-container__box">
                        <div className="faq-container__box__heading">
                            <h3>What are SEO services?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>SEO services are the process of optimizing your website to increase organic traffic
                                from
                                search
                                engines like Google, Bing, and Yahoo. SEO is a long-term strategy that focuses on
                                improving
                                your
                                website’s ranking in search engines to drive more relevant traffic to your site.</p>
                        </div>
                    </div>
                    <div className="faq-container__box ">
                        <div className="faq-container__box__heading">
                            <h3>Is maintaining the SEO is costly?</h3>
                            <img className="faq-container__box__heading__button" src={Group72246} alt="" />
                        </div>
                        <div className="faqAns">
                            <p>SEO is a long-term strategy that focuses on improving your website’s ranking in
                                search
                                engines
                                to
                                drive more relevant traffic to your site. SEO is a long-term strategy that
                                focuses on
                                improving
                                your
                                website’s ranking in search engines to drive more relevant traffic to your site.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            {/* <!--End of FAQ section --> */}

            {/* <!-- Contact Us Section --> */}
            <section>
                <div className="bookus">
                    <div className="bookus-heading">
                        <h2>Get free Consultation</h2>
                        <p>Book an appoinment with our team through google meet / Zoom call</p>
                    </div>
                    <div className="bookus-button">
                        <button>Schedule a meeting &nbsp; <img src={Arrow} alt="" /></button>
                    </div>
                </div>
                <div className="connectus">
                    <p>DO YOU WANT TO RANK YOUR WEBSITE</p>
                    <button>LET’S CONNECT</button>
                </div>

                <div className="contactus">
                    <div className="contactus-container__left">
                        <div className="contactus-heading">
                            <h2>Contact Us</h2>
                            <p>Please complete the below form. we will get in touch with you</p>
                        </div>
                        <div className="contactus-form">
                            <form action="">
                                <div className="contactus-form__input">
                                    <input type="text" placeholder="Name*" />
                                    <input type="text" placeholder="Phone number*" />
                                </div>
                                <div className="contactus-form__input">
                                    <input type="email" placeholder="Email Address*" />
                                    <input type="text" placeholder="Location*" />
                                </div>
                                <div className="contactus-form__input">
                                    <input type="text" placeholder="Business Name" style={{ width: "100%" }} />
                                </div>
                                <div className="contactus-form__input">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                </div>
                                {/* <!-- Captcha Checkbox  --> */}

                                {/* <!-- Captcha Checkbox --> */}
                                <div className="contactus-form__input">
                                    <button>Submit &nbsp; <img src={Arrow} alt="" /></button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="contactus-container__right">
                        <div className="contactus-container__right__title">
                            <h3 className="address-btn" onclick="showAddress()">Address</h3>
                            <h3 className="map-btn" onclick="showMap()">Google Maps</h3>
                        </div>
                        <div className="contactus-container__right__Address active">
                            <div className="contactus-container__right__Address__details">
                                <div className="contactus-container__right__Address__details__icon">
                                    <img src={Vector1} alt="" />
                                    <img src={Vector} alt="" />
                                </div>
                                <div className="contactus-container__right__Address__details__text">
                                    <p>OUR LOCATION</p>
                                    <p>g-9,first Floor, Sector 63, Noida</p>
                                </div>
                            </div>
                            <div className="contactus-container__right__Address__details">
                                <div className="contactus-container__right__Address__details__icon">
                                    <img src={Vector2} alt="" />
                                    <img src={Vector} alt="" />
                                </div>
                                <div className="contactus-container__right__Address__details__text">
                                    <p>SEND US MAIL</p>
                                    <p>shubham@kusheldigi.com</p>
                                </div>
                            </div>
                            <div className="contactus-container__right__Address__details">
                                <div className="contactus-container__right__Address__details__icon">
                                    <img src={Vector3} alt="" />
                                    <img src={Vector} alt="" />
                                </div>
                                <div className="contactus-container__right__Address__details__text">
                                    <p>CALL US</p>
                                    <p>+91 9045301702</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Map Section --> */}
                        <div className="contactus-container__right__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.423695189258!2d77.37562616786731!3d28.619092918766782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions!5e0!3m2!1sen!2sin!4v1680774903722!5m2!1sen!2sin"
                                width="400" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- End of Contact Us Section --> */}
        </>
    )
}

export default DigitalMarketing;