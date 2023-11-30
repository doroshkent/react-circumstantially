import React from "react";

interface AccordionPropsType {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  return <>
    <AccordionTitle title={props.title}/>
    <AccordionBody collapsed={props.collapsed}/>
  </>
}

interface AccordionTitlePropsType {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2>{props.title}</h2>
}

interface AccordionBodyPropsType {
  collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
  if (props.collapsed) {
    return <></>
  }
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>

}
