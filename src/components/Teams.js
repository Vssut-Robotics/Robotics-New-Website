import { Link } from "react-router-dom";
const TeamsSection = () => {
  return (
    <div className="text-black dark:text-gray-400  bg-white dark:bg-gray-800 pb-10">
      <div className=" flex flex-row justify-center text-center uppercase text-5xl mb-5 p-6">
        <h2 className="text-bold dark:text-gray-200 pr-2">
          Our
          <span className="text-red-600 ml-5">Team</span>
        </h2>
      </div>

      {/* Main Page Administration Team */}
      <div className="flex flex-row justify-center gap-2 pb-2 mt-5">
        <div className="text-3xl font-bold uppercase dark:text-gray-300">
        Administration
        </div>
        <div className="text-3xl text-red-600 font-bold uppercase dark:text-red-500">
          Team
        </div>
      </div>
      <div className="mx-10 mb-10 grid grid-cols-1 gap-8 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div>
          <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-2xl hover:shadow-2xl border-1 border-b border-red-500 rounded-lg p-8">
            <div>
              <img
                className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                src="/images/administration/admin_das.webp"
                alt="Prof. Sudhanshu S. Das"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl dark:text-gray-200 font-bold leading-8">
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

        {/* Card 2  */}
        <div>
          <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-2xl hover:shadow-2xl border-1 border-b border-red-500 rounded-lg p-8">
            <div>
              <img
                className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                src="/images/administration/admin_harish.webp"
                alt="Dr. Harish Kumar Sahoo"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl dark:text-gray-200 font-bold leading-8">
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

        {/* Card 3 */}
        <div>
          <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-2xl hover:shadow-2xl border-1 border-b border-red-500 rounded-lg p-8">
            {" "}
            <div>
              <img
                className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                src="/images/administration/admin_bandan.webp"
                alt="Mr.Bandan Kumar Bhoi"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl dark:text-gray-200 font-bold leading-8">
                Dr. Bandan Kumar Bhoi
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

        {/* Card 4 */}
        <div>
          <div className="bg-white dark:bg-gray-900 shadow-md dark:shadow-2xl hover:shadow-2xl border-1 border-b border-red-500 rounded-lg p-8">
            <div>
              <img
                className="w-32 h-32 border-4 border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                src="/images/administration/admin_akash.webp"
                alt="Akash Pattanayk"
              />
            </div>
            <div className="p-2 xs:h-20 md:auto">
              <h3 className="text-center text-xl dark:text-gray-200 font-bold leading-8">
                Akash Pattanyak
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
          "The strength of the team is each individual member.The strength of
          each member is the team." <br />
          Meet the rest of the team
        </p>
        <Link
          to="/teams"
          className="w-1/2 md:w-1/4 lg:w-1/6 mx-auto px-3 py-2 rounded dark:dark:text-gray-200 border-blue-600 border-2 text-gray-800 dark:text-gray-300 hover:bg-blue-600 hover:text-white"
        >
          MEET THE TEAM
        </Link>
      </div>
    </div>
  );
};

export default TeamsSection;
