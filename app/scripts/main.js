var angleStart = -30;

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
function toggleOptions(s) {
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

$('.selector button, .selector .overflow').click(function(e) {
    toggleOptions($(this).parent());
});

$('label').on('click', function(){
  $('.selector').addClass('detail');
  grafs();
});

setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js

var datosProductos = [
  {nombre:"Pan", precios:[15,20,25]},
  {nombre:"Azúcar", precios:[15,20,25]},
  {nombre:"Fideos", precios:[15,20,25]},
  {nombre:"Papa", precios:[15,20,25]},
  {nombre:"Huevos", precios:[15,20,25]},
  {nombre:"Leche", precios:[15,20,25]},
  {nombre:"Aceite", precios:[15,20,25]},
  {nombre:"Yerba", precios:[15,20,25]},
  {nombre:"Sal", precios:[15,20,25]},
  {nombre:"Harina", precios:[15,20,25]},
  {nombre:"Queso Duro", precios:[15,20,25]},
  {nombre:"Queso Blando", precios:[15,20,25]},
  {nombre:"Asado", precios:[15,20,25]},
  {nombre:"Pollo", precios:[15,20,25]},
  {nombre:"Manzana", precios:[15,20,25]}
];

$(".container").mapael({
    map : {
      name : "quincecomunas",
      // Set default plots and areas style
       defaultArea: {
      		attrs : {
      			fill : "#666",
            stroke: "#ccc",
            "stroke-width": 4
      		}
      		, attrsHover : {
      			fill: "#999"
      		}
      		, text : {
      			attrs : {
      				fill : "#ccc",
              "font-size" : 50
      			}
      			, attrsHover : {
      				fill : "#fff"
      			}
      		}
      	},
        afterInit : function($self, paper, areas, plots, options) {
          $.each(areas,function(index,elem){
            $(elem.mapElem.node)
                        .on('click', function() {
                          toggleOptions('.selector');
                    });
            }
          )
        }
      },
      areas: {
  			"comuna1" : {
  				text : {content : "1"}
  			},
        "comuna2" : {
  				text : {content : "2"}
  			},
        "comuna3" : {
  				text : {content : "3"}
  			},
        "comuna4" : {
  				text : {content : "4"}
  			},
        "comuna5" : {
  				text : {content : "5"}
  			},
        "comuna6" : {
  				text : {content : "6"}
  			},
        "comuna7" : {
  				text : {content : "7"}
  			},
        "comuna8" : {
  				text : {content : "8"}
  			},
        "comuna9" : {
  				text : {content : "9"}
  			},
        "comuna10" : {
  				text : {content : "10"}
  			},
        "comuna11" : {
  				text : {content : "11"}
  			},
        "comuna12" : {
  				text : {content : "12"}
  			},
        "comuna13" : {
  				text : {content : "13"}
  			},
        "comuna14" : {
  				text : {content : "14"}
  			},
        "comuna15" : {
  				text : {content : "15"}
  			}
  		}
});

function grafs() {
  $(".svg-container").empty();

  $("#graf").circliful({
    animationStep: 7,
    foregroundColor: '#5CB85C',
    backgroundColor: '#fff',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: 71,
    backgroundBorderWidth: 9
  });
  $("#graf1").circliful({
    animationStep: 5,
    foregroundColor: '#4E864E',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: 61
  });
  $("#graf2").circliful({
    animationStep: 3,
    foregroundColor: '#354F35',
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 0,
    percent: 47,
    text: 'de aumento en el último mes'
  });

};
