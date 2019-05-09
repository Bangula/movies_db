import React from "react";

function DetailsFooter() {
  return (
    <div className="details-footer ">
      <div className="container lg mx-auto flex flex-wrap">
        <div>
          <i className="fa fa-clock mr-2 h-5" /> Running time:
        </div>
        <div>
          <i className="fa fa-money-bill-alt mr-2" />
          Budget
        </div>
        <div>
          <i className="fa fa-ticket-alt mr-2" />
          Revenue:
        </div>
      </div>
    </div>
  );
}

export default DetailsFooter;
