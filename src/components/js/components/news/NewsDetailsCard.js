import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function NewsDetailsCard() {

    const {news_id} = useParams();

    //set news details section
    const [newsDetails, setNewsDetails] = useState(null);

    //set page title
    const [title, setTitle] = useState("News Details");

    //use effect for setting news overview data
    useEffect(() => {

        //get news overview data 
        getNewsDetails();

        //document title set
        document.title = title;

    }, [title]);

    //get news overview data
    async function getNewsDetails() {
        try {
            const news_link_url = process.env.REACT_APP_NEWS_ENDPOINT;
            const response = await axios.get(news_link_url);

            const get_news_data = response.data.collection_data.find(newsItem => newsItem.ID === news_id)

            //setting new details data
            setNewsDetails(get_news_data);

            //setting new page title
            setTitle(get_news_data.Title);
        }
        catch (err) {
        }
    }

    if (newsDetails) {
        return (
            <div className="news-details">
                <div className="container">
                    {newsDetails.Title}
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}
  
export default NewsDetailsCard;