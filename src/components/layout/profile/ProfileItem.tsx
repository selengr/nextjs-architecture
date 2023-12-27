import Link from 'next/link';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';


interface IProps {
  Href:string
  text: string;
  iconName: string;
}

const ProfileItem = ({ iconName,text,Href }: IProps) => {

  return (
    <Box className="flex flex-row bg-ms-white rounded-2xl h-16 m-6 cursor-pointer">
      <Link href={Href} className="flex justify-start items-center w-full">
        <Stack direction="row" spacing={2} className="px-6 py-2">
          <Image
            src={`/static/images/profile/${iconName}.svg`}
            alt={iconName}
            width={24} //automatically provided
            height={24}
          />
          <Typography
            className="px-3 flex text-center items-center font-ms-bold"
            variant="body1"
            component="span"
          >
            {text}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default ProfileItem;
