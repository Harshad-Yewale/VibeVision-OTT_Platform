import React, { useRef, useState, useEffect } from "react";
import "../List/List.scss";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import ListItem from "../ListItem/ListItem";
import { Paper } from "@mui/material";

function List({ list }) {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [maxSlides, setMaxSlides] = useState(0);

  const ITEM_WIDTH = 182; // Each item's width in px
  const ITEM_MARGIN = 10; // Left margin in px
  const TOTAL_ITEM_WIDTH = ITEM_WIDTH + ITEM_MARGIN; // Total space each item takes
  const TOTAL_ITEMS = 10; // Total items in the list

  useEffect(() => {
    const updateMaxSlides = () => {
      const containerWidth = window.innerWidth;
      const visibleItems = Math.floor(containerWidth / TOTAL_ITEM_WIDTH);
      setMaxSlides(Math.max(0, TOTAL_ITEMS - visibleItems));
    };

    updateMaxSlides();
    window.addEventListener("resize", updateMaxSlides);

    return () => {
      window.removeEventListener("resize", updateMaxSlides);
    };
  }, []);

  const moveSlider = (direction) => {
    if (!listRef.current) return;

    setIsMoved(true);
    let currentTransform = listRef.current.style.transform || "translateX(0px)";
    let currentX = parseInt(currentTransform.replace("translateX(", "").replace("px)", "")) || 0;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${currentX + TOTAL_ITEM_WIDTH}px)`;
    }

    if (direction === "right" && slideNumber < maxSlides) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${currentX - TOTAL_ITEM_WIDTH}px)`;
    }
  };

  return (
    <div className="List">
          <span className="category-title">{list.title}</span>
          <div className="wrapper">
            <ArrowBackIosNewOutlined
              className="Arrows left"
              onClick={() => moveSlider("left")}
              style={{ display: !isMoved ? "none" : "block" }}
            />
            <Paper elevation={2} className="container" ref={listRef}>
              {list.content.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </Paper>
            <ArrowForwardIosOutlined
              className="Arrows right"
              onClick={() => moveSlider("right")}
            />
          </div>
    </div>
  );
}

export default List;
