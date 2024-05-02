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
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import BlogList from "views/examples/Bloglist";
import AddArchive from "views/examples/AddArchives";
import ArchivesList from "views/examples/ArchivedList";
import FeedbackList from "views/examples/FeedbackList";
import ContactUsList from "views/examples/ContractUsList";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/blogs",
    name: "Blog",
    icon: "ni ni-bullet-list-67 text-red",
    component: <BlogList />,
    layout: "/admin",
  },
  {
    path: "/archives",
    name: "Add Archive",
    icon: "ni ni-archive-2 text-purple",
    component: <AddArchive />,
    layout: "/admin",
  },
  {
    path: "/arvhices-list",
    name: "Archives List",
    icon: "ni ni-bullet-list-67 text-green",
    component: <ArchivesList />,
    layout: "/admin",
  },
  {
    path: "/feedback",
    name: "Feedback",
    icon: "ni ni-collection",
    component: <FeedbackList/>,
    layout: "/admin",
  },
  {
    path: "/contactus",
    name: "Contact Us",
    icon: "ni ni-tag text-blue",
    component: <ContactUsList />,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;
