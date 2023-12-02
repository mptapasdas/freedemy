import React, { useState } from "react";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Suggestion.css";

const Suggestion = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseUrl, setCourseUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the course suggestion to the server using Axios
    const data = {
      courseName,
      courseDescription,
      instructor,
      courseUrl,
      thumbnailUrl,
    };

    axios
      .post("/api/courses/suggest", data)
      .then((response) => {
        if (response.data.success) {
          toast.success("Your course suggestion has been submitted!");
          setCourseName("");
          setCourseDescription("");
          setInstructor("");
          setCourseUrl("");
          setThumbnailUrl("");
        } else {
          alert("There was an error submitting your course suggestion.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error submitting your course suggestion.");
      });
  };

  const successToast = () => {
    toast.success("Successfully submitted", {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errorToast = (errorMessage) => {
    toast.error(errorMessage, {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSuggesterClick = (event) => {
    event.preventDefault();
    errorToast("Not working");
  };

  return (
    <div className="suggestion h-100">
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      ></ToastContainer>
      <h3>Suggest a Course</h3>
      <form onSubmit={handleSuggesterClick}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(event) => setCourseName(event.target.value)}
          required
        />

        <label htmlFor="instructor">Instructor:</label>
        <input
          type="text"
          id="instructor"
          value={instructor}
          onChange={(event) => setInstructor(event.target.value)}
        />

        <label htmlFor="courseDescription">Course Description:</label>
        <textarea
          id="courseDescription"
          rows="3"
          value={courseDescription}
          onChange={(event) => setCourseDescription(event.target.value)}
          required
        />

        <label htmlFor="courseUrl">Course URL:</label>
        <input
          type="url"
          id="courseUrl"
          value={courseUrl}
          onChange={(event) => setCourseUrl(event.target.value)}
        />

        <label htmlFor="thumbnailUrl">Thumbnail URL:</label>
        <input
          type="url"
          id="thumbnailUrl"
          value={thumbnailUrl}
          onChange={(event) => setThumbnailUrl(event.target.value)}
        />
        <button className="submit-button" onClick={handleSuggesterClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
