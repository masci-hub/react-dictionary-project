import React from "react";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        <section className="pb-0 ps-4 pe-4">
          <div className="row">
            {props.images.photos.map(function (image, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={image.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={image.src.landscape}
                      alt={image.alt}
                      className="img-fluid mb-4"
                    ></img>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
