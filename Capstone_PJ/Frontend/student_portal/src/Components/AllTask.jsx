import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllTask() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  const [link, setLink] = useState("");

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (id) => {
    console.log(link, id);
    try {
      const response = await axios.put(
        `https://student-portal-3g2h.onrender.com/task/update/${id}`,
        { link }
      );
      console.log(response.data.data);
      setMsg(response.data.message);

      setError("");
      setTimeout(() => navigate("/completed"), 500);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://student-portal-3g2h.onrender.com/task");
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
      <section className="py-10  sm:py-5 lg:py-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
            {task &&
              task.map((item, i) => (
                <div
                  className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl col-start-1 col-end-7 border-2 border-indigo-500"
                  key={i}
                >
                  <div className="flex flex-col justify-between flex-1 px-5 py-6  ">
                    <div className="flex-shrink-0">
                      <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                        React Task
                      </span>
                    </div>
                    <div className="flex-1 mt-5">
                      <p className="text-2xl font-semibold">
                        <a href="#" title="" className="text-black">
                          {" "}
                          Power of habit: {item.title}
                        </a>
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        Description : {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-1 py-1">
                        {item.completed ? (
                          <>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 stroke-indigo-900 stroke-2 fill-sky-300 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                              />
                            </svg>{" "}
                            <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                              Completed
                            </span>
                          </>
                        ) : (
                          <input
                            typeof="link"
                            name="link"
                            onChange={(e) => setLink(e.target.value)}
                            value={link}
                            required
                            placeholder="submit your task link"
                            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        )}
                      </div>

                      {item.completed === false && (
                        <button
                          className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-orange-200 border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                          typeof="submit"
                          onClick={() => {
                            handleSubmit(item._id);
                          }}
                        >
                          Submit
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
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllTask;
