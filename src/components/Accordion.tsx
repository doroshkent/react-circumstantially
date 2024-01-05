import React from "react";

interface AccordionPropsType {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  return <>
    <AccordionTitle title={ props.title } />
    { !props.collapsed && <AccordionBody /> }
  </>
}

interface AccordionTitlePropsType {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2>{ props.title }</h2>
}

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>

}
