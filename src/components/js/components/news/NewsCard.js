import React from "react";
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function NewsCard(props) {

    //comments & background setup
    let comments = '';
    let background_image = '';

    //get child props
    const newsItem = props.newsItem;

    //comments greater than 0
    if(parseInt(newsItem.Comments) > 0) {
        comments = parse(`<div className="latest-news-published"><span className="published">${newsItem.Published}</span><span className="comments">${newsItem.Comments}</span></div>`);
    }
    else {
        comments = parse(`<div className="latest-news-published"><span className="published">${newsItem.Published}</span></div>`); 
    }

    //setting background image
    background_image = process.env.REACT_APP_DOMAIN_NAME + '/' + newsItem.Imageurl;
    
    return (
        <Link to={`/news/${newsItem.URL}`} className="latest-news-item">
            <div className="latest-news-item-wrapper">
                <div className="latest-news-item-image" style={{ backgroundImage: `url(${background_image})`}}></div>
                <div className="latest-news-item-content-wrapper">
                    <div className="latest-news-title"><h3>{newsItem.Title}</h3></div>
                    <div className="latest-news-description"><p>{newsItem.Intro}</p></div>
                    {comments}
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;