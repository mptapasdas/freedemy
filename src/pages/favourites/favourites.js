import React, { useEffect } from "react";
import Card from "../../components/card/card";

import { getFavouriteCourseCodeListFromLocalStorage } from "../../functions/functions";

import "./favourites.css";

let courseList = require("../../courselist.json");
const Favourites = () => {
  useEffect(() => {
    document.title = "Freedemy | Favourites";
  });
  let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
  favouriteCourseCodeList.reverse();

  const tagClickHandler = (currentTag) => {
    return false;
  };
  return (
    <div className='h-100 favourite-container'>
      <div className='bg-container container-fluid' id='style-2'>
        <div className='row row-containers'>
          <h1 className='col-12 favourite-course-description'>
            {favouriteCourseCodeList.length === 0
              ? `${"No courses are marked as favourite. Try adding some"}`
              : `${"Here Are Your Favourite Courses"}`}
          </h1>
          {favouriteCourseCodeList.map((i) => {
            return (
              <Card
                key={courseList[i].code}
                code={courseList[i].code}
                imageurl={courseList[i].imageurl}
                tags={courseList[i].tags}
                title={courseList[i].title}
                instructor={courseList[i].instructor}
                description={courseList[i].description}
                courseurl={courseList[i].courseurl}
                onTagClick={tagClickHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
