import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import "./Registration.css";
//import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    kidsAtHome: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // dobch: "",
    dob: "",
    selectdob: "",
    firstname: "",
    city: "",
    phone_number: "",
    email: "",
    state: "",
    Idcard:"",
    company:"",
    Alterphone_number:"",
    password:"",
    cosfirmPassword:"",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dob, setDob] = useState("");

  var selectday1;
  const handlSubmit = (e) => {
    setFormErrors(validate());
    setIsSubmit(true);
    handleChange();

  };
const passwodConfirm =()=> {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 

  const dobChange = (e) => {
    setDob(e);
    console.log("e", e);
    let month = e.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = e.getUTCFullYear();
    let tdate = e.getDate();
    if (tdate < 10) {
      tdate = "0" + tdate;
    }

    selectday1 = tdate + "-" + month + "-" + year;

    console.log("painDetails selectday", selectday1);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  },[formErrors]);

  const validate = () => {
    const errors = {};
    let email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let name_regex = /^[a-zA-Z ]{2,30}$/;
    let input_fname = document.getElementById("firstname").value;
    let input_lname = document.getElementById("city").value;
    let input_email = document.getElementById("email").value;
    let input_contact = document.getElementById("contact").value;
    let input_Alterphone_number = document.getElementById("Alterphone_number").value;
    let input_postcode = document.getElementById("postcode").value;
    if (!input_fname) {
      errors.firstname = "Please fill this field!";
    } else if (!name_regex.test(input_fname)) {
      errors.firstname =
        "Numbers and Special characters are not allowed in Name Fields\n";
    }

    if (!input_lname) {
      errors.city = "Please fill this field!";
    } else if (!name_regex.test(input_lname)) {
      errors.city =
        "Numbers and Special characters are not allowed in Name Fields \n";
    }

    if (!input_email) {
      errors.email = "Please fill this field! ";
    } else if (!email_regex.test(input_email)) {
      errors.email = "Email format is not valid";
    }
   
    if (!input_contact) {
      errors.contact = "contact number must be provided";
    } else if (input_contact.length !== 11) {
      errors.contact = "invalid phone number";
    }
    if (!input_Alterphone_number) {
      errors.contact = "contact number must be provided";
    } else if (input_Alterphone_number.length !== 11) {
      errors.contact = "invalid phone number";
    }

    if (!input_postcode) {
      errors.postcode = "Please fill this field!";
    }

    if (!errors) {
      //nextStep();
    } else {
      return errors;
    }
  };
  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
    console.log(values);
  };
  useEffect(()=>{
    handlSubmit();
  },[ ]);

  return (
    <form>
      <center>
        <h1 className="formtitle">User Registration</h1>

        <div className="container">
          <div className="fieldname">
            <div className="fieldlabel">
              <label>Name</label>
              <label className="mandatory">*</label>
            </div>

            <div className="fieldinput">
              <input
                type="text"
                id="firstname"
                name="firstName"
                placeholder="Enter First Name"
                className="placeholderstyle"
                defaultValue={values.firstname}
                onChange={handleChange("firstname")}
              />
              <br />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.firstname}</p>
          <div className="fieldname">
            <div className="fieldlabel">
              <label> E-mail ID </label>
              <label className="mandatory">*</label>
              <br />
            </div>
            <div className="fieldinput">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter e-mail"
                className="placeholderstyle"
                 onChange={handleChange("email")}
                defaultValue={values.email}
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.email}</p>
          <div className="fieldname">
            <div className="fieldlabel">
              <label> Phone Number </label>
              <label className="mandatory">*</label>
            </div>
            <div className="fieldinput">
              <input
                type="tel"
                id="contact"
                name="contact"
                pattern="[0-9]{1}-[0-9]{10}"
                placeholder="Mobile Number"
                className="placeholderstyle"
                defaultValue={values.phone_number}
                onChange={handleChange("phone_number")}
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.contact}</p>
          <div className="fieldname">
            <div className="fieldlabel">
              <label> Alternate Phone Number </label>
              <label className="mandatory">*</label>
            </div>
            <div className="fieldinput">
              <input
                type="tel"
                id="Alterphone_number"
                name="Alterphone_number"
                pattern="[0-9]{1}-[0-9]{10}"
                placeholder="Mobile Number"
                className="placeholderstyle"
                defaultValue={values.Alterphone_number}
                onChange={handleChange("Alterphone_number")}
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.contact}</p>
          <div className="fieldname">
            <div className="fieldlabel">
              <label> Street Address</label>
            </div>
            <div className="fieldinput">
              <input
                type="text"
                id="address"
                name="address"
                //onChange={handleChange("address")}
                defaultValue={values.address}
                placeholder="Enter Address"
                className="placeholderstyle"
              />
            </div>
          </div>
          <div className="fieldname">
            <div className="fieldlabel">
              <label>City</label>

              <label className="mandatory">*</label>
            </div>
            <div className="fieldinput">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter City"
                className="placeholderstyle"
                defaultValue={values.city}
                onChange={handleChange("city")}
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.city}</p>

          <div className="fieldname">
            <div className="fieldlabel">
              <label>State</label>
               <label className="mandatory">*</label>
            </div>
            <div className="fieldinput">
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter state"
                className="placeholderstyle"
                defaultValue={values.state}
                onChange={handleChange("state")}
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.state}</p>
          <div className="fieldname">
            <div className="fieldlabel ">
              <label> Pincode </label>
              <label className="mandatory">*</label>
              <br />
            </div>
            <div className="fieldinput">
              <input
                type="text"
                id="postcode"
                name="postcode"
                onChange={handleChange("postcode")}
                defaultValue={values.postcode}
                placeholder=" Enter Postcode"
                className="placeholderstyle"
              />
            </div>
          </div>
          <p className="mandatorymsg">{formErrors.postcode}</p>
          <div className="fieldname">
            <div className="fieldlabel">
              <label>ID card Number </label>
            </div>
            <div className="fieldinput">
              <input
                type="text"
                id="Idcard"
                name="Idcard"
                placeholder="Eg:M1234567"
                className="placeholderstyle"
                onChange={handleChange("hospital_number")}
                defaultValue={values.hospital_number}
              />
            </div>
          </div>

          <div className="fieldname">
            <div className="fieldlabel">
              <label> Date Of Birth</label>

              <label className="mandatory">*</label>
            </div>

            <div className="fieldinput">
              <DatePicker
                id="dob"
                name="dob"
                selected={dob}
                value={dob}
                dateFormat="dd-MMM-yyyy"
                showMonthDropdown={true}
                showYearDropdown={true}
                scrollableYearDropdown={true}
                placeholderText="Enter Date OF Birth"
                dropdownMode="select"
                dayPlaceholder="dd-MMM-yyyy"
                className="placeholderstyle"
                //defaultValue={selectday}
                onChange={dobChange}
                maxDate={new Date()}
              />
            </div>
          </div>

          <br />
      
        <div className="fieldname">
        <div className="fieldlabel">
          <label>Company Name</label>
           <label className="mandatory">*</label>
        </div>
        <div className="fieldinput">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter company name"
            className="placeholderstyle"
            defaultValue={values.company}
            onChange={handleChange("company")}
          />
        </div>
      </div>
      <div className="fieldname">
      <div className="fieldlabel">
        <label>password</label>
         <label className="mandatory">*</label>
      </div>
      <div className="fieldinput">
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={values.password}
          onChange={handleChange("password")}
         
          
        />
       
      </div>
    
    </div>
    <div className="showpassword">
    <input type="checkbox" onclick={passwodConfirm}/>Show Password
    </div>
      </div>
      <p className="mandatorymsg">{formErrors.state}</p>
        <button className="nextbutton" onClick={handlSubmit} >
          Submit
        <MdOutlineNavigateNext size={30} style={{ fill: "white" }} />
      </button>
      </center>
    </form>
  );
};

export default Register;
