import React from 'react';
import CustomizedAccordion  from './CustomizedAccordion';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/CustomizedAccordion',
  component: CustomizedAccordion,
};

export const Primary = () => {
  const facilitiesOptions = [
    {
      name: 'Amenities',
      id: 1,
      options: [
        { name: 'Wi-Fi', id: 1, checked: true },
        { name: 'Air Conditioning', id: 2, checked: false },
      ],
    },
    {
      name: 'Services',
      id: 2,
      options: [
        { name: 'Breakfast', id: 3, checked: false },
        { name: 'Airport Shuttle', id: 4, checked: true },
      ],
    },
  ];

  const { control, handleSubmit } = useForm();
//   const selectedFacilities = control.getValues('facilitiesOptions');

//   const setSelectedFacilities = (updatedFacilities) => {
//     control.setValue('facilitiesOptions', updatedFacilities);
//   };

//   const onSubmit = (data) => {
//     console.log('Selected facilities:', data.facilitiesOptions);
//   };

  return (
    <></>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <CustomizedAccordion
    //     facilitiesOptions={facilitiesOptions}
    //     control={control}
    //     selectedFacilities={selectedFacilities}
    //     setSelectedFacilities={setSelectedFacilities}
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  )
};
