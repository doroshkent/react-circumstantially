import React, { useState } from 'react';
import './App.css';
import { ControlledRating } from "components/rating/ControlledRating";
import { ControlledAccordion } from "components/accordion/ControlledAccordion";
import { OnOffBtn } from "components/onOffBtn/OnOffBtn";

function App() {

  const totalStarsCount = 5;
  const [ ratingValue, setRatingValue ] = useState( 0 );

  const [ accordionIsCollapsed, setAccordionCollapsed ] = useState( true );

  const [ btnOnIsActive, setBtnOnIsActive ] = useState<boolean>( false );

  return (
    <>
      <AppTitle title={ "This is App component" } />
      <AppTitle title={ "Another title" } />
      <ControlledRating totalStarsCount={ totalStarsCount } selectedStars={ ratingValue }
                        setRating={ setRatingValue } />
      <ControlledAccordion title={ "ControlledAccordion title" } collapsed={ accordionIsCollapsed }
                           onChange={ () => setAccordionCollapsed(!accordionIsCollapsed) } />
      <OnOffBtn btnOnIsActive={ btnOnIsActive } setBtnOnIsActive={ setBtnOnIsActive } />
      {/*<UncontrolledAccordion title={ "UncontrolledAccordion title" } />*/ }
      {/*<UncontrolledRating totalStarsCount={ 10 } />*/ }
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
