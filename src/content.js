import React from "react";
import { Routes,Route } from "react-router-dom";
import HomeComponent from "./components/home";
import ProjectsComponent from "./components/prjects";
import AssignmentComponent from "./components/assignments";
import CountriesComponent from "./components/countries";
import AboutUsComponent from "./components/aboutus";
import LoginComponent from "./components/login";
import Page404 from "./components/page404";
import SignupForm from "./components/signup";
import PrimeHookForm from "./components/primeHookForm";
import FormikForm from "./components/FormikForm";


export default function ContentComponent(props){
    return(<div className="content">
<Routes>
    <Route path={"/home"} element={<HomeComponent></HomeComponent>} />
    <Route path={"/"} element={<HomeComponent></HomeComponent>} />
    <Route path={"/projects"} element={<ProjectsComponent></ProjectsComponent>} />
    <Route path={"/assignment"} element={<AssignmentComponent></AssignmentComponent>} />
    <Route path={"/countries"} element={<CountriesComponent></CountriesComponent>} />
    <Route path={"/login"} element={<LoginComponent></LoginComponent>} />
    <Route path={"/signup"} element={<SignupForm></SignupForm>} />
    <Route path={"/aboutus"} element={<AboutUsComponent></AboutUsComponent>} />
    <Route path={"/primeHookForm"} element={<PrimeHookForm></PrimeHookForm>} />
    <Route path={"/formikForm"} element={<FormikForm></FormikForm>} />
    
    <Route path={"/*"} element={<Page404></Page404>} />
</Routes>

    </div>)
}