import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

function NewsOverview() {

    //set news overview section
    const [newsOverview, setNewsOverview] = useState(null);

    //set page title
    const [title] = useState("News Overview");

    //use effect for setting news overview data
    useEffect(() => {

        //set document title
        document.title = title;

        //get news overview data 
        getNewsOverview();

    }, [title]);

    //get news overview data
    async function getNewsOverview() {
        try {
            const news_link_url = process.env.REACT_APP_NEWS_ENDPOINT;
            const response = await axios.get(news_link_url);
            setNewsOverview(response.data);
        }
        catch (err) {
        }
    }

    if (newsOverview) {
        return (
            <div className="latest-news">
                {newsOverview.collection_data.map((newsItem, index) => 
                    {   
                        if(index === 0) {
                            return (
                                <NewsCard newsItem={newsItem} key={Math.random()}/>
                            )
                        }
                        else {
                            return (
                                <NewsCard newsItem={newsItem} key={Math.random()}/>
                            )
                        }
                        
                    }
                )}
            </div>
        );
    }
    else {
        return null;
    }
}

export default NewsOverview;