
import Image from 'next/image';
import UiButton from '@/components/UI/ui-button';
import { Banner } from '@/components/UI/ui-banner';
import { Box, Stack, Typography } from '@mui/material';

export default async function Home() {
  // const [isOpenPassengers, setOpenPassengers] = useState<boolean>(false);

  // const ChoosePassengers = () => setOpenPassengers(true);
  return (
    <Box className="flex flex-col h-screen w-full overflow-hidden">
      <Banner
        bannerPic="/static/images/profile/passengers-list-banner.svg"
        alt="header"
        width={0}
        height={500}
        className="w-full h-full"
      />

      <Stack
        direction="column"
        spacing={2}
        className="mx-6 mt-10 rounded-2xl bg-ms-white p-6"
      >
        <Typography
          className="mx-3 flex text-ms-thick-green text-center items-start font-ms-bold"
          variant="body1"
          component="span"
        >
          لیست مسافران
        </Typography>
        <Stack spacing={4} className="flex items-center">
          <Image
            src={`/static/illustrations/characters/character_12.png`}
            alt={'No-passengers-found'}
            width={199} //automatically provided
            height={154}
          />
          <Typography
            className="px-3 pb-6 flex text-ms-thick-green text-center items-start font-ms-bold"
            variant="body1"
            component="h6"
          >
            هیچ مسافری یافت نشد.
          </Typography>
        </Stack>

        <div className="m-4 ">
          <UiButton
            // onClick={ChoosePassengers}
            // onClick={() => toast.error('please fill all input')}
            className="bg-transparent border-ms-border-green-33 p-2 border-solid border-2 text-ms-lg h-[45px] text-ms-white rounded-xl w-full"
            text=""
          >
            <div className="flex flex-row">
              <span className="text-ms-green text-ms-sm p-2 py-4">
                {' '}
                اضافه کردن مسافر جدید{' '}
              </span>
              <Image
                className="ml-1"
                src={'/static/images/flights/plus-green.svg'}
                alt={'flight'}
                width={10} //automatically provided
                height={10} //automatically provide
              />
            </div>
          </UiButton>
        </div>
      </Stack>
    </Box>
  );
}
