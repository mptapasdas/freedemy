import React, { useState } from "react";
import "./searchbar.css";

import axios from "axios";
import "../../axios";

import { useGlobalContext } from "../../context-provider/context-provider";

const SearchBar = () => {
    const { setAllCoursesLoading, setCourseArray } = useGlobalContext();
    const [searchValue, setSearchValue] = useState("");

    const searchHandler = async () => {
        let searchQuery = searchValue.trim().toLowerCase();
        if (searchQuery.length > 0) {
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

    //search on pressing enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };
    return (
        <div className='col-12 mt-5 search-hold'>
            <div className='d-flex flex-row justify-content-center p-3'>
                <input
                    id='search-input'
                    className='searchbox'
                    type='search'
                    placeholder='javascript'
                    onChange={({ target }) => {
                        setSearchValue(target.value);
                    }}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <button
                    type='button'
                    className='p-2 search-icon'
                    onClick={searchHandler}>
                    <i className='fas fa-search'></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
