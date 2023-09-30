"use client"

import { BOOKING } from '@/routes/paths';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {

  
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const router = useRouter()
//  throw new ErrorText("متن ارور در اینجا نمایش داده می شود")

  // return (
  //   <Box
  //     sx={{ marginTop: 10 }}
  //     gap={2}
  //     display="grid"
  //     gridTemplateColumns="repeat(4, 1fr)"
  //   >
  //     {[...Array(12)].map((_, index) => (
  //       <Paper variant="outlined" key={index} sx={{ p: 1 }}>
  //         <Stack spacing={2}>
  //           <Box>
  //             <Image
  //               src="/assets/icons/components/ic_extra_image.png"
  //               width={500}
  //               height={200}
  //               alt="test"
  //             />
  //           </Box>

  //           {index === 0 && (
  //             <Typography
  //               variant="caption"
  //               sx={{ paddingTop: 2, borderRadius: 1.5 }}
  //             >
  //               test
  //             </Typography>
  //           )}

  //           {index !== 2 && (
  //             <Typography
  //               variant="caption"
  //               sx={{ paddingTop: 2, borderRadius: 1.5 }}
  //             >
  //               hello world
  //             </Typography>
  //           )}
  //         </Stack>
  //       </Paper>
  //     ))}
  //   </Box>
  // );
  return <h1 className='font-ms-iranSansMobile font-ms-regular text-ms-text-xl-44 h-screen bg-ms-btn-green-13
 text-gray-dark '>test number oneeeeeee
 <hr /> 
   <button onClick={()=> router.push(BOOKING.flights)}>click here</button>
</h1>
}

