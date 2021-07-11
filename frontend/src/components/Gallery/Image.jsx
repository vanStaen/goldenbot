import React from "react";

export const Image = (props) => {
  return (
    <div className="images__container">
      <img
        id={props.image.id}
        src={props.image.file_s3}
        alt={props.image.id}
        key={props.key}
        width="100%"
      />
    </div>
  );
};
