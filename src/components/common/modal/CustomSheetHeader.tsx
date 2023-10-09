import Image from "next/image";

interface IModalHeaderProps {
    title? : string;
    onClose?: () => void;
  }

const CustomSheetHeader = ({title,onClose}:IModalHeaderProps) => {
    return (<>
                <div className="w-full flex flex-row justify-between py-6 items-center">
                  <span className="text-ms-lg text-ms-thick-green font-ms-medium">{title}</span>
          {onClose&&
                    
                <Image
                onClick={onClose}
                className="ml-1"
                src={'/static/images/flights/close_icon.svg'}
                alt={'flight'}
                width={23} //automatically provided
                height={23} //automatically provide
                />
            }
                </div>
        </>
        );
}

export default CustomSheetHeader;