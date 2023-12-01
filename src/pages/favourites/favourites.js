import React, { useEffect } from "react";
import Card from "../../components/card/card";
import CustomLoading from "../../components/custom-loading/CustomLoading";
import { useAuthContext } from "../../context-provider/auth-provider";

import "./favourites.css";

const Favourites = () => {
    useEffect(() => {
        document.title = "Freedemy | Favourites";
    });

    const { favouriteCourseArray, favouriteCoursesLoading, isLoggedIn } =
        useAuthContext();

    return (
        <div className='h-100 favourite-container'>
            <div className='bg-container container-fluid'>
                <div className='row row-containers'>
                    {isLoggedIn && (
                        <h1 className='col-12 favourite-course-description'>
                            {favouriteCourseArray.length === 0
                                ? `${"No courses are marked as favourite. Try adding some"}`
                                : `${"Here Are Your Favourite Courses"}`}
                        </h1>
                    )}
                    {!isLoggedIn && (
                        <h1 className='col-12 favourite-course-description'>
                            Please login/register to access your favourite
                            courses
                        </h1>
                    )}
                    <CustomLoading isLoading={favouriteCoursesLoading} />
                    {favouriteCourseArray.map((eachCourse) => {
                        return (
                            <Card
                                key={eachCourse.code}
                                code={eachCourse.code}
                                imageurl={eachCourse.imageurl}
                                tags={eachCourse.tags}
                                title={eachCourse.title}
                                instructor={eachCourse.instructor}
                                description={eachCourse.description}
                                courseurl={eachCourse.courseurl}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favourites;
