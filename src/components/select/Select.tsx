import React, { useState } from 'react';

type ItemType = {
  value: string
  title: string
}

type SelectPropsType = {
  value: string
  onSelect: (value: string) => void
  items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = ({ value, onSelect, items }) => {
  const [ isActive, setIsActive ] = useState( false );
  const selectedItem = items.find( i => i.value === value);
  const onTitleSelect = (value: string) => {
    onSelect(value);
    setIsActive(false)
  }

  return (
    <div>
      <div onClick={ () => setIsActive( !isActive ) }>{ selectedItem && selectedItem.title }</div>
      { isActive &&
        <ul>
          { items.map( i => <li onClick={() => onTitleSelect(i.value)} key={ i.value }>{ i.title }</li> ) }
        </ul>
      }
    </div>
  );
};
