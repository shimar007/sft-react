import React from "react";
import BodyWrapperWithSidebar from "../../base/BodyWrapperWithSidebar";
import BodyHeader from "../../base/BodyHeader";
import NewsDetailsCard from "./NewsDetailsCard";

function NewsDetailsBody() {
    return (
        <>
            <BodyWrapperWithSidebar>
                <BodyHeader />
                <NewsDetailsCard />
            </BodyWrapperWithSidebar>
        </>
    );
}

export default NewsDetailsBody;