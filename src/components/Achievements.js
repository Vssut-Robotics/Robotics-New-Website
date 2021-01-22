import parallax from '../images/parallax/white.webp'

const Achievements = () => {
    return (
      <div
        className="  dark:text-gray-200 bg-no-repeat bg-cover bg-fixed font-poppins"
        style={{
          backgroundImage: `url(${parallax})`,
        }}
      >
        <div className="bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70">
          <div className=" flex flex-row justify-center text-center uppercase text-3xl sm:text-4xl md:text-5xl mb-5 p-6">
            <h2 className="text-bold">
              Our
              <span className="text-red-600 dark:text-red-500 ml-5">
                Achievements
              </span>
            </h2>
          </div>
          <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 dark:bg-gray-800 dark:bg-opacity-0 text-black dark:text-gray-200 text-lg">
            <div className="pricing p-5 mb-5 md:mb-10 shadow-lg dark:bg-gray-800">
              <div className="text-center uppercase font-medium text-3xl py-2 mx-auto">
                <h3>ROBOCON</h3>
              </div>
              <div className="leading-snug">
                <div className="mt-4">
                  <ul>
                    <li className="border-b-2 border-red-600 pb-4 ">
                      2019: Shortlisted in Round 2-Abu Robocon 2019
                    </li>
                    <li className="border-b-2 border-red-600 py-3 ">
                      2018: AIR-3 in MATLAB Innovation
                    </li>
                    <li className="border-b-2 border-red-600 py-3 ">
                      2017: AIR-6
                    </li>
                    <li className="border-b-2 border-red-600 py-3 ">
                      2016: AIR-20
                    </li>
                    <li className="border-b-2 border-red-600 py-3 ">
                      2016: 3rd Prize In Implementing MathWorks In Nationals
                    </li>
                    <li className="border-b-2 border-red-600 py-3 ">
                      2015: AIR-27
                    </li>
                    <li className=" pt-5 ">2011: AIR-4</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing p-5 mb-5 md:mb-10 shadow-lg dark:bg-gray-800">
              <div className="text-center uppercase font-medium text-3xl py-2 mx-auto">
                <h3>Nationals</h3>
              </div>
              <div className="leading-tight">
                <div className="mt-4">
                  <ul>
                    <li className="border-b-2 border-red-600 pb-4 ">
                      AIR 4 in MathWorks Parrot MiniDrone Competition-2019 ,
                      NUMA Bengaluru
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      Finalist Smart India Hackathon 2019-Software Edition
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      3 Teams in National Finals at L&T Techgium 2019
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      3 Teams Finalist Tata Crucible Hackathon 2019
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2nd Prize in Smart Odisha Hackathon-2018
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      Represented VSSUT at East Zone in DRUSE-2018
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      Top 10 in Smart India Hackathon 2018 Finals
                    </li>
                    <li className="pt-2 ">
                      {" "}
                      2018-2nd prize at INFOSYS Robotics Camp,Bhubaneswar for
                      our project on UAV
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pricing p-5 mb-5 md:mb-10 shadow-lg dark:bg-gray-800">
              <div className="text-center uppercase font-medium text-3xl py-2 mx-auto">
                <h3>E-yantra</h3>
              </div>
              <div className="leading-relaxed">
                <div className="mt-4">
                  <ul>
                    <li className="border-b-2 border-red-600 pb-5 ">
                      2018: AIR -2
                    </li>
                    <li className="border-b-2 border-red-600 py-4 ">
                      2017: AIR -4
                    </li>
                    <li className="border-b-2 border-red-600 py-4 ">
                      2017: 2 teams from VSSUT were finalists
                    </li>
                    <li className="border-b-2 border-red-600 py-4 ">
                      2016: 3 teams from Vssut Robotics were shortlisted
                    </li>
                    <li className="border-b-2 border-red-600 py-4 ">
                      2015: AIR–7
                    </li>
                    <li className="pt-4 ">2015: 3 teams were shortlisted</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pricing p-5 mb-5 md:mb-10 shadow-lg dark:bg-gray-800">
              <div className="text-center uppercase font-medium text-3xl py-2 mx-auto">
                <h3>TechFests</h3>
              </div>
              <div className="leading-tight">
                <div className="mt-4">
                  <ul>
                    <li className="border-b-2 border-red-600 pb-2 ">
                      2018- AIR 1 in SONAROUS at National Student's Space
                      Challenge - IIT Kharagpur and ISRO.
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2019- 1st , 2nd & 3rd prize in Image Processing Event- NIT
                      ROURKELA
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2019- 1st Prize in Robotics Event at Techfest-IIT
                      Bhubaneswar
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2018- 1st prize in Hoverpod Event- NIT ROURKELA
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2018- 1st prize in Line Follower and Balance Bot Event-
                      NIT ROURKELA
                    </li>
                    <li className="border-b-2 border-red-600 py-2 ">
                      2018- 1st and 2nd prize in Image Processing Event- NIT
                      ROURKELA.
                    </li>
                    <li className="pt-2 ">
                      2018- 1st prize in ACIEQUOR at National Student's Space
                      Challenge - IIT Kharagpur and ISRO.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Achievements;