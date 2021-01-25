import React from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { DivStyled } from './upload-styling';

const { Dragger } = Upload;
// Is this the right url?
const url =
  'http://asylum-hrf-team-b.eba-2bq2qkfg.us-east-1.elasticbeanstalk.com/insert';

function UploadFile() {
  // const props = {
  //   name: 'file',
  //   multiple: true,
  //   showDownloadIcon: true,
  //   action: url,
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  const [file, setFile] = React.useState('');

  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Server code here?
  }
  const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };

  function handleSubmit() {
    // Submit all form information here?
  }

  return (
    <DivStyled>
      {/* file validation */}
      {/* <Dragger {...props} accept=".pdf, .csv">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files.{' '}
          <p>Upload .pdf or .csv files only</p>
        </p>
      </Dragger> */}
      <form>
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <ImageThumb image={file} />}
        <label>Judge: </label>
        <input type="text" />
        <br></br>
        <label>Country of Origin: </label>
        <input type="text" />
        <br></br>
        <label>Outcome: </label>
        <input type="text" />
        <br></br>
        <label>Tags: </label>
        <input type="checkbox" />
        <br></br>
        <button>Submit</button>
      </form>
    </DivStyled>
  );
}

export default UploadFile;

// Notes:  Not sure why when the upload button is clicked the url doesn't change when it looks like it is linked in switch.
