import React from "react";
import "./card.css";
import { useState } from "react";
import { getFavouriteCourseCodeListFromLocalStorage } from "../../functions/functions";
import { removeElementFromArray } from "../../functions/functions";

import { useGlobalContext } from "../../context-providerr/context-provider";

const isFavourite = (code) => {
  let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
  const index = favouriteCourseCodeList.indexOf(code);
  return index > -1;
};

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

  const [liked, setLiked] = useState(isFavourite(code) ? true : false);
  const { openModal, shareCourse } = useGlobalContext();

  const likeHandler = (code) => {
    let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
    favouriteCourseCodeList.push(code);
    favouriteCourseCodeList = [...new Set(favouriteCourseCodeList)];
    localStorage.setItem(
      "favouriteCourseCodes",
      JSON.stringify(favouriteCourseCodeList)
    );
    setLiked(true);
  };

  const unlikeHandler = (code) => {
    let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
    removeElementFromArray(code, favouriteCourseCodeList);
    localStorage.setItem(
      "favouriteCourseCodes",
      JSON.stringify(favouriteCourseCodeList)
    );
    setLiked(false);
  };

  const shareHandler = (code) => {
    openModal();
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
                className='far fa-star star-icon star-hover'
                onClick={() => likeHandler(code)}></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
