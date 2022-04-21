import React from "react";

function ImageUpload({ setters, values }) {
  const { image } = values;
  const { setImage } = setters;

  return (
    <div className="ImageUpload">
      <label>
        Upload Photo:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
}

export default ImageUpload;
