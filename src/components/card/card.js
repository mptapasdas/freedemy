import React from "react";

import { useState } from "react";

import { useGlobalContext } from "../../context-providerr/context-provider";

import "./card.css";

const Card = (props) => {
    const {
        code,
        imageurl,
        tags,
        title,
        instructor,
        description,
        courseurl,
        onTagClick,
    } = props;

    const {
        openShareModal,
        shareCourse,
        handleLike,
        handleUnlike,
        isFavourite,
    } = useGlobalContext();

    const [liked, setLiked] = useState(isFavourite(code) ? true : false);

    const likeHandler = (code) => {
        handleLike(code);
        setLiked(true);
    };

    const unlikeHandler = (code) => {
        handleUnlike(code);
        setLiked(false);
    };

    const shareHandler = (code) => {
        openShareModal();
        shareCourse(code);
    };
    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
            <div className='card-container grow'>
                <img src={imageurl} className='card-image' alt='' />
                <div className='card-bottom'>
                    {/* tag elements */}
                    <div className='tag-element-container'>
                        {tags.map((eachTag) => {
                            return (
                                <button
                                    key={eachTag + code}
                                    className='btn btn-secondary tag-element-text'
                                    onClick={() => onTagClick(eachTag)}>
                                    {eachTag}
                                </button>
                            );
                        })}
                    </div>
                    {/* title and author */}
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-author'>
                        <span className='card-author-bytext'>by </span>
                        {instructor}
                    </p>
                    {/* description */}
                    <p className='card-description'>{description}</p>
                    {/* bottom row container  */}
                    <div className='bottom-row d-flex flex-row mt-auto'>
                        <a href={courseurl} target='_blank' rel='noreferrer'>
                            <button className='btn btn-secondary learn-more-button'>
                                Learn More
                            </button>
                        </a>
                        <div className='share-container'>
                            <button
                                className='btn btn-secondary share-button'
                                onClick={() => shareHandler(code)}>
                                Share
                                <i className='fas fa-share-alt ml-1'></i>
                            </button>
                        </div>
                        {liked ? (
                            <i
                                className='fa fa-star star-liked star-hover'
                                onClick={() => unlikeHandler(code)}></i>
                        ) : (
                            <i
                                className='far fa-star star-default star-hover'
                                onClick={() => likeHandler(code)}></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
