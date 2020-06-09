$('#sideBar').on('show.bs.collapse', function() {
  $('#side-menu').removeClass('d-none');
  $('#side-menu').removeClass('d-sm-block');
})
$('#sideBar').on('hide.bs.collapse', function() {
  $('#side-menu').addClass('d-none');
  $('#side-menu').addClass('d-sm-block');
})
