const header_container = document.querySelector(".header_container");
const top_container = document.querySelector(".top_container");

const logo_work_type = document.querySelector('.logo_work_type');
const logo_work_type_item = document.querySelectorAll('.logo_work_type_item');
const logo_work_type_item_text = document.querySelectorAll('.logo_work_type_item_text');

const thirdBurger = document.querySelector('.thirdBurger');


const hover_container = document.querySelector('.hover_container');
const hover_block = document.querySelectorAll('.hover_block');
const hover_text_container = document.querySelectorAll('.hover_text_container');
const unhover_container = document.querySelectorAll('.unhover_container');
const hover_block_animate_array = ["hover_block_1", "hover_block_2", "hover_block_3", "hover_block_4"];


const clin_continer_blue_menu_item = document.querySelectorAll('.clin_continer_blue_menu_item');
const arrow = document.querySelectorAll('.arrow');

const left_slide_container_item = document.querySelectorAll('.left_slide_container_item');
const item_slide = document.querySelectorAll('.item_slide');
const bg_array = ['images/clin_1.png', 'images/clin_3.png', 'images/clin_2.png', 'images/clin_4.png'];
const front_slide_container = document.querySelector('.front_slide_container');

const front_slide_x = document.querySelectorAll('.front_slide_x');


const clin_container_prew = document.querySelector('.clin_container_prew');
const clin_continer_blue_menu = document.querySelector('.clin_continer_blue_menu');


const pay_clin = document.querySelector('.pay_clin');
const pay_clin_circle = document.querySelector('.pay_clin_circle');



if (window.matchMedia("(max-width: 480px)").matches) {
      header_container.classList.remove('header_container');
      header_container.classList.add('header_container_active');
    } 





  logo_work_type.addEventListener('click', () => {
    for (let i = 0; i < logo_work_type_item.length; i++) {
      logo_work_type_item[i].classList.toggle('logo_work_type_item_active');
      logo_work_type_item_text[i].classList.toggle('logo_work_type_item_text_active');
    }
  });



  window.addEventListener('scroll', function() { 
    const top_menu_down = parseInt(window.getComputedStyle(header_container).getPropertyValue("height").match(/\d+/));
    if (window.matchMedia("(max-width: 480px)").matches) {
      header_container.classList.remove('header_container');
      header_container.classList.add('header_container_active');
    } 
    else {
      if (top_menu_down < Math.round(pageYOffset)) {
        header_container.classList.add('header_container_active');
      }
      else {
        header_container.classList.remove('header_container_active');
      }



      if (window.matchMedia("(min-width: 768px)").matches) {
        const top_container_height = parseInt(window.getComputedStyle(top_container).getPropertyValue("height").match(/\d+/));
        const animate_start = top_container_height - (top_container_height*0.5);
        if (pageYOffset>animate_start) {
          for(let i = 0; i < hover_block.length; i++){
            hover_block[i].classList.add(hover_block_animate_array[i]);
          }
        }
        const hover_container_height = parseInt(window.getComputedStyle(hover_container).getPropertyValue("height").match(/\d+/));
        const animate_scale_start = parseInt(hover_container.offsetTop + (hover_container_height*0.5)) ;
        if (pageYOffset>animate_scale_start) {
          front_slide_container.classList.add('front_slide_container_after_scroll');
          clin_container_prew.classList.add('clin_container_prew_after_scroll');
          clin_continer_blue_menu.classList.add('clin_continer_blue_menu_after_scroll');


          pay_clin.classList.remove('pay_clin_bounce_animate');
          pay_clin.classList.add('pay_clin_hide');



        } else {
          front_slide_container.classList.remove('front_slide_container_after_scroll');
          clin_container_prew.classList.remove('clin_container_prew_after_scroll');
          clin_continer_blue_menu.classList.remove('clin_continer_blue_menu_after_scroll');
          for(let i = 0; i < left_slide_container_item.length; i++){
            left_slide_container_item[i].classList.remove('left_slide_container_item_active');
          }



          pay_clin.classList.add('pay_clin_bounce_animate');
          pay_clin.classList.remove('pay_clin_hide');
        }
        if (!(header_container.classList.contains('header_container'))) {
        header_container.classList.add('header_container');
      }
      }
      

      

    }
  });



