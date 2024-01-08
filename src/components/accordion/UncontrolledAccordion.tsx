import React, { useState } from "react";

interface AccordionPropsType {
  title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(true);

  return <>
    <AccordionTitle title={ props.title } onClick={() => setCollapsed(!collapsed)} />
    { !collapsed && <AccordionBody /> }
  </>
}

interface AccordionTitlePropsType {
  title: string,
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2 style={{cursor: "pointer"}} onClick={props.onClick}>{ props.title }</h2>
}

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>

}
