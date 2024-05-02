
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
    Table,
    Container,
    Row,
} from "reactstrap";
import axios from "axios";
import ApiConfig from "config/ApiConfig";
import CustomHeader from "components/Headers/CustomHeader";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import moment from "moment";

const BlogList = () => {

    const [blogData, setBlogData] = useState([]);
    const [loader,setLoader]= useState(false);

    const handleGetBlogList = async () => {
        setLoader(true);
        try {
            const response = await axios({
                url: ApiConfig.getAllBlogs,
                method: "POST",
            });
            if (response?.data?.status_code === 200) {
                setBlogData(response?.data?.data);
            } else if (response?.data?.status_code === 404) {

            }
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetBlogList();
    }, []);
    


    const exportToExcel = () => {
        const fileName = "blog_list.xlsx";
        const table = document.getElementById("feedback-table");
        const wb = XLSX.utils.table_to_book(table, { sheet: "Blog List" });
        XLSX.writeFile(wb, fileName);
    };


    return (
        <>
            {/* <Header /> */}
            <CustomHeader headerText="Manage Blog" />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <div className="d-flex flex justify-content-between">
                                    <h3 className="mb-0">Blog List</h3>
                                    <Button onClick={exportToExcel} style={{ backgroundColor: "#66BB6A", color: '#ffffff', }}>Export List</Button>
                                </div>
                            </CardHeader>
                            <Table id="feedback-table" className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Blog Title</th>
                                        <th scope="col">Sub title</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Author Name</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                {blogData?.map((key, index) => (
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
                                                        src={key?.image}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                       {key?.title}
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>{key?.subtitle}</td>
                                        <td>
                                            <p style={{ fontSize: "12px" }}>{moment(key?.dateandtime).format('MM/DD/YY')}</p>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <p style={{ fontSize: "12px", color: 'GrayText' }}>{key.AuthorName ? key.AuthorName : "Hetal Shah" }</p>
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
                                ))}
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

export default BlogList;
