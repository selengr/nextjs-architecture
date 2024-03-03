"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import './HorizontalLinearStepper.css';
import Stepper from '@mui/material/Stepper';
import { usePathname } from 'next/navigation';
import StepLabel from '@mui/material/StepLabel';

export const dynamic = 'force-dynamic';

const steps_single: string[] = [
  'نوع اقامتگاه',
  'مشخصات',
  'ثبت',
  'آدرس',
  'توصیف موقعیت',
  'بارگذاری مدارک',
  'قوانین و مقررات',
  'قوانین لغو',
  'قیمت گذاری',
  'تخفیف گذاری',
  'قوانین ام سفر'
];
const steps_multi: string[] = [
  'مشخصات اقامتگاه',
  'ثبت اتاق',
  'اتاق ها',
  'آدرس',
  'توصیف موقعیت',
  'بارگذاری مدارک',
  'قوانین و مقررات',
  'قوانین لغو',
  'قیمت گذاری',
  'تخفیف گذاری',
  'قوانین ام سفر'
];

export default function HorizontalLinearStepper({
  activeStep,
  data
}: {
  activeStep: number;
  data? : string[]
}) {
  const path = usePathname();
  console.log('path :>> ', path);

  let process: string[] = [];
  if (path?.includes('/multi')) process = steps_multi;
  if (path?.includes('/single')) process = steps_single;
  if (data) process = data

  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  //   const handleSkip = () => {
  //     if (!isStepOptional(activeStep)) {
  //       // You probably want to guard against something like this,
  //       // it should never occur unless someone's actively trying to break something.
  //       throw new Error("You can't skip a step that isn't optional.");
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };

  return (
    <Box
      sx={{ width: '100%', direction: 'rtl' }}
      className="UIHorizontalLinearStepper"
    >
      <Stepper
        activeStep={activeStep - 1}
        alternativeLabel
        className="overflow-x-scroll"
      >
        {process.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          //   if (isStepOptional(index)) {
          //     labelProps.optional = (
          //       <Typography variant="caption">Optional</Typography>
          //     );
          //   }
          //   if (isStepSkipped(index)) {
          //     stepProps.completed = false;
          //   }
          return (
            <Step key={label} {...stepProps} className="min-w-[25%] ">
              <StepLabel
                className="flex justify-end ltr align-top"
                {...labelProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="warning"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="warning" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )} */}
    </Box>
  );
}
