import React, { useRef } from "react";
import ExpData from "../Data/Experience";
import { CreateHead } from "../pages";

function Experience() {
  return (
    <React.Fragment>
      <div className="experience">
        <CreateHead head="experience" title="MY EXPERIENCE" />
        <div className="exp-container">
          {ExpData.map((item) => {
            return (
              <ExpCard
                id={item.id}
                classN={item.classDis}
                head={item.title}
                role={item.role}
                loc={item.loc}
                img={item.img}
                color={item.color}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

function ExpCard(props) {
  const expRef = useRef();
  return (
    <div
      ref={expRef}
      className={props.classN}
      onClick={(e) => {
        OpenDetails(props.id);
      }}
    >
      <div className="expcard--img pad">
        <img
          className="expcard--img exp-img-small"
          alt="vtfImage"
          src={props.img}
        ></img>
      </div>
      <div className="expcard--dis">
        <div
          className="expcard--dis--design"
          style={{ background: props.color }}
        ></div>
        <div className="expcard--dis--head">{props.head}</div>
        <div className="expcard--dis--role">{props.role}</div>
        <div className="expcard--dis--loc">{props.loc}</div>
      </div>
    </div>
  );
}

//   Old Code No Changes

export function OpenDetails(e) {
  let newIdImg = ".expdetails--img" + e;
  let newIdDetails = ".expdetails--details" + e;
  document.querySelector(newIdImg).style.height = "100%";
  document.querySelector(newIdDetails).style.height = "100%";
}

export function ExitExpDetails(e) {
  let newIdImg = ".expdetails--img" + e;
  let newIdDetails = ".expdetails--details" + e;
  document.querySelector(newIdImg).style.height = "0%";
  document.querySelector(newIdDetails).style.height = "0%";
}

export default Experience;
