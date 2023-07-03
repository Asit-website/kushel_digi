import React from "react";
import woo1 from "../images/woo1.png";
import reactus from "../images/reactus.png";
import arrow4 from "../images/arrow4.png";
import admis1 from '../images/admis1.png';
import greenish from '../images/greenish.png';
import magic from '../images/magic.png';
const WooCommerce = () => {
  return (
    <>
      <div className="ser-main">
        <div className="magento-back">
          <div className="magento_back1">
            <h2>
              Woo Commerce <br /> Development
            </h2>
            <p>Get WooCommerce Development For Robust And Effective Websites</p>
            <button>
              Consult our Woo Commerce Team
              <img width={13} className="ml-1.5 inline" src={arrow4} alt="" />
            </button>
          </div>
          <div className="magento_back2 relative">
            <div className="magentos">
              <img
                className="reacting animate__animated animate__pulse animate__infinite"
                src={reactus}
                alt="reactus"
              />
            </div>
            <img className="reactus reactus1" src={woo1} alt="magentos" />
          </div>
        </div>
        <div className="magento_service">
          <div className="magento_service1">
            <h2>
               Our <span>Woo Commerce</span> <br /> development services
            </h2>
            <p>
            WooCommerce is an open-source platform used to create websites. The most famous is e-commerce, as WooCommerce provides the best management solution for the e-commerce website. 
            </p>
          </div>
          <div className="magento_service2">
            <div className="greenish">
              <img src={greenish} alt="greenish" />
            </div>
            <img className="admis" src={admis1} alt="admis" />
          </div>
        </div>

        <div className="magento_services">
          <div className="magento_services1">
            <img src={magic} alt="misad" />
          </div>
          <div className="magento_services2">
            <h2>Why You Should choose <span>Woo Commerce</span></h2>
            <h2>
            Solution
            </h2>
            <p>
            WooCommerce is the perfect choice for developing e-commerce or any other website because of its helpful features. It offers features like customer match, order tracking, delivery update, and much more. Moreover, half of WordPress stores are powered by WooCommerce. It is quite popular in the industry, and for WordPress lovers, it is one of the best ecommerce plugins. Other integrated features are beneficial for the website, such as SEO and other benefits for e-commerce. It is easy to access, and several advantages are obtained from WooCommerce. Hyperlink InfoSystem proved best for WooCommerce development by providing high-quality, punctual delivery, interaction, clear and open projects, and more.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default WooCommerce;
