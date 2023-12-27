// @mui
import { Stack, Skeleton, StackProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function SkeletonMap({height,className, ...other }: StackProps) {
  return (
    <Stack {...other}>
      {[...Array(5)].map((_, index) => (
        <Skeleton
          className={className}
          key={index}
          variant="rectangular"
          sx={{ width: 1,height, borderRadius: 2 }}
        />
      ))}
    </Stack>
  );
}
