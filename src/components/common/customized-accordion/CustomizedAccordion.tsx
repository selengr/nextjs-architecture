import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography
} from '@mui/material';
import './customizedAccordion.css';
import { Controller } from 'react-hook-form';

type IProps = {
  facilitiesOptions:
    | [
        {
          name: string;
          id: number;
          options: [{ name: string; id: number; checked: boolean }];
        }
      ]
    | any;
  register?: any;
  control: any;
  setSelectedFacilities: any;
  selectedFacilities: any;
};

export default function CustomizedAccordion({
  facilitiesOptions,
  register,
  setSelectedFacilities,
  selectedFacilities,
  control
}: IProps) {
  const handleAddPassenger = (
    index: number,
    optionIndex: number,
    isChecked: boolean
  ) => {
    const updatedFacilities = [...selectedFacilities];
    updatedFacilities[index].options[optionIndex].checked = isChecked;
    setSelectedFacilities(updatedFacilities);
  };

  return (
    <Box className={'customizedAccordion'} sx={{ direction: 'rtl' }}>
      {facilitiesOptions.map((item: any, index: any) => (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                fontWeight={'bold'}
                variant="body1"
                component={'label'}
                className="text-ms-thick-green"
              >
                {item?.name}
              </Typography>
            </AccordionSummary>
            {/* {item.options.map((value,key) => (
            <>
              <Stack
                direction="row"
                spacing={2}
                className=" flex items-center px-4"
              >
                <Checkbox
                  {...register(`${item.name}`)}
                  sx={{ color: '#F5BB00' }}
                  color="warning"
                  className="border-[1px]"
                />

                <Typography
                  variant="body1"
                  component={'label'}
                  className="text-ms-light-black break-all"
                >
                  {value?.name}
                </Typography>
              </Stack>
            </>
          ))} */}
            <FormGroup>
              {item.options.map((value:any, key:any) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Controller
                      name={`facilitiesOptions[${index}].options[${key}].${value.id}`}
                      control={control}
                      defaultValue={value.checked}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          sx={{ color: '#F5BB00' }}
                          color="warning"
                          className="border-[1px]"
                          onChange={(event) =>
                            handleAddPassenger(index, key, event.target.checked)
                          }
                        />
                      )}
                    />
                  }
                  label={value?.name}
                />
              ))}
            </FormGroup>
          </Accordion>
        </>
      ))}
    </Box>
  );
}
