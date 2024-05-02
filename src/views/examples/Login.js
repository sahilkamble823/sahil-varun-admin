
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
} from "reactstrap";
import ApiConfig from "./../../config/ApiConfig.js";
import { Form, Formik } from "formik";
import * as yep from "yup";
import axios from 'axios'
import { useState } from "react";
import ButtonCircularProgress from "../../components/ButtonCircularProgress.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoader(true);
    try {
      const response = await axios({
        url: ApiConfig.loginAdmin,
        method: "POST",
        data: {
          Name: values?.userName,
          Password: values?.password,
        },
      });
      if (response?.data?.status_code === 200) {
        setLoader(false);
        window.localStorage.setItem("token", response?.data?.data?.token);
        navigate('/admin/index');
        // auth.userLogIn(true, response?.data?.data?.token);
      } else if (response?.data?.status_code === 404) {
        // toast.error(response?.data?.msg);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      // toast.error("Something went wrong! Try again later.");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-2">
            <div className="text-muted text-center">
              <h2 className="logo">Admin Login</h2>
            </div>
          </CardHeader>

          <CardBody className="px-lg-5 py-lg-5">
            <Formik
              onSubmit={(values) => handleLogin(values)}
              initialValues={{ userName: "", password: "" }}
              initialStatus={{
                success: false,
                successMsg: "",
              }}
              validationSchema={yep.object().shape({
                userName: yep
                  .string()
                  .required("Please enter your Name.")
                  .max(30, "Name should not exceed 30 characters.")
                  .matches(
                    "^[A-Za-z]+(?:[\s-][A-Za-z]+)*$",
                    "Please enter your valid Name."
                  ),
                password: yep
                  .string()
                  .trim()
                  .required("Password is required.")
                  .max(16, "Password should not exceed 16 characters.")
                  .min(8, "Password must be a minimum of 8 characters."),
              })}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
                setFieldValue,
              }) => (
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        name="userName"
                        autoComplete="new-email"
                        value={values.userName}
                        error={Boolean(touched.userName && errors.userName)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <h5 error style={{ color: "red" }}>
                      {touched.userName && errors.userName}
                    </h5>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="new-password"
                        value={values.password}
                        error={Boolean(touched.password && errors.password)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton onClick={handleTogglePassword} edge="end">
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </InputGroup>
                    <h5 error style={{ color: "red" }}>
                      {touched.password && errors.password}
                    </h5>
                  </FormGroup>

                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit" >
                      {loader === false ? (
                        " Sign in"
                      ) : (
                        <ButtonCircularProgress />
                      )}
                    </Button>
                  </div>
                </Form>

              )}
            </Formik>

          </CardBody>


        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>

        </Row>
      </Col>
    </>
  );
};

export default Login;
