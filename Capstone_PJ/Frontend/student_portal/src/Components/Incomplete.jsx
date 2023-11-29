import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Incomplete = () => {
  const [task, setTask] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/task/pending");
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
      <section className="py-10 bg-gray-400 sm:py-16 lg:py-3">
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
                        Title
                      </span>
                    </div>

                    <div className="flex-1 mt-5">
                      <p className="text-2xl font-semibold">
                        <Link to={"/alltask"} className="text-black">
                          {item.title}
                        </Link>
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        Description : {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-28 py-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 fill-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                          Pending
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

export default Incomplete;
