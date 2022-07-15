import React from "react";
import parse from 'html-react-parser';

function NewsCard(props) {

    //comments setup
    let comments = '';

    //get child props
    const newsItem = props.newsItem;

    //comments greater than 0
    if(parseInt(newsItem.Comments) > 0) {
        comments = parse('<div class="latest-news-published"><span class="published">'+newsItem.Published+'</span><span class="comments">'+newsItem.Comments+'</span></div>');
    }
    else {
        comments = parse('<div class="latest-news-published"><span class="published">'+newsItem.Published+'</span></div>'); 
    }

    return (
        <div className="latest-news-item">
            <div className="latest-news-item-wrapper">
                <div className="latest-news-item-content-wrapper">
                    <div className="latest-news-title"><h3>{newsItem.Title}</h3></div>
                    <div className="latest-news-description"><p>{newsItem.Intro}</p></div>
                    {comments}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;