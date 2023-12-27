"use client"

// Import React
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
export default function FileUploader({register}:any){
    const [files, setFiles] = useState([
        {
          source: 'index.html',
          options: {
            type: 'local',
          },
        },
      ]);
   
      const handleUpdateFiles = (fileItems :any) => {
        console.log('fileItems :>> ', fileItems.file);
        setFiles(fileItems.map((fileItem:any) => fileItem.file));
      };


  const handleInit = () => {
        // console.log('FilePond instance has initialised', pond);
    }

        return (
            <div className="App">
                {/* Pass FilePond properties as attributes */}
                <FilePond
                    // ref={(ref) => (pond = ref)}
                    {...register('uploader')}
                    files={files}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    oninit={() => handleInit()}
                    // onupdatefiles={handleUpdateFiles}
                ></FilePond>
            </div>
        );
   
}
