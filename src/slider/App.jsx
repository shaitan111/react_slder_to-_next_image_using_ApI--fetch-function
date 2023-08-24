// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [img, setImg] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/" + page)
      .then((res) => {
        console.log(res.data);
        setImg(res.data);
        setLoading(false);
      })
  }, [page]);

  return (
    <>
      <div className="slider">
        <div className="left">
          {loading ? (
            <div className="loading-container">
              <p className="loading-text">Loading...</p>
            </div>
          ) : (
            <img src={img.image} alt={img.title} />
          )}
        </div>
        <div className="right">
          <h3>{img.title}</h3>
          <p>{img.description}</p>
        </div>
      </div>
      <div className="navigation">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <ArrowBackIosIcon />
        </button>

        <button
          disabled={page === 0}
          onClick={() => setPage(page + 1)}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default App;
