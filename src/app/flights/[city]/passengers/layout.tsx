import { Box, Container } from '@mui/material';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // <>{children}</>
    <Container className="w-full bg-ms-back-card-gray-12 px-1">
      <Box className="w-full max-w-[576px] bg-ms-white flex flex-col relative">
      {children}
      </Box>
    </Container>
    // <html
    //   lang="en"
    //   className="w-full ms-center bg-ms-back-card-gray-12"
    // >
    //   <body className="max-w-[576px] w-full flex flex-col relative">
    //     {children}
    //   </body>
    // </html>
  );
}
