import React from 'react';
import styled from "styled-components";

type BtnPropsType = {
  isActive: boolean
  color: string
  title: string
  callback: () => void
}

export const Btn: React.FC<BtnPropsType> = (props) => {
  return (
    <StyledBtn btnIsActive={ props.isActive } color={ props.color } onClick={ () => props.callback() }>
      { props.title }
    </StyledBtn>
  );
};

const StyledBtn = styled.button<{ btnIsActive: boolean, color: string }>`
  background-color: ${ props => props.btnIsActive ? props.color : 'gray' };
`
