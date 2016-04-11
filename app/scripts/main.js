var angleStart = -30;
var comunaActiva = {};

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(id) {
  var s = '.selector'
  var open = false;
  if($(s).hasClass('open')) {
    $(s).removeClass('detail')
    open = true;
    $(".svg-container").empty();
    window.setTimeout(function(){
      $(s).removeClass('open')
      open = false;
    }, 400);
  } else {
    $.each(datosProductos, function(index, value){
      if(datosProductos[index].id === id) {
        comunaActiva = datosProductos[index];
        $('#selector-titulo').text(comunaActiva.titulo);
        $('#selector-numero').text(comunaActiva.numero);
      }
    });
    $(s).addClass('open');
  }

  $('input[type="radio"]').prop('checked', false);

  var li = $(s).find('li');
  var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
  for(var i=0; i<li.length; i++) {
      var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
      open ? rotate(li[i],angleStart) : rotate(li[i],d);
  }
}

function grafs() {
  $(".svg-container").empty();
  var precio0, precio1, precio2 = 0;
  var titulo = '';


  $.each(comunaActiva.precios, function(index, value){
    if($('input[name=producto]:checked').val() == index) {
      titulo = comunaActiva.precios[index].nombre;
      precio0 = comunaActiva.precios[index].precios[0];
      precio1 = comunaActiva.precios[index].precios[1];
      precio2 = comunaActiva.precios[index].precios[2];
      $('#detail-product-nombre').text(titulo);
      $('#graf-label-0').text(precio0.toFixed(2));
      $('#graf-label-1').text(precio1.toFixed(2));
      $('#graf-label-2').text(precio2.toFixed(2));
    }
  });

  $("#graf").circliful({
    animationStep: 7,
    foregroundColor: '#5CB85C',
    backgroundColor: '#fff',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: precio2,
    backgroundBorderWidth: 9
  });
  $("#graf1").circliful({
    animationStep: 5,
    foregroundColor: '#4E864E',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: precio1
  });
  $("#graf2").circliful({
    animationStep: 3,
    foregroundColor: '#354F35',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: precio0,
    text: 'de aumento en el último mes'
  });

};


$('.selector button, .selector .overflow').click(function(e) {
    toggleOptions($(this).parent());
});

$('input[name=producto]').on('change', function(){
  $('.selector').addClass('detail');
  grafs();
});

$('path').on('click', function(){
  toggleOptions($(this).attr('id'));
});
