import React, { useEffect, useState } from "react";
import axios from "axios";

const Completed = () => {
  const [task, setTask] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://student-portal-3g2h.onrender.com/task/done");
      setTask(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="py-10 bg-indigo-400 sm:py-16 lg:py-3">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
              Your Tasks
            </h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-10 lg:grid-cols-3 lg:max-w-full lg:gap-14">
            {task &&
              task.map((item, i) => (
                <div
                  className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl "
                  key={i}
                >
                  <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                      <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex-1 mt-5">
                      <p className="text-2x font-semibold">
                        <p className="text-black">Task Link</p>
                      </p>
                      <a
                        href={item.link}
                        title=""
                        className="mt-4 text-base text-gray-600"
                      >
                        {item.link}
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-28 py-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-calendar2-check fill-blue-900 "
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                        </svg>

                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                          Completed
                        </span>
                      </div>

                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                      >
                        <svg
                          className="w-5 h-5 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Completed;
