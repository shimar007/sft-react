import React from "react";
import Sidebar from "./Sidebar";

function BodyWrapperWithSidebar({ children }) {
    return (
        <div className="main-content">
            <div className="container">
                <div className="main-content-body">
                    {children}
                </div>
                <Sidebar/>
            </div>
        </div>
    );
}
  
export default BodyWrapperWithSidebar;