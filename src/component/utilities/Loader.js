import React from "react";
import { Audio } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loader() {
  return (
    <div className="d-flex justify-content-center mt-5 h-100">
      <Audio height="250" width="250" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
