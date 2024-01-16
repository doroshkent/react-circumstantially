import { ControlledAccordion } from "components/accordion/ControlledAccordion";
import { useState } from "react";

export default {
  title: "Accordion",
  component: ControlledAccordion
}

export const CollapsedAccordion = () => {
  return <ControlledAccordion title={ "Collapsed" }
                              collapsed={ true }
                              onChange={ () => {
                              } } />
}

export const ExpandedAccordion = () => {
  return <ControlledAccordion title={ "Expanded" }
                              collapsed={ false }
                              onChange={ () => {
                              } } />
}

export const AccordionDemo = () => {
  const [ isCollapsed, setCollapsed ] = useState( false )
  return <ControlledAccordion title={ "Demo" }
                              collapsed={ isCollapsed }
                              onChange={ () => {
                                setCollapsed( !isCollapsed )
                              } } />
}
