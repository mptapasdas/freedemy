import React, { useEffect } from "react";
import axios from "axios";
import "../../axios";

import Card from "../../components/card/card";
import CardHolder from "../../components/cardholder/CardHolder";
import SearchBar from "../../components/searchbar/searchbar";
import Header from "../../layouts/header/header";
import Scroll from "../../components/scroll-to-top/scroll";
import CustomLoading from "../../components/custom-loading/CustomLoading";

import { useGlobalContext } from "../../context-providerr/context-provider";

let courseLoaded = false;

const HomePage = () => {
    const {
        allCoursesLoading,
        setAllCoursesLoading,
        courseArray,
        setCourseArray,
    } = useGlobalContext();

    useEffect(() => {
        document.title = "Freedemy | Home";
    }, []);

    useEffect(() => {
        if (!courseLoaded) {
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
            return () => {
                courseLoaded = true;
            };
        }
    });

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
