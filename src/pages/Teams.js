import avatar from "../images/teams/avatar.png";
import SecondaryNavbar from "../components/SecondaryNavbar"
import { teams } from "../data/teams";
import { useState } from "react";

const Teams = ({ color }) => {
  const [openTab, setOpenTab] = useState("final");
  return (
    <>
      <SecondaryNavbar />
      <div className="px-10 dark:bg-gray-800 pt-20">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className=" mb-0 list-none grid pt-3 pb-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-2"
              role="tablist"
            >
              <li className="-mb-px mr-2 md:col-span-4 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "final"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("final");
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i> Final Year
                </a>
              </li>
              <li className="-mb-px mr-2 md:col-span-4 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "prefinal"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("prefinal");
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                  Pre-Final Years
                </a>
              </li>
              <li className="-mb-px mr-2 md:col-span-4 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "second"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("second");
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i> Sophomores
                </a>
              </li>
              <li className="-mb-px mr-2 md:col-span-3 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "rnd"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("rnd");
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                  Research
                </a>
              </li>{" "}
              <li className="-mb-px mr-2 md:col-span-3 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "webapp"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("webapp");
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> Web &
                  App
                </a>
              </li>{" "}
              <li className="-mb-px mr-2 md:col-span-3 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "content"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("content");
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                  Content Writing
                </a>
              </li>{" "}
              <li className="-mb-px mr-2 md:col-span-3 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === "management"
                      ? "text-white dark:text-gray-200 bg-" + color + "-600"
                      : "dark:text-blue-200 text-" +
                        color +
                        "-600 bg-white dark:bg-gray-700")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab("management");
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                  Management{" "}
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-2 pb-2 mt-5">
          <div className="text-3xl font-bold uppercase dark:text-gray-300">
            {
              openTab === "final" ||
            openTab === "prefinal" ||
            openTab === "second"
              ? `${openTab} Year`
              : (openTab === "rnd" ? "Research" : 
                (openTab === "webapp" ? "Web & App" : `${openTab}` )) }
          </div>
          <div className="text-3xl text-red-600 font-bold uppercase dark:text-red-500">
            Team
          </div>
        </div>

        {/* Cards Start Below */}
        <div className="container mx-auto mt-10 pb-10 grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* eslint-disable-next-line array-callback-return */}
          {teams.map((member, key) => {
            if (
              member.year === openTab ||
              (member.isRnd && openTab === "rnd") ||
              (member.isWebApp && openTab === "webapp") ||
              (member.isContentWriting && openTab === "content") ||
              (member.isManagement && openTab === "management")
            ) {
              return (
                <div>
                  <div className="bg-white  dark:bg-gray-900 shadow-lg hover:shadow-xl rounded-lg h-full border-b border-red-500 p-8">
                    <div>
                      <img
                        className="w-32 h-32 border-4  border-red-400 dark:border-red-700 p-2 rounded-full mx-auto"
                        height="160px"
                        width="160px"
                        src={
                          member.image
                            ? `../images/teams/${member.image}.webp`
                            : avatar
                        }
                        alt={`${member.name}`}
                      />
                    </div>
                    <div className="p-2 h-16 mt-2">
                      <h3 className="text-center text-xl uppercase dark:text-gray-300 text-gray-900 font-bold leading-8">
                        {member.name}
                      </h3>
                    </div>
                    <div className="flex-row flex dark:text-gray-400 justify-around mt-6">
                      {member.linkedin != null && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={member.linkedin}
                        >
                          <svg
                            className="w-7 h-7 fill-current dark:text-blue-400 text-blue-500 "
                            viewBox="0 0 24 24"
                          >
                            <path
                              clipRule="evenodd"
                              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                          </svg>
                        </a>
                      )}
                      {member.twitter != null && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={member.twitter}
                        >
                          <svg
                            className="w-7 h-7 fill-current dark:text-blue-400 text-blue-500 "
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      )}
                      {member.facebook != null && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={member.facebook}
                        >
                          <svg
                            className="w-7 h-7 fill-current dark:text-blue-400 text-blue-500 "
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </a>
                      )}
                      {member.github != null && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={member.github}
                        >
                          <svg
                            className="w-7 h-7 fill-current text-gray-800 dark:text-gray-200 "
                            viewBox="0 0 24 24"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
function TabsRender() {
  return (
    <>
      <Teams color="blue" />
    </>
  );
}

export default TabsRender;
