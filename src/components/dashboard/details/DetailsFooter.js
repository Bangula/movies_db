import React from "react";

function DetailsFooter({ runtime, budget, revenue }) {
  return (
    <div className="details-footer ">
      <div className="container xl mx-auto flex flex-wrap">
        <div>
          <i className="fa fa-clock mr-2 h-5" /> Running time: {runtime}
        </div>
        <div>
          <i className="fa fa-money-bill-alt mr-2" />
          Budget: {budget}
        </div>
        <div>
          <i className="fa fa-ticket-alt mr-2" />
          Revenue: {revenue}
        </div>
      </div>
    </div>
  );
}

export default DetailsFooter;
