function downFunction() {
    document.getElementById("myDropdown").classList.toggle("showdrop");
}

document.onclick = function(event) {
   if (!event.target.matches('.mainbtn')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
	
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showdrop')) {
        openDropdown.classList.remove('showdrop');
      }
    }
  }
}




