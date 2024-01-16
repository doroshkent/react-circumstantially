import { Btn } from "components/onOffBtn/Btn";
import { action } from "@storybook/addon-actions";

export default {
  title: "On_Off Buttons group/OnOff Button",
  component: Btn,
}

const callback = action('btn is clicked');

export const InactiveOnButton = () => {
  return <Btn isActive={false} color={"green"} title={"On"} callback={callback} />
}

export const ActiveOnButton = () => {
  return <Btn isActive={true} color={"green"} title={"On"} callback={callback} />
}

export const InactiveOffButton = () => {
  return <Btn isActive={false} color={"red"} title={"Off"} callback={callback} />
}

export const ActiveOffButton = () => {
  return <Btn isActive={true} color={"red"} title={"Off"} callback={callback} />
}
