(function(exports) {

  function changeElement() {
    document.getElementById("app")
    .innerHTML = "Howdy";
  }

  exports.changeElement = changeElement;

})(this);

changeElement();
