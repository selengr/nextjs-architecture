import { Box, Paper, Skeleton, Stack } from '@mui/material';

const loading = () => {
  return (
    <Box
      sx={{ marginTop: 10,height:"100vh" }}
      gap={2}
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
    >
   <h1>loading...</h1>
    </Box>
  );
};

export default loading;
