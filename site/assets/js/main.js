window.onload = function() {
  if (window.jQuery) {  
      // jQuery is loaded  
      console.log("Work");
  } else {
      // jQuery is not loaded
      console.log("Doesn't Work");
  }
}