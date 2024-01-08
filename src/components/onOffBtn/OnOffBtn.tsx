import React, { useState } from 'react';
import styled from "styled-components";
import { Btn } from "components/onOffBtn/Btn";

export const OnOffBtn: React.FC = () => {
  const [ btnIsActive, setBtnIsActive ] = useState<boolean>( false );
  const [ bulbColor, setBulbColor ] = useState<string>( "red" )

  const btnClickHandler = (isOn: boolean) => {
    setBtnIsActive( isOn );
    isOn ? setBulbColor( "green" ) : setBulbColor( "red" );

  }

  return (
    <OnOffBtnWrapper>
      <Btn isActive={ btnIsActive } color={ "green" } title={ "Turn ON" } callback={ () => btnClickHandler( true ) } />
      <Btn isActive={ !btnIsActive } color={ "red" } title={ "Turn off" } callback={ () => btnClickHandler( false ) } />
      <Bulb color={ bulbColor } />
    </OnOffBtnWrapper>
  );
};

const OnOffBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Bulb = styled.div<{ color: string }>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${ props => props.color };
`
