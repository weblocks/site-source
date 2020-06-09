$('#navbarSupportedContent').on('show.bs.collapse', function() {
  $('#sideBar').collapse('hide');
})
$('#sideBar').on('show.bs.collapse', function() {
  $('#navbarSupportedContent').collapse('hide');
})
