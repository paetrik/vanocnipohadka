function display(id, link, value){
  var element = document.getElementById(id);
  var element_link = document.getElementById(link);
  if (element && element_link){
    element.style.display = value;
    element_link.style.display = 'none'
  }
}