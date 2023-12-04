import React, { useState } from "react";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Suggestion.css";

const Suggestion = () => {
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseUrl, setCourseUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      courseName,
      courseDescription,
      instructor,
      courseUrl,
      thumbnailUrl,
    };

    if (notValidInput(data)) {
      return;
    }

    axios
      .post("/courses/suggest", data)
      .then((response) => {
        if (response.data.success) {
          successToast();
          setEmail("");
          setCourseName("");
          setCourseDescription("");
          setInstructor("");
          setCourseUrl("");
          setThumbnailUrl("");
        } else {
          errorToast("There was an Error. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        errorToast("Axios Failure");
      });
  };

  const notValidInput = (data) => {
    let email = data.email.toString();
    if (
      !RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).exec(email)
    ) {
      toast.error("Please provide valid email");
      return true;
    }
    if (data.courseName == null || data.courseUrl == null) {
      toast.error("Course name and url are required");
      return true;
    }
    return false;
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

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
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
