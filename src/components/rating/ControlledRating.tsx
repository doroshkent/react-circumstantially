import React from "react";
import {FaStar} from "react-icons/fa";

interface RatingProps {
  totalStarsCount: number
  selectedStars: number
}

export function ControlledRating({totalStarsCount, selectedStars}: RatingProps) {
  const createArray = (length: number) => [...Array(length)]
  return <div>
    {createArray(totalStarsCount).map((_, index) => {
      return <Star key={`key-${index}`} selected={selectedStars > index}/>
    })}
  </div>
}

interface StarProps {
  selected: boolean
}

function Star({selected}: StarProps) {
  return <FaStar color={selected ? "red": "gray"}/>
}
