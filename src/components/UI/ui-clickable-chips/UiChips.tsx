'use client';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IchipListProps } from './';
import './uiChips.css';
import ModalGestures from '@/components/common/modal/ModalGestures ';

export default function UiChips({ chipList }: IchipListProps) {
  const [selected, setSelected] = React.useState<number>(0);

  const handleClick = (selec: number) => {
    setSelected(selec);
  };

  return (
    <>
      <Stack className="uiChips overflow-auto p-2" direction="row" spacing={1}>
        {chipList.map((name, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <Chip
              label={name}
              className={`${selected == index ? 'uiChips-selected' : ''} `}
              variant="outlined"
              onClick={() => handleClick(index)}
            />
          );
        })}
      </Stack>
      {/* {selected == 0 && <>
        <ModalGestures
            title="مسافران"
            isOpen={isOpenPassengers}
            onClose={onClosePassengers}
            className="overflow-scroll"
            initialSnap={1}
          >
            wafefefesf
          </ModalGestures></>} */}
    </>
  );
}
