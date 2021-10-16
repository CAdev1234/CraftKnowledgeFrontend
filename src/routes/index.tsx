import React from 'react';

const Home = React.lazy(() => import('containers/public/Home'));
const Register = React.lazy(() => import('containers/public/Register'));
const Login = React.lazy(() => import('containers/public/Login'));
const Help = React.lazy(() => import('containers/public/Help'));
const ContactUs = React.lazy(() => import('containers/public/ContactUs'));

const Dashboard = React.lazy(() => import('containers/Dashboard'));

const ExploreAllCourses = React.lazy(() => import('containers/public/ExploreAllCourses'));



const indexRoutes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/help", component: Help },
  { path: "/", component: Home },
  { path: "/contactUs", component: ContactUs },

  { path: "/dashboard", component: Dashboard },

  { path: "/explore-all-courses", component: ExploreAllCourses },

];

export default indexRoutes;
