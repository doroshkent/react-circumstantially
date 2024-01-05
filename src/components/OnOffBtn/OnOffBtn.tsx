import React, { useState } from 'react';
import styled from "styled-components";
import { Btn } from "components/OnOffBtn/Btn";

export const OnOffBtn: React.FC = () => {
  const [ btnIsActive, setBtnIsActive ] = useState<boolean>( false );
  const [ bulbColor, setBulbColor ] = useState<string>( "red" )

  const btnClickHandler = (isOn: boolean) => {
    setBtnIsActive( !btnIsActive );
    isOn ? setBulbColor( "green" ) : setBulbColor( "red" );

  }

  return (
    <div>
      <Btn isActive={ btnIsActive } color={ "green" } title={ "Turn ON" } callback={ () => btnClickHandler( true ) } />
      <Btn isActive={ !btnIsActive } color={ "red" } title={ "Turn off" } callback={ () => btnClickHandler( false ) } />
      <Bulb color={ bulbColor } />
    </div>
  );
};

const Bulb = styled.div<{ color: string }>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${ props => props.color };
`
