import { HOST_API_KEY } from '@/config-global';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';

// export const preferedR = "auto"
// dynamicParams = true,
// revalidate = 0,
// fetchCache = "auto",
// runtime = "nodejs",
// preferredRegion = "auto"

interface Post {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}

// ISR
const getPostData = async () => {
  const res = await fetch(HOST_API_KEY + '/posts', {
    next: { revalidate: 2000 }
  });
  return res.json();
};

// SSG
const getCommentsData = async () => {
  const res = await fetch(HOST_API_KEY + '/comments', { cache: 'force-cache' }); //default
  return res.json();
};

// SSR
const getPhotosData = async () => {
  const res = await fetch(HOST_API_KEY + '/photos', { cache: 'no-store' });
  return res.json();
};

export default async function Page() {
  // const [optimisticLikes,addOptimisticLikes] = experimental_useOptimistic(null)
//   const [posts, comments, photos] = await Promise.all([
//     getPostData(),
//     getCommentsData(),
//     getPhotosData()
//   ]);

  return (
    <Box
      sx={{ marginTop: 10 }}
      gap={2}
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
    >
      {/* {photos.map((post: any, index: number) => (
        <Paper variant="outlined" key={index} sx={{ p: 1 }}>
          <Stack spacing={2}>
            <Box>
              <Image
                src={photos[index].url}
                width={500}
                height={200}
                alt="test"
              />
            </Box>

            {index === 0 && (
              <Typography
                variant="h3"
                sx={{ paddingTop: 2, borderRadius: 1.5 }}
              >
                {photos.title}
              </Typography>
            )}

            {index !== 2 && (
              <Typography
                variant="caption"
                sx={{ paddingTop: 2, borderRadius: 1.5 }}
              >
                {posts[index]?.title ??
                  Math.floor(Math.random() * (100 - 1 + 1) + 1)}
              </Typography>
            )}
            <Typography
              variant="caption"
              sx={{ paddingTop: 2, borderRadius: 1.5 }}
            >
              name:{' '}
              {comments[index]?.name ??
                Math.floor(Math.random() * (100 - 1 + 1) + 1)}
            </Typography>
            <Typography
              variant="caption"
              sx={{ paddingTop: 2, borderRadius: 1.5 }}
            >
              email:{' '}
              {comments[index]?.email ??
                Math.floor(Math.random() * (100 - 1 + 1) + 1)}
            </Typography>
          </Stack>
        </Paper>
      ))} */}
    </Box>
  );
}
