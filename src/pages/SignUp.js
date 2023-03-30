import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/button";
import Upload, { UploadFile } from "../components/upload";
import { Api } from "../helpers/api";
import localStorageHelper from "../helpers/localstorage";
import "./signup.css";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// const FamilyDetails = ({ handleFamily_details }) => {

//   return (

//   );
// };

function SignUp(props) {
  const [profilePic, setProfilePic] = useState("");
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");
  // const [nominee, setNominee] = useState("");
  // const [birth_date, setDob] = useState("");
  // const [address, setAddress] = useState("");
  // const [address2, setAddressLine2] = useState("");
  // const [city, setCity] = useState("");
  // const [region, setRegion] = useState("");
  // const [poCode, setPoCode] = useState("");
  // const [country, setCountry] = useState("");
  const [family_details, setFamily_details] = useState([]);
  // const [adharNumber, setAdharNumber] = useState("");
  const [signature, setSignature] = useState("");
  const [affidavit, setAffidavit] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userData = localStorageHelper.getData("user");
  const [members, setMembers] = useState([0]);
  const [message, setMessage] = useState("");
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [showImg, setShowImg] = useState(true);

  const handleFileChange = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
    setShowImg(true);
  };

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
    // const pixelRatio = window.devicePixelRatio;
    // canvas.width = crop.width * pixelRatio;
    // canvas.height = crop.height * pixelRatio;
    // ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    // ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
    setShowImg(false);
  }
  const Input = ({ helperText, ...other }) => {
    // console.log("other", helperText, other);
    return (
      <div>
        <input
          {...other}
          // onChange={(e) => {
          //   setValue(e.target.value);
          //   onChange(e);
          // }}
          className="InputText"
        />
        <div className="errorMessage">{helperText && helperText()}</div>
      </div>
    );
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    nominee: "",
    birth_date: "",
    address: "",
    address2: "",
    city: "",
    region: "",
    poCode: "",
    country: "",
    adharNumber: "",
    signature: "",
    affidavit: "",
    name_familymember: "",
    relation: "",
    blood_group: "",
    dob: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter the first name"),
    lastName: Yup.string().required("Please enter the last name"),
    nominee: Yup.string().required("Please enter the nominee"),
    birth_date: Yup.string().required("Please enter the date of birth"),
    address: Yup.string().required("Please enter the address"),
    address2: Yup.string().required("Please enter the address"),
    city: Yup.string().required("Please enter the city"),
    region: Yup.string().required("Please enter the district"),
    country: Yup.string().required("Please enter the pin code"),
    poCode: Yup.string().required("Please enter the pin code"),
    adharNumber: Yup.string().required("Please upload the aadhar card number"),
    signature: Yup.string().required("Please upload the signature"),
    affidavit: Yup.string().required("Please upload the affidavit"),
    name_familymember: Yup.string().required("Please fill the name"),
    relation: Yup.string().required("Please fill the relation"),
    blood_group: Yup.string().required("Please fill the blood grouo"),
    dob: Yup.string().required("Please fill the date of birth"),
  });

  useEffect(() => {
    if (!userData) {
      props.history.push("/mobile");
    }
  }, [userData]);

  const handleFamily_details = (field, value, index) => {
    let details = family_details;
    details[index] = { ...details[index], [field]: value };
    setFamily_details(details);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const dataReq = new FormData(e.target);
    // console.log(family_details.length);
    const data = localStorageHelper.getData("user");

    const first_name = dataReq.get("firstName");
    const last_name = dataReq.get("lastName");
    const nominee = dataReq.get("nominee");
    const birth_date = dataReq.get("birth_date");

    // const family_details = dataReq.get("lastName");
    const adharNumber = dataReq.get("adharNumber");
    // const signature1 = dataReq.get("signature");
    console.log(signature, "Sign");
    const affidavit = dataReq.get("affidavit");
    // const profilePic=dataReq.get("lastName")

    // const family_details = {};
    const _address = {
      street_address: dataReq.get("address"),
      street_addresslin2: dataReq.get("address2"),
      city: dataReq.get("city"),
      region: dataReq.get("region"),
      zip_code: dataReq.get("poCode"),
      country: dataReq.get("country"),
    };
    const payload = {
      ...data,
      first_name,
      last_name,
      nominee,
      birth_date,
      adharNumber,
      signature,
      affidavit,
      address: _address,
      result,
      family_details,
      // first_name,
      // last_name,
      // nominee,
      // birth_date,
      // address: _address,
      // family_details,
      // adharNumber,
      // signature,
      // affidavit,
      // profilePic,
    };
    // if (!payload.first_name) {
    //   toast.error("First name is missing");
    //   return;
    // }
    // console.log(
    //   payload.family_details.length,
    //   payload.address.address,
    //   payload.first_name,
    //   payload.last_name
    // );

    console.log(payload);
    if (
      !payload.first_name ||
      !payload.last_name ||
      !payload.nominee ||
      !payload.birth_date ||
      // !payload.address.address ||
      !payload.family_details.length ||
      !payload.adharNumber
      // !payload.signature
      // !payload.profilePic
    ) {
      setLoading(false);
      toast.error("Please fill required fields");
      setMessage("Please fill required fields");
    } else {
      localStorageHelper.setData({ ...userData, ...payload });
      Api.post("user/register", { ...userData, ...payload })
        .then((res) => {
          if (res.data.result.registerStatus) {
            localStorageHelper.setData("auth", true);
            localStorageHelper.setData("userId", res.data.result.userID);
            props.history.push("/select-plans");
          } else {
            setLoading(false);
            toast.error("Failed To Register");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const addMembers = () => {
    if (members.length < 2) {
      setMembers((mem) => [...mem, mem.length]);

      // console.log(family_details, "family_details");
      console.log(members, "members1");
      console.log(family_details, "family_details1");
    } else {
      toast.error("Only 2 family members can be added");
    }
  };

  const removeMembers = () => {
    console.log(members, "member2s");
    console.log(family_details, "family_details2");
    if (members.length === 2) {
      let temp1 = family_details;
      temp1.pop();
      let temp2 = members;
      temp2.pop();

      setFamily_details(temp1);

      setMembers(temp2);

      // setMembers(temp2);
    } else {
      toast.error("One family member has to be added");
    }
  };
  return (
    <div className="d-flex main_container_signUp justify-content-center">
      <div className="col-12 pt-5 sign_up_cont">
        <div className="col-9 container mb-5">
          <div className=" font-weight-bolder text-center mb-4 sign_header">
            Create an account and discover the benifits
          </div>
          <div style={{ fontSize: "x-small", color: "gray" }}></div>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form onSubmit={onSubmit}>
                <div className="d-flex justify-content-end">
                  <div className="col-6">
                    {src && showImg && (
                      <div>
                        <ReactCrop
                          src={src}
                          onImageLoaded={setImage}
                          crop={crop}
                          onChange={setCrop}
                        />
                        <button
                          onClick={getCroppedImg}
                          className="btn btn-danger"
                        >
                          Crop Image
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="pro_pic_cont m-auto pt-5">
                      {/* <input hidden id="file_up" type="file" onChange={(e) => setSignature(e.target.value)} /> */}
                      <div className="col-12 p-0">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="ImageCrop"
                        />
                        {result && (
                          <div className="cropedImage">
                            <img
                              src={result}
                              alt="CroppedImage"
                              className="img-fluid setImage"
                            />
                          </div>
                        )}
                      </div>

                      {/* <UploadFile
                        onChange={(e) => setProfilePic(e)}
                        signature={"profile"}
                      /> */}
                    </div>
                    <div className="grey-info">
                      {`'Profile Picture (Jpg/png'
            max size 2 mb)`}
                    </div>
                  </div>
                </div>
                {/* <label className="ml-4 mb-0">Name</label> */}
                <div
                  style={{ fontSize: "20px" }}
                  className="font-weight-bolder mb-3"
                >
                  Name Details
                </div>
                <div className=" row d-flex">
                  <div className="col-6">
                    <Field
                      as={Input}
                      label="First Name"
                      placeholder="First Name"
                      name="firstName"
                      fullWidth
                      // value={first_name}
                      // onChange={(e) => {

                      //   setFirstName(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="firstName" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      label="Nominee"
                      placeholder="Nominee"
                      name="nominee"
                      fullWidth
                      // value={nominee}
                      // onChange={(e) => {
                      //   setNominee(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="nominee" />}
                      className="Input_field"
                    />
                  </div>
                  <br />
                  <div className="col-6">
                    <Field
                      as={Input}
                      label="Last Name"
                      placeholder="Last Name"
                      name="lastName"
                      fullWidth
                      // value={last_name}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setLastName(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="lastName" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      type="date"
                      label="Birthdate"
                      placeholder="Birthdate"
                      name="birth_date"
                      fullWidth
                      // value={birth_date}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setDob(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="birth_date" />}
                      className="Input_field"
                    />
                  </div>
                </div>
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  className="mt-4 mb-3 mb-0 font-weight-bolder"
                >
                  Address Details
                </div>

                <div className="row d-flex">
                  <div className="col-6">
                    <Field
                      as={Input}
                      label="Address 1"
                      placeholder=" Address Lane 1 "
                      name="address"
                      fullWidth
                      // value={address}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setAddress(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="address" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      label="Address 2"
                      placeholder=" Address Lane 2 "
                      name="address2"
                      fullWidth
                      // value={address2}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setAddressLine2(()=>e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="address2" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      label="City"
                      placeholder="City"
                      name="city"
                      fullWidth
                      // value={city}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setCity(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="city" />}
                      className="Input_field"
                    />
                  </div>
                  <br />
                  <div className="col-6">
                    <Field
                      as={Input}
                      label="Region"
                      placeholder="Region"
                      name="region"
                      fullWidth
                      // value={region}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setRegion(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="region" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      label="Pincode"
                      placeholder="Pincode"
                      name="poCode"
                      fullWidth
                      // value={poCode}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setPoCode(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="poCode" />}
                      className="Input_field"
                    />
                    <br />
                    <Field
                      as={Input}
                      label="Country"
                      placeholder="Country"
                      name="country"
                      fullWidth
                      // value={country}
                      // onChange={(e) => {
                      //   props.handleChange(e);
                      //   setCountry(e.target.value);
                      // }}
                      required
                      helperText={() => <ErrorMessage name="country" />}
                      className="Input_field"
                    />
                  </div>
                </div>
                <br />
                {members.map((m) => (
                  <>
                    <div
                      style={{ fontSize: "20px" }}
                      className="mt-4 mb-3  font-weight-bolder"
                    >
                      Family Details
                    </div>
                    <div className=" row d-flex">
                      <div className="col-6">
                        <Field
                          as={Input}
                          label="Name"
                          placeholder="Name"
                          name="name_familymember"
                          fullWidth
                          value={family_details[m]?.name_familymember}
                          onChange={(e) => {
                            props.handleChange(e);
                            handleFamily_details(
                              "name_familymember",
                              e.target.value,
                              m
                            );
                          }}
                          required
                          helperText={() => (
                            <ErrorMessage name="name_familymember" />
                          )}
                          className="Input_field"
                        />
                        <br />
                        <Field
                          as={Input}
                          label="Relation"
                          placeholder="Relation"
                          name="relation"
                          fullWidth
                          value={family_details[m]?.relation}
                          onChange={(e) => {
                            props.handleChange(e);
                            handleFamily_details("relation", e.target.value, m);
                          }}
                          required
                          helperText={() => <ErrorMessage name="relation" />}
                          className="Input_field"
                        />
                      </div>
                      <br />
                      <div className="col-6">
                        <Field
                          as={Input}
                          type="date"
                          id="date"
                          label="DOB"
                          // placeholder="DOB"
                          name="dob"
                          fullWidth
                          value={family_details[m]?.dob}
                          onChange={(e) => {
                            props.handleChange(e);
                            handleFamily_details("dob", e.target.value, m);
                          }}
                          required
                          helperText={() => <ErrorMessage name="dob" />}
                          className="Input_field"
                        />
                        <br />
                        <Field
                          as={Input}
                          label="Blood Group"
                          placeholder="Blood Group"
                          name="blood_group"
                          fullWidth
                          value={family_details[m]?.blood_group}
                          onChange={(e) => {
                            props.handleChange(e);
                            handleFamily_details(
                              "blood_group",
                              e.target.value,
                              m
                            );
                          }}
                          required
                          helperText={() => <ErrorMessage name="blood_group" />}
                          className="Input_field"
                        />
                      </div>
                      <div className="mt-3 ml-3">
                        <button
                          className="add-btn"
                          onClick={addMembers}
                          // onClick={() => setMembers((mem) => [...mem, mem.length])}
                        >
                          +
                        </button>
                        <button
                          className="add-btn ml-2"
                          onClick={removeMembers}
                          // onClick={() => setMembers((mem) => [...mem, mem.length])}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </>
                ))}
                <br />
                <div
                  style={{ fontSize: "20px" }}
                  className="mt-4 mb-0 font-weight-bolder"
                >
                  Adhar number:
                </div>
                <br />
                <Field
                  as={Input}
                  label="Aadhar Number"
                  placeholder="Enter Your Adhar number"
                  name="adharNumber"
                  fullWidth
                  // value={adharNumber}
                  // onChange={(e) => {
                  //   props.handleChange(e);
                  //   setAdharNumber(e.target.value);
                  // }}
                  required
                  helperText={() => <ErrorMessage name="adharNumber" />}
                  className="Input_field"
                  inputProps={{ maxLength: 12 }}
                />
                <br />
                <br />
                {/* <input
                  placeholder="Enter Your AdharNo"
                  onChange={(e) => setAdharNumber(e.target.value)}
                  className="m-2 form-control"
                  min="1"
                /> */}
                <div>
                  <Upload
                    name="signature"
                    key={"sign"}
                    title={"SIGNATURE:"}
                    onChange={(e) => setSignature(e)}
                    signature={"signature"}
                    required
                  />

                  <div className="grey-info ml-3">
                    valid file type is jpg, png, jpeg. Max size must be less
                    than 2 mb
                  </div>
                  <Upload
                    name="affidavit"
                    key={"aff"}
                    title={"AFFIDAVIT:"}
                    signature={"affidavit"}
                    onChange={(e) => setAffidavit(e)}
                  />
                  <div className="grey-info ml-3">
                    valid file type is jpg, png, jpeg. Max size must be less
                    than 2 mb
                  </div>
                </div>
                <br />
                <Button
                  style={{ alignItems: "center" }}
                  loading={loading}
                  // onClick={onSubmit}
                  className="signUp_submitButton"
                  type="submit"
                >
                  Submit
                </Button>
                <p>{error}</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
