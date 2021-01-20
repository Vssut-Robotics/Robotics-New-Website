import {Link} from 'react-router-dom'
const TeamsSection = () => {
    return (
      <>
        <div className="text-black dark:text-gray-400  bg-white dark:bg-gray-900 pb-10">
          <div className="flex justify-center py-10 mx-auto text-4xl font-semibold">
            OUR<span className="text-red-600 ml-3"> TEAM</span>
          </div>
          <div className="mx-10 mb-10 grid grid-cols-1 gap-8 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg border- p-8">
                <div>
                  <img
                    className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                    src="/images/administration/admin_das.jpg"
                    alt="Prof. Sudhanshu S. Das"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-200 font-bold leading-8">
                    Prof. Sudhanshu S. Das
                  </h3>
                </div>
                <div className="p-1">
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold leading-8">
                    Dean
                  </h3>
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold">
                    Students Welfare
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg border- p-8">
                <div>
                  <img
                    className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                    src="/images/administration/admin_harish.jpg"
                    alt="Dr. Harish Kumar Sahoo"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-200 font-bold leading-8">
                    Dr. Harish Kumar Sahoo
                  </h3>
                </div>
                <div className="p-1">
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold leading-8">
                    Vice-President
                  </h3>
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold ">
                    Technical Society
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg border- p-8">
                <div>
                  <img
                    className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                    src="/images/administration/admin_bandan.jpeg"
                    alt="Mr.Bandan Kumar Bhoi"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-200 font-bold leading-8">
                    Mr.Bandan Kumar Bhoi
                  </h3>
                </div>
                <div className="p-1">
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold leading-8">
                    Faculty Advisor
                  </h3>
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold">
                    Robotics Society
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-lg border- p-8">
                <div>
                  <img
                    className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                    src="/images/administration/admin_abhisek.jpg"
                    alt="Abhishek Agrawal"
                  />
                </div>
                <div className="p-2 xs:h-20 md:auto">
                  <h3 className="text-center text-xl text-gray-200 font-bold leading-8">
                    Abhishek Agrawal
                  </h3>
                </div>
                <div className="p-1">
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold leading-8">
                    Secretary
                  </h3>
                  <h3 className="text-center text-md text-gray-600 dark:text-gray-400 font-bold">
                    Robotics Society
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center mx-auto text-lg font-medium ">
            <p className="mb-4">
              "The strength of the team is each individual member.The strength
              of each member is the team." <br />
              Meet the rest of the team
            </p>
            <Link
              to="/teams"
              className="w-1/2 md:w-1/4 lg:w-1/6 mx-auto py-3 px-4 center text-lg font-semibold border-2 border-blue-200 rounded-lg dark:hover:text-white hover:bg-blue-600"
            >
              MEET THE TEAM
            </Link>
          </div>
        </div>
      </>
    );
}
 
export default TeamsSection;