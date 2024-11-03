import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const getPosts = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  );
  if (!res.ok) throw new Error("Network Error");
  return res.json();
};

export default function WithQuery() {
  const [page, setPage] = useState(1);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["postData", page],
    queryFn: () => getPosts(page),
    placeholderData: keepPreviousData,
    staleTime: 20000,
  });

  if (isPending) {
    return (
      <h1 className="text-3xl, text-center my-8 font-bold text-gray-800">
        Loading
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Error: {error.message}
      </h1>
    );
  }
  return (
    <div className="m-4 max-w-[600px] w-4/5 mx-auto">
      <NavLink to={"/"}>Go to withoutQuery</NavLink>
      <br />
      <NavLink to={"infiniteScrollWithQuery"}>
        Go to InfiniteScrollWithQuery
      </NavLink>

      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Post Data Page: {page}
      </h1>
      <div className={`${isFetching ? "bg-gray-300 opacity-50" : ""}`}>
        {data &&
          data.map((res) => {
            return (
              <NavLink
                to={`${res.id}`}
                key={res.id}
                className="p-4 rounded-lg block border border-gray-200 my-6 cursor-pointer hover:bg-gray-900"
              >
                <h2 className="font-bold text-lg mb-2 text-gray-400">
                  {res.title.charAt(0).toUpperCase() + res.title.slice(1)}
                </h2>
                <p className="text-gray-400">
                  {res.body.charAt(0).toUpperCase() + res.body.slice(1)}
                </p>
              </NavLink>
            );
          })}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => {
            setPage((prev) => (prev > 1 ? prev - 1 : 1));
          }}
          className="px-3 py-1 bg-blue-500 rounded-md text-white font-bold"
        >
          Prev
        </button>
        <p>Current Page: {page}</p>
        <button
          className="px-3 py-1 bg-blue-500 rounded-md text-white font-bold"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
