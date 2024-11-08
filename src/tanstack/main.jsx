import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import WithoutQuery from "./withoutQuery";
import WithQuery from "./withQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./Posts";
import InfiniteScrollWithQuery from "./InfiniteScrollWithQuery";
import Tasks from "./Tasks";
import App from "../DragAndDrop/App";

export default function Main() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<WithoutQuery />} />
        <Route path="withQuery" element={<WithQuery />} />
        <Route path="withQuery/:id" element={<Posts />} />
        <Route
          path="infiniteScrollWithQuery"
          element={<InfiniteScrollWithQuery />}
        />
        <Route path="Tasks" element={<Tasks />} />
        <Route path="drag-and-drop-tutorial" element={<App />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={route}></RouterProvider>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
