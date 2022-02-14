import React, { useState } from "react";

import axios from "axios";
import "../../axios";

import { useGlobalContext } from "../../context-providerr/context-provider";
import { useAuthContext } from "../../context-providerr/auth-provider";

import "./card.css";

const Card = (props) => {
    const { code, imageurl, tags, title, instructor, description, courseurl } =
        props;

    const {
        favouriteCourseArray,
        setFavouriteCourseArray,
        isLoggedIn,
        setFavouriteCoursesLoading,
    } = useAuthContext();

    const {
        openShareModal,
        setAllCoursesLoading,
        setCourseArray,
        page,
        setSharingCourse,
        openSignModal
    } = useGlobalContext();

    const tagClickHandler = async (searchValue) => {
        let searchQuery = searchValue.toLowerCase();
        if (searchQuery) {
            setAllCoursesLoading(true);
            try {
                const { data } = await axios.get(
                    `/courses/search?query=${searchQuery}`
                );
                setCourseArray(data.filteredCourses);
                setAllCoursesLoading(false);
            } catch (error) {
                setAllCoursesLoading(false);
                console.log(error);
            }
        }
    };

    const isFavourite = () => {
        for (let eachCourse of favouriteCourseArray) {
            if (eachCourse.code === code) return true;
        }
        return false;
    };

    const [liked, setLiked] = useState(isFavourite() ? true : false);

    const handleLike = async () => {
        setFavouriteCoursesLoading(true);
        try {
            await axios.post(`/favourites`, props);
        } catch (error) {
            console.log(error.response.data.msg);
        }
        try {
            const { data } = await axios.get("/favourites");
            if (data.authorized === "true") {
                setFavouriteCourseArray(data.favouriteCourses);
                setFavouriteCoursesLoading(false);
            }
        } catch (error) {
            console.log(error.response.data);
            setFavouriteCoursesLoading(false);
        }
    };

    const handleUnlike = async () => {
        setFavouriteCoursesLoading(true);
        try {
            await axios.delete(`/favourites/${code}`);
            const { data } = await axios.get("/favourites");
            setFavouriteCourseArray(data.favouriteCourses);
            console.log(favouriteCourseArray);
            setFavouriteCoursesLoading(false);
        } catch (error) {
            setFavouriteCoursesLoading(false);
            console.log(error.response);
        }
    };

    const likeHandler = () => {
        if (page !== "favourite" && isLoggedIn){ 
            setLiked(true);
            handleLike();
        }
        if(!isLoggedIn) openSignModal()
    };

    const unlikeHandler = () => {
        if (page !== "favourite" && isLoggedIn) handleUnlike();
        setLiked(false);
    };

    const shareHandler = () => {
        openShareModal();
        setSharingCourse(props);
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
                                    onClick={() => tagClickHandler(eachTag)}>
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
                                onClick={() => shareHandler()}>
                                Share
                                <i className='fas fa-share-alt ml-1'></i>
                            </button>
                        </div>
                        {liked ? (
                            <i
                                className='fa fa-star star-liked star-hover'
                                onClick={() => unlikeHandler()}></i>
                        ) : (
                            <i
                                className='far fa-star star-default star-hover'
                                onClick={() => likeHandler()}></i>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
