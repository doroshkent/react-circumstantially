import { OnOffBtn } from "components/onOffBtn/OnOffBtn"
import { useState } from "react";
import { action} from "@storybook/addon-actions"

export default {
  title: "On_Off Buttons group",
  component: OnOffBtn
}

const callback = action('change event is fired');

export const OnBtnIsActive = () => {
  return <OnOffBtn btnOnIsActive={true} setBtnOnIsActive={callback} />
}

export const OffBtnIsActive  = () => {
  return <OnOffBtn btnOnIsActive={false} setBtnOnIsActive={callback} />
}

export const OnOffDemo = () => {
  const [isOn, setIsOn] = useState(true)
  return <OnOffBtn btnOnIsActive={isOn} setBtnOnIsActive={setIsOn} />
}
