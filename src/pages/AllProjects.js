import { projects } from "../data/projects";

const AllProjects = () => {
    return (<>
        {projects.map((project, key) => {
            return (
              <div className="px-10 py-10 dark:bg-gray-800">
                <div className="lg:flex lg:justify-center">
                  <div className="bg-white dark:text-gray-300 dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-5xl shadow-lg rounded-lg lg:shadow-lg lg:rounded-lg">
                    <div className="lg:w-1/2">
                      <div
                        className="h-64 bg-cover lg:rounded-lg rounded-lg lg:h-full"
                        style={{
                          backgroundImage: `url(${`../images/projects/${project.image}`})`,
                        }}
                      ></div>
                    </div>
                    <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                      <h2 className="text-3xl text-gray-800  dark:text-gray-300 font-bold">
                        Project{" "}
                        <span className="text-blue-600  dark:text-blue-400">
                          {project.name}
                        </span>
                      </h2>
                      <p className="mt-4 text-gray-600  dark:text-gray-400 overflow-visible">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
        } )}
    </>  );
}
 
export default AllProjects;