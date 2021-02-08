import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Middle from "./Components/Middle.jsx";
  // import { Form2, Footer, Copyright } from "./Components/Contact.js";
import NotFound from "./Components/NotFound";
import Classes from "./Components/classes";
import StudyAbroad from "./Components/newStudy.js";
import IntroductionSection from "./Components/IntroductionSection";
import AboutSection from "./Components/AboutSection";
import GlobalStyle from "./Components/GlobalStyle";
import Dashboard from "./Components/newDashboard.js";
import EntranceExamCourse from "./Components/EntranceExam";
import SkillDev from "./Components/SkillDev";
import VirtualTuitionCourses from "./Components/VirtualTuitionCourses";
import StudyAboardCourse from "./Components/StudyAboardCourse";
import PreviousYearSection from "./Components/PreviousYearSection";
import Login from "./Components/Login";
import Scholarship from "./Components/Scholarship";
import NewsandBlogs from "./Components/NewsandBlogs";
import Articles from "./Components/Articles";

import { AuthContext } from "./HOC/LoginHOC";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        {!auth ? (
          <>
          <Route exact path="/">
            <Home />
            <GlobalStyle />
            <EntranceExamCourse /> 
            <PreviousYearSection />
            <SkillDev />
            <VirtualTuitionCourses /> 
            <StudyAboardCourse /> 
            <IntroductionSection />
            <AboutSection />
            <Middle /> 
           {/* <Form2 />
           <Footer /> 
           <Copyright />  */}
         
          </Route>
          <Route exact path="/login">
          <Login />
            </Route>
           <Route exact path="/dashboard/:id">
           <Dashboard />
         </Route>
         </>
        ) : (
          <>
           
           <Route exact path="/">
           <Dashboard />
         </Route>
            <Route exact path="/dashboard/:id">
              <Dashboard />
            </Route>
            <Route exact path="/scholarship">
              <Scholarship />
            </Route>
            <Route exact path="/newsandblogs">
              <NewsandBlogs />
            </Route>
            <Route exact path="/articles">
              <Articles />
            </Route>
            <Route exact path="/studyabroad">
              <StudyAbroad />
            </Route>
            <Route exact path="/class4">
              <Classes />
            </Route>
          </>
        )}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
