import React, { useRef, useState, useEffect } from "react";

import Button from "../button/button";
import "./imageUpload.css";

const ImageUploadAuth = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {isShown && (
            <div
              className="deleteImage"
              onMouseOver={() => setIsShown(true)}
              onMouseOut={() => setIsShown(false)}
            >
              <h1
                onClick={() => {
                  setPreviewUrl("");
                }}
              >
                X
              </h1>
            </div>
          )}

          {previewUrl && (
            <img
              onMouseOver={() => setIsShown(true)}
              onMouseOut={() => setIsShown(false)}
              src={previewUrl}
              alt="Preview"
            />
          )}

          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button
          className="imageuploadAuth"
          type="button"
          onClick={pickImageHandler}
        >
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUploadAuth;
