

import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {

  CardBody,

  Row,

  UncontrolledTooltip,

  Card,
  CardHeader,

  FormGroup,
  Form,
  Input,
  Container,
  Button,

  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import CustomHeader from 'components/Headers/CustomHeader';
const AddArchive = () => {
  const [copiedText, setCopiedText] = useState();
  
  const [image, setImage] = useState(null);
  const config = {
    readonly: false 
  };
  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

         
          const maxWidth = 400;
          const maxHeight = 400;

          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
          }

         
          canvas.width = width;
          canvas.height = height;

        
          ctx.drawImage(img, 0, 0, width, height);

          const mediumSizeDataURL = canvas.toDataURL('image/jpeg');

        
          setImage(mediumSizeDataURL);
        };

        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  };
  const [content, setContent] = useState('');
  const editorRef = useRef(null);
  return (
    <>
      <CustomHeader headerText = "Add Archive"/> 
      {/* {/* Page content } */}

      <Container className="mt--7" fluid>
      
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Add Archives</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-1">

                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Title
                          </label>
                          <Input
                            className="form-control-alternative"

                            id="input-username"
                            placeholder=""
                            type="text"
                            style={{ border: '1px solid #ced4da' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-text"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder=""
                            type="email"
                            style={{ border: '1px solid #ced4da' }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-image">
                            Select Image
                          </label>
                          <div className="custom-file">
                            <input
                              className="custom-file-input"
                              id="input-image"
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="input-image">
                              Choose file
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    {image && (
                      <div>
                        <h2>Uploaded Image Preview:</h2>
                        <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
                      </div>
                    )}
                  </div>


                  <hr className="my-4" />
                 

                  
                  <h6 className="heading-small text-muted mb-1">Description</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <JoditEditor
                        ref={editorRef}
                        value={content}

                        config={config}
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container >
    </>
  );
};

export default AddArchive;