thirdBurger.addEventListener('click', () => {
  thirdBurger.classList.toggle('third_burger_active');
  header_container.classList.toggle('header_container_active_click');
});


for (let i = 0; i < hover_block.length; i++) {
  hover_block[i].addEventListener('mouseover', () => {
    hover_text_container[i].classList.add('hover_text_container_active');
    unhover_container[i].classList.add('unhover_container_active');
  });

  hover_block[i].addEventListener('mouseout', () => {
    hover_text_container[i].classList.remove('hover_text_container_active');
    unhover_container[i].classList.remove('unhover_container_active');
  });

}


for (let i = 0; i < clin_continer_blue_menu_item.length; i++) {
  clin_continer_blue_menu_item[i].addEventListener('click', () => {
    for (let y = 0; y < clin_continer_blue_menu_item.length; y++) {
      if (i === y) {
        arrow[y].classList.add('arrow_active');
        setTimeout(() =>  {
          front_slide_x[y].classList.add('front_slide_x_active');
        }, 1000);
      }
        else {
          arrow[y].classList.remove('arrow_active');
          front_slide_x[y].classList.remove('front_slide_x_active');
        }
    }
  });


    clin_continer_blue_menu_item[i].addEventListener('mouseover', () => {
    for (let y = 0; y < clin_continer_blue_menu_item.length; y++) {
      if (i === y) {
        clin_continer_blue_menu_item[y].classList.add('clin_continer_blue_menu_item_active');
        left_slide_container_item[y].classList.add('left_slide_container_item_active');
        item_slide[y].classList.add('item_slide_active');
        setTimeout(() =>  {
          front_slide_container.style.backgroundImage = 'url(' + bg_array[y] + ')';
        }, 1500);
      } else {
        left_slide_container_item[y].classList.remove('left_slide_container_item_active');
        item_slide[y].classList.remove('item_slide_active');
        clin_continer_blue_menu_item[y].classList.remove('clin_continer_blue_menu_item_active');
      }

    }
  });


    clin_continer_blue_menu_item[i].addEventListener('mouseout', () => {
    for (let y = 0; y < clin_continer_blue_menu_item.length; y++) {
        if (!(i === y)) {

        }
    }
  });


}



////////////////////////////////////


let pay_clin_x_center;
let pay_clin_y_center;
let mouse_cord_x;
let mouse_cord_y;
  let coefficient_x;
  let coefficient_y;

const dil = 1.5;




window.addEventListener('mousemove', function(event) {
  mouse_cord_x = event.pageX;
  mouse_cord_y = event.pageY;


});


  pay_clin.addEventListener('mouseover', () => {
    pay_clin.classList.add('pay_clin_hover');
    pay_clin.classList.remove('pay_clin_bounce_animate');    

    pay_clin_x_center = ((pay_clin.getBoundingClientRect().width)/2) + pay_clin.getBoundingClientRect().x + window.scrollX;
    pay_clin_y_center = ((pay_clin.getBoundingClientRect().height)/2) + pay_clin.getBoundingClientRect().y + window.scrollY;


    if (mouse_cord_x<pay_clin_x_center) {
        coefficient_x = (mouse_cord_x - pay_clin_x_center)/dil;
      }
        else {
          coefficient_x = (mouse_cord_x - pay_clin_x_center)/dil;
        }
  
    if (mouse_cord_y<pay_clin_y_center) {
          coefficient_y = (mouse_cord_y - pay_clin_y_center)/dil;
        }
        else {
          coefficient_y = (mouse_cord_y - pay_clin_y_center)/dil;
        }


    pay_clin_circle.style.cssText = 'transform: translate(' + coefficient_x + 'px, ' + coefficient_y + 'px); transition: 1s;';



  });

  pay_clin.addEventListener('mouseout', () => {
    pay_clin.classList.remove('pay_clin_hover');
    pay_clin.classList.add('pay_clin_bounce_animate');
    pay_clin_circle.style.cssText = '';
  });
