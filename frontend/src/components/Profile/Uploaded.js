import React from 'react';
import ImageUploading from 'react-images-uploading';
import {Button ,Row ,Col } from 'react-bootstrap';
import './Uploaded.scss';
 
export default function Uploaded() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
 
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
 
  return (
    <div class="zone">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div id="dropZ">
          <i className="fa fa-cloud-upload" onClick={onImageUpload}
              {...dragProps}/>
          <div>Drag and drop your file here</div>                    
         
        &nbsp;
        {imageList.map((image, index) => (
          <div className="zoned" key={index}>
            <img src={image['data_url']} alt="" width="10" />
            <Row>
              <Col>
              <Button variant="light" onClick={() => onImageUpdate(index)}>Update</Button>
              </Col>
              <Col>
              <Button variant="light"  onClick={() => onImageRemove(index)}>Remove</Button>
              </Col>
              </Row>
            </div>

        
        
        ))}            
         <span>OR</span>
          <div className="selectFile">
          </div>
           
              
              
            
           
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

