import { navigate } from "~/utils/navigate.js";
import { BASE_URL } from "~/constants/routeInfo.js";

export default function infoRoute() {
  document.querySelectorAll(".list__container").forEach(container => {
    container.addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if(!(target instanceof HTMLAnchorElement)) return null;

      e.preventDefault();
      const targetURL = target.href.replace(BASE_URL,"");
      navigate(targetURL);
    });
  })
}