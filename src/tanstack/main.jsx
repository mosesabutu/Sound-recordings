import { Route, Routes, BrowserRouter } from "react-router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import WithoutQuery from "./withoutQuery";
import WithQuery from "./withQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./Posts";
import InfiniteScrollWithQuery from "./InfiniteScrollWithQuery";
import Tasks from "./Tasks";
import App from "../DragAndDrop/App";
import AppZ from "../Zustand/App.jsx";
import DemoClass, { NotFound, LoginRoute, DemoFunc } from "@/Class/DemoClass";
import Header from "../Header";
import ErrorBoundry from "../ErrorBoundry";

export default function Main() {
  // const route = createBrowserRouter(
  //   [
  //     { path: "/", element: <WithoutQuery /> },
  //     { path: "withQuery", element: <WithQuery /> },
  //     { path: "withQuery/:id", element: <Posts /> },
  //     { path: "infiniteScrollWithQuery", element: <InfiniteScrollWithQuery /> },
  //     { path: "Tasks", element: <Tasks /> },
  //     { path: "drag-and-drop-tutorial", element: <App /> },
  //     { path: "zustand", element: <AppZ /> },
  //     { path: "classComponent", element: <DemoClass /> },
  //     { path: "demofunc", element: <DemoFunc /> },
  //     { path: "login", element: <LoginRoute /> },
  //     { path: "*", element: <NotFound /> },
  //   ],
  //   {
  //     future: {
  //       v7_relativeSplatPath: true,
  //       v7_fetcherPersist: true,
  //       v7_normalizeFormMethod: true,
  //       v7_partialHydration: true,
  //       v7_skipActionErrorRevalidation: true,
  //     },
  //   }
  // );

  return (
    <QueryClientProvider client={new QueryClient()}>

      <BrowserRouter>
        <ErrorBoundry>
          <Header />
        </ErrorBoundry>
        <ErrorBoundry>
          <Routes>
            <Route path="/" element={<WithoutQuery />} />
            <Route path="withQuery" element={<WithQuery />} />
            <Route path="withQuery/:id" element={<Posts />} />
            <Route path="infiniteScrollWithQuery" element={<InfiniteScrollWithQuery />} />
            <Route path="Tasks" element={<Tasks />} />
            <Route path="zustand" element={<AppZ />} />
            <Route path="drag-and-drop-tutorial" element={<App />} />
            <Route path="classComponent" element={<DemoClass />} />
            <Route path="demoFunc" element={<DemoFunc />} />
            <Route path="login" element={<LoginRoute />} />
            <Route path="*" element={<NotFound />} />
          </Routes></ErrorBoundry>
      </BrowserRouter>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}
