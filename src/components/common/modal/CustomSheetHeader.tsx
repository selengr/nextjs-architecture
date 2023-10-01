import Image from "next/image";

interface IModalHeaderProps {
    title : string;

  }

const CustomSheetHeader = ({title}:IModalHeaderProps) => {
    return (
        <div className="w-full flex flex-row justify-between m-8 items-center">
              
                <Image
                className="ml-1"
                src={'/static/images/flights/close_icon.svg'}
                alt={'flight'}
                width={23} //automatically provided
                height={23} //automatically provide
          />
           <span>{title}</span>
        </div>
    );
}

export default CustomSheetHeader;