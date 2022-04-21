import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";

import PersonalInfoComponent from "../form fields/PersonalInfoComponent";


function MentorForm() {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
 
  let navigate = useNavigate();
  async function mySubmitFunction() {

    let formData = new FormData();
    try {
      const personalInfo = {
        firstName,
        lastName,
        city,
        province,
        email,
      }

      formData.append("fileProps", JSON.stringify(personalInfo));
      formData.append("image", image);

      const res = await fetch("/api/add-mentor", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
    
        navigate("/mentor-gallery");
      }
    } catch (err) {
      console.log(err);
    }
  
  
    };
    

  return (
    <div className="main-form">
      <FormTitleComponent title={"Become a Mentor!"} />

      <PersonalInfoComponent
        values={{ firstName, lastName, email, city, province }}
        setters={{ setFirstName, setLastName, setEmail, setCity, setProvince }}
      />
      <ImageUpload values={{ image }} setters={{ setImage }} />
     
      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={mySubmitFunction}
      />
    </div>
  );
}

export default MentorForm;