import { Select } from "components/select/Select";
import { useState } from "react";

export default {
  title: "Select",
  component: Select
}

const items = [
  {value: '1', title: "JS"},
  {value: '2', title: "HTML"},
  {value: '3', title: "React"},
  {value: '4', title: "CSS"},
]

export const TestSelect = () => {
  const [value, setValue] = useState('2');
  return <Select value={value} onSelect={setValue} items={items} />
}
