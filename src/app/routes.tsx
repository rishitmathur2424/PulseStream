import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { EventPage } from "./pages/EventPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/event/:eventId",
    Component: EventPage,
  },
]);
