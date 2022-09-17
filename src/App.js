import './App.css';
import React from 'react';
import HeaderComponent from './header'
import ContentComponent from './content'
import FooterComponent from './footer'

function App() {
  let title="MK Site";
  let navItems=[{urlName:'home',displayName:'Home',path:'/home'},
  {urlName:'projects',displayName:'Projects',path:'/projects'},
  {urlName:'assignment',displayName:'Assignment',path:'/assignment'},
  {urlName:'Countries',displayName:'Countries',path:'/countries'},
  {urlName:'signup',displayName:'Signup',path:'/Signup'},
  {urlName:'login',displayName:'Login',path:'/login'},
  {urlName:'aboutus',displayName:'About',path:'/aboutus'},
  {urlName:'primeHookForm',displayName:'PrimeHookForm',path:'/primeHookForm'},
  {urlName:'formikForm',displayName:'FormikForm',path:'/formikForm'},
  
];
  return (
    <div>
      <HeaderComponent title={title} navItems={navItems}></HeaderComponent>
      <ContentComponent navItems={navItems}></ContentComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
