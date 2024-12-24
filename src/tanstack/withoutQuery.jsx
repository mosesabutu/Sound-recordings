import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function WithoutQuery() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network is not Ok");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        SetLoading(false);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        SetLoading(false);
      });
  }, []);
  if (loading) {
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
      <div>
        <Link to={"withQuery"}>Go to withQuery</Link>
        <br />
        <Link to={"/Tasks"}>Check Tasks </Link>
        <br />
        <Link to={"drag-and-drop-tutorial"}>Other stuff😒</Link>
        <br />
        <Link to={"zustand"}>Zustand Tutorial</Link>
        <br />
        <Link to={"infiniteScrollWithQuery"}>
          Go to InfiniteScrollWithQuery
        </Link>
        <br />
        <Link to={"classComponent"}>Check Out Class Components</Link>
      </div>
      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Post Data
      </h1>
      {data &&
        data.map((res) => {
          return (
            <div
              key={res.id}
              className="p-4 rounded-lg border border-gray-200 my-6 cursor-pointer hover:bg-gray-900"
            >
              <h2 className="font-bold text-lg mb-2 text-gray-400">
                {res.title.charAt(0).toUpperCase() + res.title.slice(1)}
              </h2>
              <p className="text-gray-400">
                {res.body.charAt(0).toUpperCase() + res.body.slice(1)}
              </p>
            </div>
          );
        })}
    </div>
  );
}
