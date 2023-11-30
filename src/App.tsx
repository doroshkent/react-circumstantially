import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
  const totalStarsCount = 5;
  return (
    <>
      <AppTitle title={"This is App component"} />
      <AppTitle title={"Another title"} />
      <Rating totalStarsCount={totalStarsCount} selectedStars={4}/>
      <Rating totalStarsCount={totalStarsCount} selectedStars={2}/>
      <Accordion title={"Accordion title"} collapsed={true}/>
      <Accordion title={"Another Accordion title"} collapsed={false}/>
    </>
  );
}

interface AppTitlePropsType {
  title: string
}

function AppTitle({title}: AppTitlePropsType){
  return <h1>{title}</h1>
}

export default App;
