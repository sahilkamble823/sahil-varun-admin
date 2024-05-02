import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const CustomHeader = ({ headerText }) => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Header Text */}
            <Row>
              <Col>
                <h1 className="text-white d-flex flex justify-content-center">{headerText}</h1>
              </Col>
            </Row>
            {/* Card stats */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomHeader;
