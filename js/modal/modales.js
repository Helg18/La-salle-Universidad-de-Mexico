$(document).on('opening', '.remodal', function () {
  console.log('opening');
});

$(document).on('opened', '.remodal', function () {
  console.log('opened');
});

$(document).on('closing', '.remodal', function (e) {
  console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('closed', '.remodal', function (e) {
  console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
});

$(document).on('confirmation', '.remodal', function () {
  console.log('confirmation');
});

$(document).on('cancellation', '.remodal', function () {
  console.log('cancellation');
});

//  Usage:
//  $(function() {
//
//    // In this case the initialization function returns the already created instance
//    var inst = $('[data-remodal-id=modal]').remodal();
//
//    inst.open();
//    inst.close();
//    inst.getState();
//    inst.destroy();
//  });

//  The second way to initialize:
var modal = $('[data-remodal-id=modal2]').remodal({
  modifier: 'with-red-theme'
});


function test(que){
  console.log(que);
  modal.open();
}

/*$(document).on('opening', '.remodal', function (x,y) {
  console.log(x);
  console.log(y);
  console.log('Modal is opening');
});*/