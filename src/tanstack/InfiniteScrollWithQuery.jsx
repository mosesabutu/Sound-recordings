import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

const getPosts = async (page) => {
  // console.log(page);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page.pageParam}`
  );
  if (!res.ok) throw new Error("Network Error");
  return res.json();
};

export default function InfiniteScrollWithQuery() {
  const { ref, inView } = useInView();
  const {
    isPending,
    error,
    data,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 20000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? null : allPages.length + 1;
    },
  });

  useEffect(() => {
    console.log("Is it inview", inView);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  const post = data ? data.pages.flatMap((page) => page) : [];

  const middleIndex = Math.floor(post.length / 2);
  const mappedData = post.map((res) => {
    // console.log(middleIndex);

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
  });
  mappedData.splice(
    middleIndex,
    0,
    <div key={"middleDiv"} className="flex items-center justify-center gap-2">
      {hasNextPage && (
        <button
          ref={ref}
          disabled={isFetchingNextPage}
          className="h-4 w-full rounded-md "
        ></button>
      )}
      {/* <p>Current Page: {page}</p> */}
    </div>
  );
  if (isPending) {
    return (
      <h1 className="text-3xl, text-center my-8 font-bold text-gray-50">
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

      <h1 className="text-3xl text-center my-8 font-bold text-gray-400">
        Post Data
      </h1>
      <div className={`${isFetching ? " opacity-90" : ""}`}>{mappedData}</div>
    </div>
  );
}
