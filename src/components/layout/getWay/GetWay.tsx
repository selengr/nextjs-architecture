"use client"

import callApi from '@/services/axios';

const GetWay = () => {



    const handleGetway = async () => {
        let data = [];
        let authority
        var dataToSend = {
          zpTitle: "shop",
          zpClientFirstName: "firstname",
          zpClientLastName: "lastname",
          zpClientEmail: "reza1997karbakhsh@gmail.com",
          zpClientPhone: "09130500629",
          zpClientAmount: "10",
          zpClientDescription: "test process"
        }

        try {
          const response = await callApi().post(`http://localhost:4466/x/handle`, dataToSend);
          return response;
        } catch (error) {
          console.error('error in search', error);
        }
      };

      

  return (
    <div>
      <button
        onClick={handleGetway}
        className="m-4 mx-16 bg-green p-4 px-16 rounded-2xl text-ms-white"
      >
        درگاه پرداخت
      </button>
    </div>
  );
};

export default GetWay;
