import Image from 'next/image';
import CardFlightDetail from '../flight/CardFlightDetail';
import MyCardFlightStatus from './MyCardFlightStatus';

const MyTrip = ({ status }: { status: string }) => {
  return (
    <>
      <div className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6">
        <MyCardFlightStatus />
      </div>
      {status === 'finalized' && (
        <div className="py-4 px-6 bg-ms-white h-[210px] rounded-[15px] w-full flex flex-col my-6">
          <MyCardFlightStatus />
        </div>
      )}
    </>
  );
};

export default MyTrip;
