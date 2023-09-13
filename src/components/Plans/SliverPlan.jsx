import React from "react";
import { Link } from "react-router-dom";
import { sliverPlan } from "./sliver";
import "./plan.css";

const SliverPlan = () => {
  return (
    <div>
      <div className="row">
        {sliverPlan.map((plan) => (
          <div className="col-sm-12 col-md-3 col-lg-3 ">
            <div className="plan__card p-5 shadow">
              <div>
                <h1 className="fw-bolder fs-1">{`$${plan.invest}`}</h1>
              </div>
              <div className="plan-reward">
                <p>Reward:{`$${plan.reward}`}</p>
                <p>Duration:{plan.duration}</p>
              </div>
              <div className="my-4">
                <Link to="/register" className="btn btn-primary text-sec">
                  Start Now !!{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliverPlan;
