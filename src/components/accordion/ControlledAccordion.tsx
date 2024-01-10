import React from "react";

interface AccordionPropsType {
  title: string
  collapsed: boolean
  onChange: () => void
}

export function ControlledAccordion(props: AccordionPropsType) {
  return <>
    <AccordionTitle title={ props.title } onClick={props.onChange} />
    { !props.collapsed && <AccordionBody /> }
  </>
}

interface AccordionTitlePropsType {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2 onClick={props.onClick}>{ props.title }</h2>
}

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>

}
