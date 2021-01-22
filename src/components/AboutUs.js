const About = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mx-10">
        {/* Our Mission Column */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-center gap-2 pb-2 mb-4 border-b border-white">
            <div className="text-3xl font-bold">OUR</div>
            <div className="text-3xl font-bold text-red-600 dark:text-red-500">
              MISSION
            </div>
          </div>
          <div className="text-md leading-snug text-justify">
            <p>
              With the dawn of the 21st century and scientific advancements at
              its peak, sitting with a book and reading about scientific
              endeavours is too mainstream. The time demands more from us and we
              are up for the challenge. <br />
              We are enthusiastic enough to take this opportunity and make a
              great deal of it. We all succour how robotics can change the
              world. Being the avid tech geeks that we are, we can see the
              positive economic and cultural potential that the technology can
              offer. <br />
              Our mission is one - To make the best innovation of the ideas one
              possesses.
            </p>
          </div>
        </div>

        {/* What We Do Column */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-center gap-2 pb-2 mb-2 border-b border-white">
            <div className="text-3xl font-bold ">WHAT WE</div>
            <div className="text-3xl text-red-600 font-bold  dark:text-red-500">
              DO
            </div>
          </div>
          <div className="text-md leading-snug text-justify">
            <p>
              VSSUT Robotics Society provides students with resources and ample
              support to develop products which will make people lives easier.
              Over the years, it has not failed once to make its presence felt.
              Be it the outstanding performances at Robocon or invigorating the
              primordial ideas of freshers. It fosters and prunes every
              innovative mind. <br />
              We love to play with MECHANICAL designs, dope them with the
              ELECTRONICS components and feel the Automation come alive with few
              lines of CODING. The society offers indispensable guidance,
              workshops and tutorials along with tools, equipment, components
              and workspace to the students of the university.
              <br />
              Mentioning of teamwork! Individual commitment to a group effort
              that is what makes, teamwork, a company work, this Robotics
              society work. This is not merely a club of an institute, this is
              what a family looks like in a technical university.
            </p>
          </div>
        </div>

        {/* Video Column */}
        <div className="flex flex-col md:col-span-2">
          <div className="flex flex-row justify-center gap-2 pb-2 mb-5 border-b border-white">
            <div className="text-3xl font-bold">HEAR US</div>
            <div className="text-3xl font-bold text-red-600 dark:text-red-500">
              LOUD
            </div>
          </div>
          <div className="border-2 border-white rounded-3xl">
            <iframe
              title="Youtube Video"
              width="600px"
              height="350px"
              className="w-full h-96 rounded-3xl"
              src="https://www.youtube.com/embed/RhroZl45nQo"
            ></iframe>
          </div>

          {/* Buttons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center mx-4 mt-10">
            <button className="px-3 py-2 rounded dark:text-gray-200 border-blue-600 border-2 text-gray-800 hover:bg-blue-600 hover:text-white">
              <a
                href="https://www.youtube.com/channel/UCfrM26pYkyk8JtW-G0mcDNQ"
                target="_blank"
                rel="noreferrer"
              >
                Watch More
              </a>
            </button>
            <button className="px-3 py-2 rounded dark:text-gray-200 border-blue-600 border-2 text-gray-800 hover:bg-blue-600 hover:text-white">
              <a
                href="https://www.facebook.com/vssutrobotics/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </button>
            <button className="px-3 py-2 rounded dark:text-gray-200 border-blue-600 border-2 text-gray-800 hover:bg-blue-600 hover:text-white">
              <a
                href="https://www.instagram.com/vssut_robotics/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </button>
            <button className="px-3 py-2 rounded dark:text-gray-200 border-blue-600 border-2 text-gray-800 hover:bg-blue-600 hover:text-white">
              <a
                href="https://play.google.com/store/apps/details?id=com.gaurav.robotics_society&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Play Store
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
