'use client';

import Sheet, { SheetRef } from 'react-modal-sheet';
import { useState, useRef } from 'react';
import styles from "./ModalGestures.module.css"
import CustomSheetHeader from './CustomSheetHeader';
import { title } from 'process';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  // title?: string;
  className?: string;
  title?:string
}

const ModalGestures = ({
  isOpen,
  title,
  onClose,
  children,
  className
}: ModalProps) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.msModalGestures}>

        <Sheet
          // detent="content-height"
        // initialSnap={1}
        ref={ref}
        // onSnap={snapIndex  => alert(snapIndex)  }
        // onOpenEnd={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest11")}
        // onOpenStart={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest22")}
        // onCloseStart={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest44")}
        // onCloseEnd={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest55")}
        snapPoints={[600, 400, 100]} isOpen={isOpen} onClose={onClose}
         className={className} 
         style={{
          display:"flex",alignItems:"center",
          justifyContent:"center",
          transform:" translate(-50%, 0%)",
          left:"50%",
          width:"100%"
        //  width:"99%"
        //  right: "50%"
        }}>
         <Sheet.Container className="max-w-[576px]" style={{left:"auto !important"}}>
            <Sheet.Header>
              <CustomSheetHeader title={title} />
            </Sheet.Header>
            <Sheet.Content >{children}
            <button onClick={() => snapTo(0)}>Snap to index 0</button>
            <button onClick={() => snapTo(1)}>Snap to index 1</button>
            <button onClick={() => snapTo(2)}>Snap to index 2</button>
            <button onClick={() => snapTo(3)}>Snap to index 3</button></Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </div>
    </>
  );
};

export default ModalGestures;
