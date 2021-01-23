import React from "react";
import Tour from "./Tour";
const Tours = ({ SomeTourProp, removeTourProp }) => {
  return (
    <section>
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
        {/* <div>{someTourProp.map((tour) => {
return <Tour/>)}</div>
        } */}
        <div>
          {SomeTourProp.map((tour) => {
            return (
              <Tour
                key={tour.id}
                {...tour}
                removeTourProp={removeTourProp}
              ></Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
