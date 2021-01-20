import Navbar from "./components/Navbar";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import TeamsSection from "./components/Teams";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/ContactUs";
import Testimonial from "./components/Testimonials";
import MediaGallery from "./components/MediaCoverage";
import ImagesGallery from "./components/ImagesGallery";
import ScrollToTop from "./components/ScrollToTop";
import AllProjects from "./pages/AllProjects";
import Teams from "./pages/Teams";
import { ThemeProvider } from "./components/themeContext";
import NotFound from "./pages/NotFound";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/projects">
              <AllProjects />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route exact path="/">
              <Home />
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
