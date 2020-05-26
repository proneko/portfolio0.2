window.addEventListener('DOMContentLoaded', function() {
  $(window).scroll(function() {
    
    var dy = $(this).scrollTop();
    console.log(dy);

    
    $('#bg1').css('position', '0 0');

    if (dy > 0) {
      $('#bg1').css('opacity', '1');
      $('#bg1').css('top', '0');
      $('#yazi').css('opacity', '1');
    }
    if (dy > 100) {
      $('#bg1').css('opacity', '0.9');
      $('#bg1').css('top', '-10px');
      $('#yazi').css('opacity', '0.9');
    }
    if (dy > 200) {
      $('#bg1').css('opacity', '0.8');
      $('#bg1').css('top', '-20px');
      $('#yazi').css('opacity', '0.8');
    }
    if (dy > 300) {
      $('#bg1').css('opacity', '0.7');
      $('#bg1').css('top', '-30px');
      $('#yazi').css('opacity', '0.7');
    }
    if (dy > 400) {
      $('#bg1').css('opacity', '0.6');
      $('#bg1').css('top', '-40px');
      $('#yazi').css('opacity', '0.6');
    }
    if (dy > 500) {
      $('#bg1').css('opacity', '0.5');
      $('#bg1').css('top', '-50px');
      $('#yazi').css('opacity', '0.5');
    }
    if (dy > 600) {
      $('#bg1').css('opacity', '0.4');
      $('#bg1').css('top', '-60px');
      $('#yazi').css('opacity', '0.4');
    }
    if (dy > 700) {
      $('#bg1').css('opacity', '0.3');
      $('#bg1').css('top', '-70px');
      $('#yazi').css('opacity', '0.3');
    }
    if (dy > 800) {
      $('#bg1').css('opacity', '0.2');
      $('#bg1').css('top', '-80px');
      $('#yazi').css('opacity', '0.2');
    }
    if (dy > 900) {
      $('#bg1').css('opacity', '0.1');
      $('#bg1').css('top', '-90px');
      $('#yazi').css('opacity', '0.1');
    }
    if (dy > 1000) {
      $('#bg1').css('opacity', '0');
      $('#bg1').css('top', '-100px');
      $('#yazi').css('opacity', '0');
    }


    if (dy > 1100) {
      $('#bg2').css('opacity', '0');
      $('#bg2').css('top', '100px');
    }else {
      $('#bg2').css('opacity', '0');
    }
    if (dy > 1200) {
      $('#bg2').css('opacity', '0.1');
      $('#bg2').css('top', '90px');
    }
    if (dy > 1300) {
      $('#bg2').css('opacity', '0.2');
      $('#bg2').css('top', '80px');
    }
    if (dy > 1400) {
      $('#bg2').css('opacity', '0.3');
      $('#bg2').css('top', '70px');
    }
    if (dy > 1500) {
      $('#bg2').css('opacity', '0.4');
      $('#bg2').css('top', '60px');
    }
    if (dy > 1600) {
      $('#bg2').css('opacity', '0.6');
      $('#bg2').css('top', '50px');
    }
    if (dy > 1700) {
      $('#bg2').css('opacity', '0.8');
      $('#bg2').css('top', '40px');
    }
    if (dy > 1800) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '30px');
    }
    if (dy > 1900) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '20px');
    }
    if (dy > 2000) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '10px');
    }
    if (dy > 2100) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '0');
    }
    if (dy > 2200) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '-10px');
    }
    if (dy > 2300) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '-20px');
    }
    if (dy > 2400) {
      $('#bg2').css('opacity', '1');
      $('#bg2').css('top', '-30px');
    }
    if (dy > 2500) {
      $('#bg2').css('opacity', '0.8');
      $('#bg2').css('top', '-40px');
    }
    if (dy > 2600) {
      $('#bg2').css('opacity', '0.6');
      $('#bg2').css('top', '-50px');
    }
    if (dy > 2700) {
      $('#bg2').css('opacity', '0.4');
      $('#bg2').css('top', '-60px');
    }
    if (dy > 2800) {
      $('#bg2').css('opacity', '0.3');
      $('#bg2').css('top', '-70px');
    }
    if (dy > 2900) {
      $('#bg2').css('opacity', '0.2');
      $('#bg2').css('top', '-80px');
    }
    if (dy > 3000) {
      $('#bg2').css('opacity', '0.1');
      $('#bg2').css('top', '-90px');
    }
    if (dy > 3100) {
      $('#bg2').css('opacity', '0');
      $('#bg2').css('top', '-100px');
    }


    if (dy > 3200) {
      $('#bg3').css('opacity', '0');
      $('#bg3').css('top', '100px');
    }else {
      $('#bg3').css('opacity', '0');
    }
    if (dy > 3300) {
      $('#bg3').css('opacity', '0.1');
      $('#bg3').css('top', '90px');
    }
    if (dy > 3400) {
      $('#bg3').css('opacity', '0.2');
      $('#bg3').css('top', '80px');
    }
    if (dy > 3500) {
      $('#bg3').css('opacity', '0.3');
      $('#bg3').css('top', '70px');
    }
    if (dy > 3600) {
      $('#bg3').css('opacity', '0.4');
      $('#bg3').css('top', '60px');
    }
    if (dy > 3700) {
      $('#bg3').css('opacity', '0.6');
      $('#bg3').css('top', '50px');
    }
    if (dy > 3800) {
      $('#bg3').css('opacity', '0.8');
      $('#bg3').css('top', '40px');
    }
    if (dy > 3900) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '30px');
    }
    if (dy > 4000) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '20px');
    }
    if (dy > 4100) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '10px');
    }
    if (dy > 4200) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '0');
    }
    if (dy > 4300) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '-10px');
    }
    if (dy > 4400) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '-20px');
    }
    if (dy > 4500) {
      $('#bg3').css('opacity', '1');
      $('#bg3').css('top', '-30px');
    }
    if (dy > 4600) {
      $('#bg3').css('opacity', '0.8');
      $('#bg3').css('top', '-40px');
    }
    if (dy > 4700) {
      $('#bg3').css('opacity', '0.6');
      $('#bg3').css('top', '-50px');
    }
    if (dy > 4800) {
      $('#bg3').css('opacity', '0.4');
      $('#bg3').css('top', '-60px');
    }
    if (dy > 4900) {
      $('#bg3').css('opacity', '0.3');
      $('#bg3').css('top', '-70px');
    }
    if (dy > 5000) {
      $('#bg3').css('opacity', '0.2');
      $('#bg3').css('top', '-80px');
    }
    if (dy > 5100) {
      $('#bg3').css('opacity', '0.1');
      $('#bg3').css('top', '-90px');
    }
    if (dy > 5200) {
      $('#bg3').css('opacity', '0');
      $('#bg3').css('top', '-100px');
    }


    if (dy > 5300) {
      $('#bg4').css('opacity', '0');
      $('#bg4').css('z-index', '9');
      $('#bg4').css('top', '100px');
    }else {
      $('#bg4').css('z-index', '-9');
      $('#bg4').css('opacity', '0');
    }
    if (dy > 5400) {
      $('#bg4').css('opacity', '0.1');
      $('#bg4').css('top', '90px');
    }
    if (dy > 5500) {
      $('#bg4').css('opacity', '0.2');
      $('#bg4').css('top', '80px');
    }
    if (dy > 5600) {
      $('#bg4').css('opacity', '0.3');
      $('#bg4').css('top', '70px');
    }
    if (dy > 5700) {
      $('#bg4').css('opacity', '0.4');
      $('#bg4').css('top', '60px');
    }
    if (dy > 5800) {
      $('#bg4').css('opacity', '0.6');
      $('#bg4').css('top', '50px');
    }
    if (dy > 5900) {
      $('#bg4').css('opacity', '0.8');
      $('#bg4').css('top', '40px');
    }
    if (dy > 6000) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '30px');
    }
    if (dy > 6100) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '20px');
    }
    if (dy > 6200) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '10px');
    }
    if (dy > 6300) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '0');
    }
    if (dy > 6400) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '-10px');
    }
    if (dy > 6500) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '-20px');
    }
    if (dy > 6600) {
      $('#bg4').css('opacity', '1');
      $('#bg4').css('top', '-30px');
    }
    if (dy > 6700) {
      $('#bg4').css('opacity', '0.8');
      $('#bg4').css('top', '-40px');
    }
    if (dy > 6800) {
      $('#bg4').css('opacity', '0.6');
      $('#bg4').css('top', '-50px');
    }
    if (dy > 6900) {
      $('#bg4').css('opacity', '0.4');
      $('#bg4').css('top', '-60px');
    }
    if (dy > 7000) {
      $('#bg4').css('opacity', '0.3');
      $('#bg4').css('top', '-70px');
    }
    if (dy > 7100) {
      $('#bg4').css('opacity', '0.2');
      $('#bg4').css('top', '-80px');
    }
    if (dy > 7200) {
      $('#bg4').css('opacity', '0.1');
      $('#bg4').css('top', '-90px');
    }
    if (dy > 7300) {
      $('#bg4').css('opacity', '0');
      $('#bg4').css('top', '-100px');
    }

    if (dy > 7400) {
      $('#bg5').css('opacity', '0');
      $('#bg0').css('opacity', '1');
      $('#bg5').css('z-index', '99');
    }else {
      $('#bg5').css('z-index', '-99');
      $('#bg5').css('opacity', '0');
    }
    if (dy > 7500) {
      $('#bg5').css('opacity', '0.1');
      $('#bg0').css('opacity', '1');
    }
    if (dy > 7600) {
      $('#bg5').css('opacity', '0.2');
      $('#bg0').css('opacity', '1');
    }
    if (dy > 7700) {
      $('#bg5').css('opacity', '0.3');
      $('#bg0').css('opacity', '1');
    }
    if (dy > 7800) {
      $('#bg5').css('opacity', '0.4');
      $('#bg0').css('opacity', '0.8');
    }
    if (dy > 7900) {
      $('#bg5').css('opacity', '0.6');
      $('#bg0').css('opacity', '0.6');
    }
    if (dy > 8000) {
      $('#bg5').css('opacity', '0.8');
      $('#bg0').css('opacity', '0.4');
    }
    if (dy > 8100) {
      $('#bg5').css('opacity', '1');
      $('#bg0').css('opacity', '0.3');
    }
    if (dy > 8200) {
      $('#bg5').css('opacity', '1');
      $('#bg0').css('opacity', '0.2');
    }
    if (dy > 8300) {
      $('#bg5').css('opacity', '1');
      $('#bg0').css('opacity', '0.1');
    }
    if (dy > 8400) {
      $('#bg5').css('opacity', '1');
      $('#bg0').css('opacity', '0');
    }

  });
});
