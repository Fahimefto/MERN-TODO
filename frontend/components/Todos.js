import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Todos = () => {
  const [tittles, setTittles] = useState([]);
  const [text, setText] = useState([]);
  const [des, setDes] = useState([]);

  const todoSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/todos";
      const res = await axios
        .post(url, {
          tittle: text,
          description: des,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteHandler = async (id) => {
    const url = "http://localhost:5000/api/todos/" + id;
    try {
      console.log(id);
      axios.delete(url).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const url = "http://localhost:5000/api/todos";
    axios.get(url).then((res) => {
      console.log(res.data);
      setTittles(res.data);
    });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Welcome !
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9012817d-af60-45bb-9786-89646bc1c945"
                  x="0"
                  y="0"
                  Width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
                Width="52"
                height="24"
              />
            </svg>
            <span className="relative">Add</span>
          </span>{" "}
          your TO-DO's
        </h2>
        <div class="fle flex-row justify-center">
          <form className="grid gap-3" onSubmit={todoSubmit}>
            <input
              class="w-full p-3 text-sm border-gray-800 shadow-lg rounded-lg"
              placeholder="Tittles"
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              id="tittles"
              required
            />

            <div>
              <input
                class="w-full p-3 text-sm border-gray-800 shadow-lg rounded-lg"
                placeholder="Details"
                value={des}
                onChange={(e) => setDes(e.target.value)}
                type="text"
                id="details"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full relative   items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            >
              <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:ml-4">
                POST
              </span>
            </button>
            <button class="w-full relative   items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring">
              <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:ml-4">
                RESET
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        {tittles &&
          tittles.map((tittle) => (
            <div
              className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400"
              key={tittle._id}
              onClick={() => {
                deleteHandler(tittle._id);
              }}
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <span className="text-gray-800 flex-row transition-colors duration-200 group-hover:text-indigo-500">
                {tittle.tittle}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
