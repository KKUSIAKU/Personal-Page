require("./waypoints");

function slideElement(targetId, effect) {
  new Waypoint({
    element: document.getElementById(targetId),
    handler: function effectHandler() {
      var firstChild = this.element.firstChild;
      var lastChild = this.element.lastChild;

      firstChild.addEventListener("animationend", function () {
        lastChild.className = `${lastChild.className} ${effect[1]}`;
      });

      firstChild.className = `${firstChild.className} ${effect[0]}`;
    },
    offset: "75%"
  });
}

export default slideElement; 
