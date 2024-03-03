const Countdown = () => {
  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max ltr">
        {/* <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': 15 }}></span>
          </span>
          days
        </div> */}
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* <span style={{ '--value': 10 }}></span> */}
            <span>00</span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* <span style={{ '--value': 24 }}></span> */}
            <span>00</span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* <span style={{ '--value': 31 }}></span> */}
            <span>00</span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default Countdown;


// import React, { useState, useEffect } from 'react';

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Update the countdown every second (adjust interval as needed)
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Replace with your actual countdown logic here
//       // This placeholder example just decrements seconds and resets upon reaching 0
//       setTimeLeft((prevTimeLeft) => ({
//         ...prevTimeLeft,
//         seconds: prevTimeLeft.seconds > 0 ? prevTimeLeft.seconds - 1 : 0,
//       }));
//       // If all units reach 0, stop the interval
//       if (prevTimeLeft.seconds === 0 && Object.values(prevTimeLeft).every(value => value === 0)) {
//         clearInterval(intervalId);
//       }
//     }, 1000); // Update every 1 second

//     return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
//   }, []);

//   const displayTime = (value:any) => {
//     return value.toString().padStart(2, '0'); // Pad with leading 0s if less than 2 digits
//   };

//   return (
//     <div className="grid grid-flow-col gap-5 text-center auto-cols-max ltr">
//       <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//         <span className="countdown font-mono text-5xl">
//           {displayTime(timeLeft.days)}
//         </span>
//         days
//       </div>
//       <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//         <span className="countdown font-mono text-5xl">
//           {displayTime(timeLeft.hours)}
//         </span>
//         hours
//       </div>
//       <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//         <span className="countdown font-mono text-5xl">
//           {displayTime(timeLeft.minutes)}
//         </span>
//         min
//       </div>
//       <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//         <span className="countdown font-mono text-5xl">
//           {displayTime(timeLeft.seconds)}
//         </span>
//         sec
//       </div>
//     </div>
//   );
// };

// export default Countdown;
