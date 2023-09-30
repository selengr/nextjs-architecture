'use client';

import Sheet, { SheetRef } from 'react-modal-sheet';
import { useState, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  // title?: string;
  className?: string;
}

const ModalGestures = ({
  isOpen,
  onClose,
  children,
  className
}: ModalProps) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className='w-full '>

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
         style={{maxWidth:"576px",display:"flex",alignItems:"center",
         justifyContent:"center",
         transform:" translate(-54%, 0%)",
         left:"50%",
        //  width:"99%"
        //  right: "50%"
        }}>
          <Sheet.Container>
            <Sheet.Header />
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
