(function($){
  $(function(){

    $('.sidenav').sidenav()
    $('.dropdown').dropdown()
    $('.dropdown2').dropdown()
    $('.materialboxed').materialbox({
      onOpenStart: function (elem) {
        $(elem).css('object-fit', 'contain')
      },
      onCloseEnd: function (elem) {
        $(elem).css('object-fit', 'cover')
      }
    })
    $('.modal').modal({
      onCloseEnd: function (elem) {
        $("#kokonut")[0].pause()
      }
    })
  })
})(jQuery)
