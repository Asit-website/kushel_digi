import React from 'react'
import ContactForm1 from './common/ContactForm1'

const Refund = () => {
  return (
    <>
    <div className="ser-main">
      <div className="refund-back">
          <div className="refund-sect">
              <h2>REFUND POLICY</h2>
          </div>
      </div>

      <div className="refund-section">
          <h3>refund Policy</h3>
          <p className='mt-2'>
          Following our core values of providing our customers with best quality and experience, we have laid down considerate cancellation and refund policy.
          </p>
          <p>
          Our projects are divided into goals and milestones. Our working works in certain stages starting with the analysis and curation of work document’s scope. This document is used to verify and make sure both the parties have complete understanding of the work required and therefore eliminating the potential of project cancellations, disputes and other issues.
Refund will not be possible if time is spent on achieving a milestone and all the modules are completed. If there is a situation wherein the project is terminated mutually then the client will have the control on all the completed work and all the further payments will be nullified. But the previous payments or deposits will not be refunded in this case.
No partial refunds will be provided for projects that are left mid-way through a milestone phase.
          </p>
          <p>
          No cancellations will be entertained for the services our marketing team offered on special occasions as they are limited time offers and cannot be nullified.
Digital marketing and SEO packages are not refundable, yet the client can ask for a cancellation with a written notice in a month advance.
No refunds will be provided on deposits or payments for projects that have been abandoned or laid dormant for more than minimum 30 days.
          </p>
      </div>
        <ContactForm1/>
      </div>
    </>
  )
}

export default Refund