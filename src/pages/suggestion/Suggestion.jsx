import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import { isValidUrl, isValidEmail, isEmpty } from "../../utils/StringUtils";

import "react-toastify/dist/ReactToastify.css";
import "./Suggestion.css";
import CustomInput from "../../components/custom-input/CustomInput";

import SuggestionImage from "../../assets/suggest_course.png";

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
    <div className="suggestion h-100 d-flex flex-column align-items-center">
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
      <div className="row col-12">
        <div className="d-none d-md-block col-md-6 h-25">
          <img src={SuggestionImage} alt="" className="suggestion-image" />
        </div>
        <div className="field-holder col-12 col-md-6">
          <CustomInput
            type="text"
            id="email"
            value={email}
            onChangeHandler={(event) => setEmail(event.target.value)}
            label={"Email"}
            mandatory={true}
          />

          <CustomInput
            type="text"
            id="courseName"
            value={courseName}
            onChangeHandler={(event) => setCourseName(event.target.value)}
            label={"Course Name"}
            mandatory={true}
          />

          <CustomInput
            type="text"
            id="courseUrl"
            value={courseUrl}
            onChangeHandler={(event) => setCourseUrl(event.target.value)}
            label={"Course Url"}
            mandatory={true}
          />

          <CustomInput
            type="text"
            id="instructor"
            value={instructor}
            onChangeHandler={(event) => setInstructor(event.target.value)}
            label={"Instructor"}
          />

          <CustomInput
            type="text"
            id="courseDescription"
            rows="2"
            value={courseDescription}
            onChangeHandler={(event) =>
              setCourseDescription(event.target.value)
            }
            label={"Course Description"}
          />

          <CustomInput
            type="text"
            id="thumbnailUrl"
            value={thumbnailUrl}
            onChangeHandler={(event) => setThumbnailUrl(event.target.value)}
            label={"Thumbnail Url"}
          />
          <button
            className="submit-button"
            disabled={submitDisabled}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
