// import cityImage from "../images/parallax/city.jpg";
// import skillsImage from "../images/parallax/skills.jpg";

const About = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center gap-2 pb-2 border-b border-white">
            <div className="text-3xl">OUR</div>
            <div className="text-3xl text-red-600 "> MISSION</div>
          </div>
          <div className="text-sm text-justify">
            <p>
              With the dawn of 21st century and scientific advancements at its
              peak ,sitting with a book and reading about scientific endeavours
              is too mainstream. The time demands more from us and we are up for
              the challenge . We are enthusiastic enough to take this
              opportunity and make a great deal of it. We all succour the ways
              in which robotics can change the world. Being the avid tech geeks
              that we are, we can see the positive economic and cultural
              potential that the technology can offer. Our mission is one- to
              make the best innovation of the ideas one possesses.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center gap-2 pb-2 border-b border-white">
            <div className="text-3xl ">WHAT WE</div>
            <div className="text-3xl text-red-600 "> DO</div>
          </div>
          <div className="text-sm text-justify">
            <p>
              VSSUT Robotics Society provides students with resources and ample
              support to develop products which will make people lives easier.
              Over the years, it has not failed once to make its presence felt.
              Be it the outstanding performances at Robocon or invigorating the
              primordial ideas of freshers. It fosters and prunes every
              innovative mind.We love to play with MECHANICAL designs, dope them
              with the ELECTRONICS components and feel the Automation come alive
              with few lines of CODING. The society offers indispensable
              guidance, workshops and tutorials along with tools, equipment,
              components and workspace to the students of the
              university.Mentioning of team work! Individual commitment to a
              group effort-that is what makes,a team work, a company work, this
              Robotics society work. This is not merely a club of an institute,
              this is what a family looks like in a technical university.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:col-span-2">
          <div className="flex flex-row justify-center gap-2 pb-2 border-b border-white">
            <div className="text-3xl">HEAR US LOUD</div>
          </div>
          <div className="border-t-4 border-white mx-60"></div>
          <div className="border-2 border-white rounded-lg">
            <iframe
              title="Youtube Video"
              className="w-full h-96"
              src="https://www.youtube.com/embed/RhroZl45nQo"
            ></iframe>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center mx-4 mt-10">
            <div className="px-3 py-2 border-2 border-red-500 ">
              <a
                href="https://www.youtube.com/channel/UCfrM26pYkyk8JtW-G0mcDNQ"
                target="_blank"
                rel="noreferrer"
                className="border-red-600"
                role="button"
              >
                Watch More
              </a>
            </div>
            <div className=" px-3 py-2 border-2 border-red-500 ">
              <a
                href="https://www.facebook.com/vssutrobotics/"
                target="_blank"
                rel="noreferrer"
                className="border-red-600"
                role="button"
              >
                Facebook
              </a>
            </div>
            <div className="px-3 py-2 border-2 border-red-500 ">
              <a
                href="https://www.instagram.com/vssut_robotics/"
                target="_blank"
                rel="noreferrer"
                className="border-black"
                role="button"
              >
                Instagram
              </a>
            </div>
            <div className="px-3 py-2 border-2 border-red-500 ">
              <a
                href="https://play.google.com/store/apps/details?id=com.gaurav.robotics_society&hl=en"
                target="_blank"
                rel="noreferrer"
                className="border-red-600"
                role="button"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
