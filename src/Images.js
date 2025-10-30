import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Images(props) {
  let [images, setImages] = useState("");

  useEffect(() => {
    setImages("");
  }, [props.word]);

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function searchWordImages(keyword) {
    const apiKey = "733615547b11515efo464ab9111t0c1b";

    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  if (images) {
    return (
      <div className="Images">
        <section className="pb-0 ps-4 pe-4">
          <div className="row">
            {images.map(function (image, index) {
              return (
                <div className="col-sm-4" key={index}>
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
    searchWordImages(props.word);
    return (
      <ClipLoader
        color="var(--secondary-color)"
        loading={true}
        size={70}
        speedMultiplier={1}
        cssOverride={override}
        className="mb-5"
      />
    );
  }
}

const override = {
  display: "block",
  margin: "0 auto",
};
