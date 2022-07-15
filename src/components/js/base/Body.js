import React from "react";
import BodyHeader from "./BodyHeader";
import BodyInner from "./BodyInner";
import Sidebar from "./Sidebar";

function Body() {
    return (
        <div className="main-content">
            <div className="container">
                <div className="main-content-body">
                    <BodyHeader/>
                    <BodyInner/>
                </div>
                <Sidebar/>
            </div>
        </div>
    );
}
  
export default Body;