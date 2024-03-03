import React from 'react';
import FileUploader from './FileUploader';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/FileUploader',
  component: FileUploader,
};

export const Primary = () => (
  <FileUploader
    title="Upload Images"
    caption="Drag and drop your images here or click to browse"
    handleUpdateFiles={(files) => console.log('Uploaded files:', files)}
  />
);

export const WithMaxFiles = () => (
  <FileUploader
    title="Upload Images"
    caption="Drag and drop your images here or click to browse (Max 5 files)"
    handleUpdateFiles={(files) => console.log('Uploaded files:', files)}
    maxFiles={5}
  />
);

export const WithInitialFiles = () => (
  <FileUploader
    title="Upload Images"
    caption="Drag and drop your images here or click to browse"
    handleUpdateFiles={(files) => console.log('Uploaded files:', files)}
    files={[// Mock initial file objects
      { name: 'image1.jpg', size: 123456 },
      { name: 'image2.png', size: 789012 },
    ]}
  />
);

// **Note:** Importing FilePond here is for Storybook type safety. You might not need it in your actual implementation
// if you already have it imported globally.
