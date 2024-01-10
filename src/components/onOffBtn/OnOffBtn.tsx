import React, { useState } from 'react';
import styled from "styled-components";
import { Btn } from "components/onOffBtn/Btn";

type OnOffBtnType = {
  btnOnIsActive: boolean
  setBtnOnIsActive: (value: boolean) => void
}

export const OnOffBtn: React.FC<OnOffBtnType> = (props) => {
  const [ bulbColor, setBulbColor ] = useState<string>( "red" );

  const btnClickHandler = (isOn: boolean) => {
    props.setBtnOnIsActive( isOn );
    isOn ? setBulbColor( "green" ) : setBulbColor( "red" );

  }

  return (
    <OnOffBtnWrapper>
      <Btn isActive={ props.btnOnIsActive } color={ "green" } title={ "Turn ON" }
           callback={ () => btnClickHandler( true ) } />
      <Btn isActive={ !props.btnOnIsActive } color={ "red" } title={ "Turn off" }
           callback={ () => btnClickHandler( false ) } />
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
