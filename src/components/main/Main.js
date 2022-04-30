import React from 'react';
import "./Main.css";
import hello from "../../assets/hello.svg";
import Editor from "../editor/editor";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Create File</h1>
            <p>Test File</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}


        {/* <!-- EDITOR STARTS HERE --> */}
        <div>
          <Editor />
        </div>
        {/* <!-- EDITOR ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
