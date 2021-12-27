import React, { useState, useEffect } from "react";

import Card from "../../components/card/card";
import CardHolder from "../../components/cardholder/CardHolder";
import SearchBar from "../../components/searchbar/searchbar";
import Header from "../../components/header/header";
import Scroll from "../../components/scroll-to-top/scroll";

import { editDist, shuffleArray } from "../../functions/functions";

let defaultCourseCodeArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

shuffleArray(defaultCourseCodeArray);
let courseList = require("../../courselist.json");
let tagList = require("../../tagList.json");
let tagToCodeMap = require("../../tagToCodeMap.json");

const HomePage = () => {
  useEffect(() => {
    document.title = "Freedemy | Home";
  });
  const [courseCodeArray, setCourseCodeArray] = useState(
    defaultCourseCodeArray
  );

  const tagClickHandler = (currentTag, forFav) => {
    let duplicateCourseList = [...courseList];
    let tagsCourseList = duplicateCourseList.filter((eachCourse) =>
      eachCourse.tags.includes(currentTag)
    );
    let tagsCourseCodeArray = [];
    for (const eachCourse of tagsCourseList) {
      tagsCourseCodeArray.push(eachCourse.code);
    }
    setCourseCodeArray(tagsCourseCodeArray);
  };

  const searchHandler = (searchValue) => {
    if (searchValue.length === 0) {
      shuffleArray(defaultCourseCodeArray);
      setCourseCodeArray(defaultCourseCodeArray);
      return;
    }
    let searchCourseTagList = [];
    let duplicateTagList = [...tagList];
    if (searchValue.length < 3) {
      searchCourseTagList = duplicateTagList.filter((eachTag) => {
        let newTag = eachTag.substring(0, Math.max(searchValue.length));
        return newTag === searchValue;
      });
    } else {
      searchCourseTagList = duplicateTagList.filter((eachTag) => {
        let newTag = eachTag.substring(
          0,
          Math.min(searchValue.length, eachTag.length)
        );
        return editDist(searchValue, newTag) < 2;
      });
    }

    let searchCourseCodeTagList = [];
    for (let eachTag of searchCourseTagList) {
      let currentTagCodeArray = tagToCodeMap[eachTag];
      searchCourseCodeTagList.push(...currentTagCodeArray);
    }
    searchCourseCodeTagList = [...new Set(searchCourseCodeTagList)];
    setCourseCodeArray(searchCourseCodeTagList);
  };

  return (
    <CardHolder>
      <Header />
      <SearchBar onSearch={searchHandler} />
      {courseCodeArray.map((i) => {
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
      <Scroll />
    </CardHolder>
  );
};

export default HomePage;
