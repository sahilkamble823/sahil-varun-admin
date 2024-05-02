/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
import CustomHeader from "components/Headers/CustomHeader";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import * as XLSX from "xlsx"; 

const FeedbackList = () => {
  // excel export function
  const exportToExcel = () => {
    const fileName = "feedback_list.xlsx";
    const table = document.getElementById("feedback-table");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Feedback List" });
    XLSX.writeFile(wb, fileName);
  };

  const [copiedText, setCopiedText] = useState();
  return (
    <>
    {/* <Header /> */}
    <CustomHeader headerText = "Manage Feedback"/>
    {/* Page content */}
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <div className="d-flex flex justify-content-between">
              <h3 className="mb-0">Feedback List</h3>
              <Button onClick={exportToExcel} style={{backgroundColor:"#66BB6A",color:'#ffffff',}}>Export List</Button>
              </div>
              
              
            </CardHeader>
            <Table id="feedback-table"  className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                  {/* <th scope="col">Operations</th> */}
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Full Name
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td>Email</td>
                  <td>
                    <p style={{fontSize:"12px"}}>Mobile</p>
                  </td>
                  <td>
                    <div className="avatar-group">
                    <p style={{fontSize:"12px",color:'GrayText'}}>Subject</p>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="mr-2">This is Message</span>
                      <div>
                        
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-ellipsis-v" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Edit
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Delete
                        </DropdownItem>
                       
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>

    </Container>
  </>
  );
};

export default FeedbackList;
