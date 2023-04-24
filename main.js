import App from "~/app";
import "./style.scss";
import { $ } from "~/utils/querySelector";

window.addEventListener("DOMContentLoaded", (e) => {
  new App($("#app"));
});