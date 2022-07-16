import React from "react";
import Header from "../base/Header";
import Footer from "../base/Footer";
import NewsDetailsBody from "../components/news/NewsDetailsBody";

function HomePage() {
    return (
        <>
            <Header />
            <NewsDetailsBody />
            <Footer />
        </>
    );
}

export default HomePage;