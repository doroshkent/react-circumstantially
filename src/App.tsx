import React from 'react';
import './App.css';
import { ControlledRating } from "components/rating/ControlledRating";
import { ControlledAccordion } from "components/accordion/ControlledAccordion";
import { OnOffBtn } from "components/onOffBtn/OnOffBtn";
import { UncontrolledAccordion } from "components/accordion/UncontrolledAccordion";
import { UncontrolledRating } from "components/rating/UncontrolledRating";

function App() {
  const totalStarsCount = 5;
  return (
    <>
      <AppTitle title={ "This is App component" } />
      <AppTitle title={ "Another title" } />
      <ControlledRating totalStarsCount={ totalStarsCount } selectedStars={ 3.5 } />
      <ControlledRating totalStarsCount={ totalStarsCount } selectedStars={ 2 } />
      <ControlledAccordion title={ "ControlledAccordion title" } collapsed />
      <ControlledAccordion title={ "Another ControlledAccordion title" } collapsed={ false } />
      <OnOffBtn />
      <UncontrolledAccordion title={ "UncontrolledAccordion title" } />
      <UncontrolledRating totalStarsCount={ 10 } />
    </>
  );
}

interface AppTitlePropsType {
  title: string
}

function AppTitle({ title }: AppTitlePropsType) {
  return <h1>{ title }</h1>
}

export default App;
