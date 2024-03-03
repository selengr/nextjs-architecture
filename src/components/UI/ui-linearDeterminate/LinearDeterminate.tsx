import { IProps } from '.';
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './UIlinearDeterminate.module.css';

// ----------------------------------------------------------------------

export default function LinearDeterminate({ value = 10 }: IProps) {
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box className={styles.UILinearDeterminate} sx={{ width: '100%' }}>
      <LinearProgress
        sx={{}}
        variant="determinate"
        value={value}
        className="text-ms-yellow rotate-180 rounded-xl bg-ms-white mt-[.6px]"
      />
    </Box>
  );
}
