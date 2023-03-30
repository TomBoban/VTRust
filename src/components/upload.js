import React, { useEffect, useState } from "react";
import { getBase64 } from "../utilities";

export const UploadFile = ({ onChange, signature }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const fileUploaded = (e) => {
    console.log(e, "e");
    setShowSuccess(true);
    onChange(getBase64(e.target.files[0]));
  };
  return (
    <div>
      <input id="file_up" type="file" onChange={fileUploaded} />

      {/* <label className="file_up" htmlFor="file_up">
        Choose file
      </label> */}
      {signature === "signature" && showSuccess && (
        <div className="signature">Signature uploaded successfully</div>
      )}
      {signature === "affidavit" && showSuccess && (
        <div className="signature">Affidavit uploaded successfully</div>
      )}
      {signature === "profile" && showSuccess && (
        <div className="profilePic">Profile Pic uploaded successfully</div>
      )}
    </div>
  );
};
export default function Upload({ title, onChange, signature }) {
  return (
    <div className="mt-3">
      <label style={{ fontSize: "20px" }} className="mb-0 font-weight-bolder">
        {title}
      </label>
      <div className="">
        <UploadFile onChange={onChange} signature={signature} />
      </div>
    </div>
  );
}
