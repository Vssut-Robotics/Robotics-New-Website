import projectsParallax from '../images/parallax/projects.png'
import {Link} from 'react-router-dom'
const Projects = () => {
    return (
      <section className="blog pb-24 text-gray-700 dark:bg-gray-900 dark:text-gray-200 body-font">
        <div
          className="bg-fixed h-64 md:81"
          style={{
            backgroundImage: `url(${projectsParallax})`,
          }}
        ></div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 dark:bg-gray-900 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/projects/project_rov1.png)`,
                }}
              ></div>

              <div className=" w-70 bg-white dark:bg-gray-900 dark:shadow-xl -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Water</div>
                </div>
                <div className="title-post font-bold">ROUV</div>

                <div className="summary-post text-base text-justify">
                  Remote Operated Underwater Vehicle(ROUV) is a tethered
                  underwater mobile device. It can reach a depth of 10 meters
                  and has a runtime of 25 mins. It has auto-surfacing capability
                  in case there is loss of connectivity.
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 dark:bg-gray-900 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/projects/project_uav.png)`,
                }}
              ></div>

              <div className=" w-70 bg-white dark:bg-gray-900 -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Air</div>
                </div>
                <div className="title-post font-bold">UAV</div>

                <div className="summary-post text-base text-justify">
                  UAV An Unmanned Aerial Vehicle(UAV) commonly known as drone
                  with Six propellers.Our main mission is to facilitate disaster
                  management.It can take a payload of 2Kgs for medical and
                  relief supplies
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 dark:bg-gray-900 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(/images/projects/project_hoverpod.jpg)`,
                }}
              ></div>

              <div className=" w-70 bg-white dark:bg-gray-900 -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Ground</div>
                </div>
                <div className="title-post font-bold">HOVERPOD</div>

                <div className="summary-post text-base text-justify">
                  Hoverpod is a bot which could float and move in response to
                  mental commands.Hoverpod are capable of autonomous operation,
                  they are quiet, safe, durable, easy to operate, maintain and
                  transport. You flow in a boat,ride in a truck, but fly in a
                  Hoverpod.
                  {/* <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm">
                    <span className="">Lire plus</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center mx-auto">
          <p className="pb-4 uppercase font-medium">View all of our projects</p>
          <Link
            to="/projects"
            className="py-2 px-4 border-2 border-blue-600 rounded-lg hover:bg-blue-600"
          >
            All Projects
          </Link>
        </div>
      </section>
    );
}
export default Projects;