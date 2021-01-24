const FeedBack = () => {
    return (
      <div class=" font-poppins grid py-10 bg-blue-500 place-items-center">
        <div class="w-11/12 p-10 bg-white sm:w-8/12 md:w-1/2 lg:w-1/2 rounded-lg">
          <h1 class="text-3xl font-semibold">
            Hello there 👋,{" "}
            <span class=" text-2xl font-normal">
              hope you enjoyed this session. Kindly give your feedback below.
            </span>
          </h1>
          <form class="mt-6">
            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <label
                  for="firstname"
                  class="block text-sm font-semibold text-gray-800 uppercase"
                >
                  Firstname
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  autocomplete="given-name"
                  class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span class="w-1/2">
                <label
                  for="lastname"
                  class="block text-sm font-semibold text-gray-800 uppercase"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  autocomplete="family-name"
                  class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>

            <label
              for="email"
              class="block mt-4 text-sm font-semibold text-gray-700 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <label
              for="branch"
              class="block mt-4 text-sm font-semibold text-gray-700 uppercase"
            >
              Branch
            </label>
            <input
              id="branch"
              type="text"
              name="branch"
              class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <div class=" mt-4 flex justify-between gap-3">
              <span class="w-1/2">
                <label
                  for="section"
                  class="block text-sm font-semibold text-gray-800 uppercase"
                >
                  Section
                </label>
                <input
                  id="section"
                  type="text"
                  name="section"
                  class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span class="w-1/2">
                <label
                  for="registrationnumber"
                  class="block text-sm font-semibold text-gray-800 uppercase"
                >
                  Reg. Number
                </label>
                <input
                  id="registrationnumber"
                  type="number"
                  name="registrationnumber"
                  class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <label
              for="about"
              class="block mt-4 text-base font-semibold text-gray-700 uppercase"
            >
              What was your favourite project in the orientation?
            </label>
            <input
              id="about"
              type="text"
              name="about"
              class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <label class="block mt-6 text-sm md:text-base font-semibold text-gray-700 uppercase">
              How was the Orientation?
            </label>
            <div class="mx-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="aboutorientation"
                    value="Excellent"
                    checked
                  />
                  <span class="ml-2">Excellent</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="aboutorientation" value="Good" />
                  <span class="ml-2">Good</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="aboutorientation" value="Boring" />
                  <span class="ml-2">Boring</span>
                </label>
              </div>
            </div>

            <label class="block mt-6 text-sm md:text-base font-semibold text-gray-700 uppercase">
              How helpful was the orientation for you?
            </label>
            <div class="mx-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="helpful"
                    value="Extremely helpful"
                    checked
                  />
                  <span class="ml-2">Extremely helpful</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="helpful" value="Somewhat helpful" />
                  <span class="ml-2">Somewhat helpful</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="helpful" value="Not so helpful" />
                  <span class="ml-2">Not so helpful</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="helpful"
                    value="Not at all helpful"
                  />
                  <span class="ml-2">Not at all helpful</span>
                </label>
              </div>
            </div>

            <label class="block mt-6 text-sm md:text-base font-semibold text-gray-700 uppercase">
              Would you like to attend any classes/workshops conducted by the
              club on basic of robotics?
            </label>
            <div class="mx-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="aboutclass" value="Yes" checked />
                  <span class="ml-2">Yes</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input type="radio" name="aboutclass" value="No" />
                  <span class="ml-2">No</span>
                </label>
              </div>
            </div>

            <label class="block mt-6 text-sm md:text-base font-semibold text-gray-700 uppercase">
              Are you excited to join the Robotics Society?
            </label>
            <div class="mx-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="interest"
                    value="Very Excited"
                    checked
                  />
                  <span class="ml-2">Very Excited</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    name="interest"
                    value="Not so interested"
                  />
                  <span class="ml-2">Not so interested</span>
                </label>
              </div>
            </div>

            <label
              for="suggestions"
              class="block mt-4 text-base font-semibold text-gray-700 uppercase"
            >
              Any more suggestions{" "}
            </label>
            <input
              id="suggestions"
              type="text"
              name="suggestions"
              class="block w-full p-3 mt-2 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />

            <button
              type="submit"
              class="w-full py-3 mt-6 rounded-md font-medium tracking-widest text-white uppercase bg-blue-700 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}
 
export default FeedBack;