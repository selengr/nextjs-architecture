'use client';

import React, { useState } from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './fileUploader.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface IUploaderProps {
  handleUpdateFiles?: (fileItems: any[]) => void;
  files?: File | [] | any;
  maxFiles?: number;
  title?: string;
  caption?: string;
  // register?:any,
}

function FileUploader({
  handleUpdateFiles,
  files,
  maxFiles = 10,
  title,
  caption
}: IUploaderProps) {
  // const handleUpdateFiles = (fileItems: any) => {
  //   console.log('fileItems :>> ', fileItems);
  //   setFiles(fileItems.map((fileItem: any) => fileItem.file));
  // };
  const handleInit = () => {
    console.log('FilePond instance has initialised');
  };

  const test = `<div class=''>
    <img src='/static/images/accommodation/empty-uploader.svg'/>
   <h1 class='font-ms-bold w-full'>${title}</h1>
   <span class='w-full'>${caption}</span>
   </div>`;

  return (
    <div className="customized-fileUploader ">
      <FilePond
        // ref={(ref) => (pond = ref)}
        // server="/api"
        files={files}
        allowReorder={true}
        allowMultiple={true}
        maxFiles={maxFiles}
        name="files"
        oninit={() => handleInit()}
        onupdatefiles={handleUpdateFiles}
        labelIdle={test}
      ></FilePond>
    </div>
  );
}
export default FileUploader;
