import React, { useEffect, useRef } from "react";
import axios from "axios";
import "../../axios.jsx";

import Card from "../../components/card/card.jsx";
import CardHolder from "../../components/cardholder/CardHolder.jsx";
import SearchBar from "../../components/searchbar/searchbar.jsx";
import Header from "../../layouts/header/header.jsx";
import Scroll from "../../components/scroll-to-top/scroll.jsx";
import CustomLoading from "../../components/custom-loading/CustomLoading.jsx";

import { useGlobalContext } from "../../context-provider/context-provider.jsx";

const HomePage = () => {
    const {
        allCoursesLoading,
        setAllCoursesLoading,
        courseArray,
        setCourseArray,
    } = useGlobalContext();

    const courseLoaded = useRef(false);

    useEffect(() => {
        document.title = "Freedemy | Home";
    }, []);

    useEffect(() => {
        if (!courseLoaded.current && courseArray.length === 0) {
            setAllCoursesLoading(true);
            const getCourses = async () => {
                try {
                    const { data } = await axios.get(`/courses`);
                    setCourseArray(data.allCourses);
                    setAllCoursesLoading(false);
                } catch (error) {
                    setAllCoursesLoading(false);
                    console.log(error);
                }
            };
            getCourses();
            courseLoaded.current = true;
        }
    }, [courseArray.length, setAllCoursesLoading, setCourseArray]);

    return (
        <CardHolder>

            <Header />
            <SearchBar />
            <CustomLoading isLoading={allCoursesLoading} />
            {courseArray.map((eachCourse) => {
                return (
                    !allCoursesLoading && (
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
                    )
                );
            })}
            <Scroll />
        </CardHolder>
    );
};

export default HomePage;
