'use client';

import { useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import styles from './ModalGestures.module.css';
import CustomSheetHeader from './CustomSheetHeader';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  // title?: string;
  className?: string;
  title?: string | React.ReactNode;
  initialSnap?: number;
  customStyle?: any
}

const ModalGestures = ({
  isOpen,
  title,
  onClose,
  children,
  className,
  initialSnap,
  customStyle
}: ModalProps) => {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.msModalGestures}>
        <Sheet
        
          // detent="content-height"
          initialSnap={initialSnap}
          ref={ref}
          // onSnap={snapIndex  => alert(snapIndex)  }
          // onOpenEnd={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest11")}
          // onOpenStart={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest22")}
          // onCloseStart={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest44")}
          // onCloseEnd={()=>alert("teeeeeeeeeeeeeeeeeeeeeeeest55")}
          // snapPoints={[0,200,400,600,800,2000,2500,3000]}
          // snapPoints={[1200, 1000, 800, 700, 600, 500, 400, 300, 200, 0]}
          // snapPoints={[600, 400, 100, 0]}
          isOpen={isOpen}
          onClose={onClose}
          className={`${className}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // transform:" translate(-50%, 0%)",
            left: '49%',
            width: '100%',
            // direction:"ltr"
            // marginLeft:"1rem"
            // maxHeight:"",
            // overflow:"scroll"
            //  width:"99%"
            //  right: "50%"
          }}
        >
          <Sheet.Container
            className={`${styles.msMG_continer} max-w-[576px] p-6`}
            style={customStyle}
          >
            <Sheet.Header className="-mt-6 text-[#059A56]"></Sheet.Header>
            <Sheet.Content>
              <CustomSheetHeader title={title} onClose={onClose} />
              {children}
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </div>
    </>
  );
};

export default ModalGestures;
