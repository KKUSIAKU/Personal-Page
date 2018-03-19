import scrollPage from "./scrollPage";
import slideElement from "./slideElement";
import reverseArray from "./reverseArray";

const SLIDE_EFFECT = ["slideInLeft", "slideInRight"];

window.onload = function () {
  slideElement("web-development", SLIDE_EFFECT);
  slideElement("web-responsive", reverseArray(SLIDE_EFFECT));
  scrollPage();
};