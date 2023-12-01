import React from 'react';
import "./Card.css"

export default function Card({ vid }) {
    return (
        <div class="col">
            <div className="">
<div className='item'>
                <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${vid.url.slice(17)}`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <h2>{vid.videos}</h2>    <p>{vid.canal}</p>
                </div>
            </div>
        </div>
    );
}