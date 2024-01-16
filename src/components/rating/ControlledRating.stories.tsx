import { ControlledRating } from "components/rating/ControlledRating";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "Rating",
  component: ControlledRating
}

const callback = action("star is clicked")

export const DefaultFiveStarRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={0} setRating={callback} />
}

export const DefaultTenStarRating = () => {
  return <ControlledRating totalStarsCount={10} selectedStars={0} setRating={callback} />
}

export const OneStarSelectedRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={1} setRating={callback} />
}
export const TwoStarsSelectedRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={2} setRating={callback} />
}
export const ThreeStarsSelectedRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={3} setRating={callback} />
}
export const FourStarsSelectedRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={4} setRating={callback} />
}
export const FiveStarsSelectedRating = () => {
  return <ControlledRating totalStarsCount={5} selectedStars={5} setRating={callback} />
}

export const RatingDemo = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  return <ControlledRating totalStarsCount={5} selectedStars={selectedStars} setRating={setSelectedStars} />
}
