import AddIcon from '@mui/icons-material/Add';
import UiButton from '@/components/UI/ui-button';
import { PATH_ACCAMMODATION } from '@/routes/paths';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import Link from 'next/link';
import UiAccommodationBanner from '@/components/UI/ui-banner/UiAccommodationBanner';

const Page = () => {
  return (
    <Box height={'100%'}>
      <UiAccommodationBanner
        className="w-full min-h-fit"
        title="اقامتگاه های من"
        alt="header"
        height={500}
        width={500}
      />

      <Box className="w-full flex justify-center p-6">
        <Stack className="w-full bg-ms-white rounded-2xl p-4">
          <Box className="w-full flex flex-row-reverse my-4">
            <Link
              href={
                PATH_ACCAMMODATION.accommodation + PATH_ACCAMMODATION.register
              }
            >
              <UiButton
                sx={{
                  padding: '4px 10px',
                  border: '1px solid #02A95C',
                  borderRadius: '15px',
                  backgroundColor: '#F3FCF8',
                  color: '#03693A',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                className="bg-ms-btn-green-13 w-full py-4 flex-row-reverse border-ms-border-green-33 px-6 p-4 border-solid border-2 font-ms-bold text-ms-lg h-[40px] text-ms-medium-green rounded-xl"
                text=""
              >
                <AddIcon />
                ثبت اقامتگاه جدید
              </UiButton>
            </Link>
          </Box>

          {[1, 2, 1, 2, 1, 2].map((item, key) => (
            <Card
              key={key}
              sx={{
                width: '100%',
                height: '115px',
                boxShadow: 'none',
                borderRadius: '15px',
                backgroundColor: '#F8F8F8'
              }}
              className="rounded-2xl flex flex-row shadow-none border-none my-2 bg-ms-back-card-gray-12"
            >
              <CardActionArea
                sx={{ display: 'flex', justifyContent: 'start' }}
                className="flex flex-row"
              >
                <CardMedia
                  sx={{ width: '30%', height: '100%' }}
                  component="img"
                  className="flex"
                  image={`/static/images/accommodation/card${item}.svg`}
                  alt="green iguana"
                />
                <CardContent className="flex flex-col w-full">
                  <Typography
                    fontWeight={'bold'}
                    gutterBottom
                    variant="body1"
                    component="div"
                    className="flex flex-row m-0 align-middle items-center text-ms-thick-green pb-2 font-ms-bold"
                  >
                    نام اقامتگاه:{' '}
                    <Typography
                      sx={{ marginBottom: '0px' }}
                      gutterBottom
                      variant="body2"
                      component="div"
                      className="m-0 pr-1 text-ms-thick-green"
                    >
                      هتل ماجرا هرمز
                    </Typography>
                  </Typography>
                  <Box className="flex flex-row align-middle items-center justify-between pt-4">
                    <Typography
                      variant="caption"
                      color="#217B52"
                      className="font-ms-bold text-ms-lg"
                    >
                      مشاهده{' '}
                      <ArrowBackIosIcon
                        sx={{ width: '10px', height: '10px' }}
                      />
                    </Typography>
                    <Stack
                      sx={{ flexDirection: 'row' }}
                      className="w-[30%] flex items-start justify-end"
                    >
                      <CardMedia
                        component="img"
                        className="max-w-[40px] ml-2"
                        image={`/static/images/accommodation/edit.svg`}
                        alt="green iguana"
                      />
                      <CardMedia
                        component="img"
                        className="max-w-[40px]"
                        image={`/static/images/accommodation/delete.svg`}
                        alt="green iguana"
                      />
                    </Stack>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
