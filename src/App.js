import Navbar from "./components/Navbar";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import TeamsSection from "./components/Teams";
import Achievements from "./components/Achievements";
import Contact from "./components/ContactUs";
import Testimonial from "./components/Testimonials";
import MediaGallery from "./components/MediaCoverage";
import ImagesGallery from "./components/ImagesGallery";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import { ThemeProvider } from "./components/ThemeContext";
import NotFound from "./pages/NotFound";
import { Element } from "react-scroll";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./pages/Registration";
const AllProjects = React.lazy(() => import("./pages/AllProjects"));
const Teams = React.lazy(() => import("./pages/Teams"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            <Route exact path="/projects">
              <Suspense fallback={<div>Loading...</div>}>
                <AllProjects />
              </Suspense>
            </Route>
            <Route exact path="/teams">
              <Suspense fallback={<div>Loading...</div>}>
                <Teams />
              </Suspense>
            </Route>
            <Route exact path="/register">
              <Suspense fallback={<div>Loading...</div>}>
                <Registration/>
              </Suspense>
            </Route>
            <Route exact path="/">
              <Navbar />
              <Element id="home" name="home">
                <Home />
              </Element>
              <Element id="about" name="about">
                <About />
              </Element>
              <MediaGallery />
              <Element id="projects" name="projects">
                <Projects />
              </Element>
              <Element id="achievements" name="achievements">
                <Achievements />
              </Element>
              <Element id="team" name="team">
                <TeamsSection />
              </Element>
              <Element id="gallery" name="gallery">
                <ImagesGallery />
              </Element>
              <Testimonial />
              <Element id="contact" name="contact">
                <Contact />
              </Element>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
