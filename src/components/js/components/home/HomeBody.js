import React from "react";
import BodyHeader from "../../base/BodyHeader";
import BodyWrapperWithSidebar from "../../base/BodyWrapperWithSidebar";
import NewsOverview from "../news/NewsOverview";

function HomeBody() {
    return (
        <>
            <BodyWrapperWithSidebar>
                <BodyHeader />
                <NewsOverview />
            </BodyWrapperWithSidebar>
        </>
    );
}
  
export default HomeBody;