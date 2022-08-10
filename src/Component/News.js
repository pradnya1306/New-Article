
import React, { useEffect, useState } from "react";
import './News.css'

function News() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10")
            .then((result) => {
                result.json().then((res) => {
                    setUser(res)
                    console.log(user);

                })
            })
    }, [])

    return (
        <div className="container">
            <div className="d-flex">
                <h1 className="appNews">News App</h1>
                <img className="newlogo" src="news_logo1.png"></img>
            </div>
            <h5 className="stories">Top Stories :</h5>
            {user.map((key, index) => {
                console.log(key)
                return (
                    <div className="container">
                        <div class="row" key={index}>
                                <div className="para col-sm-4">
                                    <img  className="image" src={key.jetpack_featured_media_url}></img>
                                </div>
                                <div className="para col-sm-8">
                                    <a className="heading" >{key.title.rendered}</a>
                                    <p >{key.date_gmt}</p>
                                    <p >{key.author}</p>
                                    <p >{key.featured_media}</p>
                                    <p >{key.excerpt.rendered}</p>
                                    <a href={key.link}>Read More ...</a>
                                </div>
                                <hr />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default News;