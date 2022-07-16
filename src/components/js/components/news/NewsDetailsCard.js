import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import parse from 'html-react-parser';
import axios from "axios";
import BackButton from "../misc/BackButton";

function NewsDetailsCard() {

    //get url parameters
    const {news_url} = useParams();

    //set news details section
    const [newsDetails, setNewsDetails] = useState(null);

    //set page title
    const [title, setTitle] = useState("News Details");

    //define variables for background image
    let image_url = '';

    //news details body content
    let body_content = '';

    //use effect for setting news overview data
    useEffect(() => {

        //get news overview data
        async function getNewsDetails() {
            try {
                //get news api link
                const news_link_url = process.env.REACT_APP_NEWS_ENDPOINT;

                //get response
                const response = await axios.get(news_link_url);

                //get news article data
                const get_news_data = response.data.collection_data.find(newsItem => newsItem.URL === news_url);

                //setting new details data
                setNewsDetails(get_news_data);

                //setting new page title
                setTitle(get_news_data.Title);
            }
            catch (err) {
            }
        }

        //get news overview data 
        getNewsDetails();

        //document title set
        document.title = title;

    }, [title, news_url]);

    if (newsDetails) {

        //setting background image
        image_url = process.env.REACT_APP_DOMAIN_NAME + '/' + newsDetails.Imageurl;

        //body content
        body_content = parse(`${newsDetails.BodyContent}`);

        return (
            <div className="news-details">
                <BackButton />
                <div className="news-details-wrapper">
                    <div className="news-details-content-wrapper">
                        <div className="news-details-image" style={{ backgroundImage: `url(${image_url})`}}/>
                        <h1>{newsDetails.Title}</h1>
                        <div className="news-details-description">
                            {body_content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}
  
export default NewsDetailsCard;