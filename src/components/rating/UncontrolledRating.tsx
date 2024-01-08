import React, { useState } from "react";
import {FaStar} from "react-icons/fa";

interface RatingProps {
  totalStarsCount: number
}

export function UncontrolledRating({totalStarsCount}: RatingProps) {
  const [selectedStars, setSelectedStars] = useState(0);

  const rate = (id: number) => setSelectedStars( id + 1);

  const createArray = (length: number) => [...Array(length)]
  return <div>
    {createArray(totalStarsCount).map((_, index) => {
      return <Star key={`key-${index}`} selected={selectedStars > index} id={index} onClick={rate}/>
    })}
  </div>
}

interface StarProps {
  selected: boolean,
  onClick: (id: number) => void
  id: number
}

function Star({selected, onClick, id}: StarProps) {
  return <FaStar color={selected ? "red": "gray"} onClick={() => onClick(id)}/>
}
