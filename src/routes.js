import Home from "./pages/Home.svelte";
import Login from "./pages/Login.svelte";
import NotFound from "./pages/NotFound.svelte";
import Register from "./pages/Register.svelte";
import Space from "./pages/Space.svelte";
import Spaces from "./pages/Spaces.svelte";

export default {
  "/": Home,
  "/login": Login,
  "/register": Register,
  "/spaces": Spaces,
  "/spaces/:id": Space,
  "*": NotFound,
};
