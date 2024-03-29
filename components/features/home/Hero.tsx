import React, { Fragment } from "react";

export default function Hero() {
  return (
    <Fragment>
      <div className="container">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Save your important notes here for convenience and security.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
