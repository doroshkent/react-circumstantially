import React from "react";
import {FaStar} from "react-icons/fa";

interface RatingProps {
  totalStarsCount: number
  selectedStars: number
  setRating: (ratingValue: number) => void
}

export function ControlledRating({totalStarsCount, selectedStars, setRating}: RatingProps) {
  const createArray = (length: number) => [...Array(length)];
  const rate = (ind: number) => setRating(ind + 1)
  return <div>
    {createArray(totalStarsCount).map((_, index) => {
      return <Star key={`key-${index}`} selected={selectedStars > index} onClick={() => rate(index)}/>
    })}
  </div>
}

interface StarProps {
  selected: boolean
  onClick: () => void
}

function Star({selected, onClick}: StarProps) {
  return <FaStar color={selected ? "red": "gray"} onClick={onClick}/>
}
