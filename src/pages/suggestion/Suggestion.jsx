import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import { isValidUrl, isValidEmail, isEmpty } from "../../utils/StringUtils";

import "react-toastify/dist/ReactToastify.css";
import "./Suggestion.css";

const Suggestion = () => {
  const [email, setEmail] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseUrl, setCourseUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(false);

  const successToast = () => {
    toast.success("Successfully submitted");
  };

  const errorToast = (errorMessage) => {
    toast.error(errorMessage);
  };

  const inProgressToast = useCallback(() => {
    if (isRequestPending) {
      toast.warning("Please Wait");
    }
  }, [isRequestPending]);

  useEffect(() => {
    if (isRequestPending) {
      inProgressToast();
    }
  }, [isRequestPending, inProgressToast]);

  const notValidInput = () => {
    if (!isValidEmail(email)) {
      toast.error("Please provide a valid email");
      return true;
    }
    if (isEmpty(courseName)) {
      toast.error("Course name is required");
      return true;
    }
    if (!isValidUrl(courseUrl)) {
      toast.error("Please provide valid course url");
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    inProgressToast();
    setIsRequestPending(true);
    setSubmitDisabled(true);

    setTimeout(() => {
      setSubmitDisabled(false);
    }, 2000);

    const data = {
      email,
      courseName,
      courseDescription,
      instructor,
      courseUrl,
      thumbnailUrl,
    };

    if (notValidInput()) {
      setIsRequestPending(false);
      return;
    }

    axios
      .post("/courses/suggest", data)
      .then((response) => {
        setIsRequestPending(false);

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
        setIsRequestPending(false);
        console.error(error);
        errorToast("Axios Failure");
      });
  };

  return (
    <div className="suggestion h-100">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={false}
        theme="light"
        transition={Slide}
        limit={1}
      ></ToastContainer>
      <h3>Suggest a Course</h3>
      <form>
        <label htmlFor="email">
          Your Email<span className="required">*</span>:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="courseName">
          Course Name<span className="required">*</span>:
        </label>
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

        <label htmlFor="courseUrl">
          Course URL<span className="required">*</span>:
        </label>
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
        <button
          className="submit-button"
          disabled={submitDisabled}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
