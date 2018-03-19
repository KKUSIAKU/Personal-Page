// this depends on jQuery which is inserted on the html 
// not safe yet, bind this to window onload two 
function  scrollPage() {
  var menu = document.getElementsByClassName("nav-item");
  var  second = 1000;

  function scrollBodyTo(X) {
    $("html").animate({
      scrollTop: X
    }, second);
  }

  function scrollElementToView(e) {
    e.preventDefault();
    var sectionId = e.target.attributes.href.nodeValue.substr(1);
    var section = document.getElementById(sectionId);
    scrollBodyTo(section.offsetTop);
  }

  for (let menuItem of menu) {
    menuItem.addEventListener("click", scrollElementToView.bind(null));
  }
}

export default scrollPage; 