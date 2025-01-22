//baner
var swiper_1 = new Swiper(".mySwiper-1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// story
var swiper_2 = new Swiper(".mySwiper-2", {
  spaceBetween: 30,
  breakpoints: {
    1600: {
      slidesPerView: 8,
    },
    1350: {
      slidesPerView: 7,
    },
    1220: {
      slidesPerView: 6,
    },
    1000: {
      slidesPerView: 5.5,
    },
    800: {
      slidesPerView: 5,
    },
    0: {
      slidesPerView: 3.5,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//kala ha
var swiper_3 = new Swiper(".mySwiper-3", {
  spaceBetween: 15,
  breakpoints: {
    1600: {
      slidesPerView: 6,
    },
    1370: {
      slidesPerView: 4.2,
    },
    1180: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3.5,
    },
    800: {
      slidesPerView: 3.5,
    },
    0: {
      slidesPerView: 2.5,
    },
  },
  FreeMode: true,
});

//brand
var swiper_6 = new Swiper(".mySwiper-6", {
  breakpoints: {
    1600: {
      slidesPerView: 6.5,
    },
    1370: {
      slidesPerView: 6,
    },
    1180: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 6,
    },
    400: {
      slidesPerView: 5,
    },
    0: {
      slidesPerView: 3.5,
    },
  },
  FreeMode: true,
});

//weblog
var swiper_6 = new Swiper(".mySwiper-10", {
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1370: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3.5,
    },

    0: {
      slidesPerView: 2.5,
    },
  },
  FreeMode: true,
});

//p2-s1
var swiper_6 = new Swiper(".mySwiper-2-1", {
  spaceBetween: 10,
  breakpoints: {
    1600: {
      slidesPerView: 12.2,
    },
    1370: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3.5,
    },
    800: {
      slidesPerView: 7,
    },
    300: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 3,
    },
  },
  FreeMode: true,
});

// ----------------------------------------------------------------------------------

let filter_1 = document.getElementsByClassName("filter-1");
var i;
for (i = 0; i < filter_1.length; i++) {
  filter_1[i].addEventListener("click", function () {
    this.classlist.toggle("active");
    var filter = this.nextElementSibling;
    if (filter.style.display === "flex") {
      filter.style.display = "none";
    } else {
      filter.style.display = "flex";
    }
  });
}

// let filter=document.querySelectorAll(".filter")

// menu 

let menuBtn = document.getElementById("menuBtn");
let menuBg = document.getElementById("menuBg");
let body = document.getElementById("body");
let closemenu =document.getElementById("closeBtnmenu")

menuBtn.addEventListener("click", function () {
  menuBg.classList.toggle("laptop:block");
  body.classList.toggle("overflow-hidden");
});

closemenu.addEventListener("click",function(){
    menuBg.classList.toggle("laptop:block");
  body.classList.toggle("overflow-hidden");
})





let a_menu_1 = document.querySelectorAll(".item");
let a_menu_2 = document.querySelectorAll(".sub1");
let bg_menu_2 = document.querySelectorAll(".page");
let bg_menu_3 = document.querySelectorAll(".sub2");
let a_menu_2_no=document.querySelectorAll(".nom")
let left_arrow_img=document.querySelectorAll(".left-arrow")
let left_arrow_img_2=document.querySelectorAll(".left-arrow-2")



function hidee() {
  left_arrow_img.forEach(img=>{
    img.classList.add("hidden")
  })
  
}
function hidee_2() {
  left_arrow_img_2.forEach(img=>{
    img.classList.add("hidden")
  })
  
}


// menu2
a_menu_1.forEach((item) => {
  item.addEventListener("mouseenter", function () {

      
    
    hidee()
    const img = item.querySelector(".left-arrow")
    img.classList.remove("hidden")


    a_menu_1.forEach(i=>{
      i.classList.remove("bg-[#F3F8FD]")
      i.classList.remove("font-semibold")

    })
   item.classList.add("bg-[#F3F8FD]")
   item.classList.add("font-semibold")





    bg_menu_3.forEach((i) => i.classList.add("hidden"));

    bg_menu_2.forEach((i) => i.classList.add("hidden"));
    bg_menu_2.forEach((i) => i.classList.remove("shadow-[0px_10px_8px_3px]"));

    document
      .getElementById("menu-1")
      .classList.add("shadow-[0px_10px_8px_2px]");
    const targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
  });
});

//  menu3
a_menu_2.forEach((item) => {
  item.addEventListener("mouseenter", function () {

    a_menu_2_no.forEach(i=>{
      i.classList.remove("bg-[#F3F8FD]")
      i.classList.remove("font-semibold")

    })

    hidee_2()
    const img = item.querySelector(".left-arrow-2")
    img.classList.remove("hidden")




    a_menu_2.forEach(i=>{
      i.classList.remove("bg-[#F3F8FD]")
      i.classList.remove("font-semibold")

    })
   item.classList.add("font-semibold")
   item.classList.add("bg-[#F3F8FD]")









    bg_menu_3.forEach((i) => i.classList.add("hidden"));

    bg_menu_2.forEach((item) => {
      item.classList.add("shadow-[0px_10px_8px_3px]");
    });

    const targetId = this.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
  });
});

a_menu_2_no.forEach(i=>{
  i.addEventListener("mouseenter",function(){

hidee_2()
    a_menu_2.forEach(i=>{
      i.classList.remove("bg-[#F3F8FD]")
      i.classList.remove("font-semibold")

    })

    a_menu_2_no.forEach(i=>{
      i.classList.remove("bg-[#F3F8FD]")
      i.classList.remove("font-semibold")

    })
   i.classList.add("font-semibold")
   i.classList.add("bg-[#F3F8FD]")


    bg_menu_2.forEach(i=>{
      i.classList.remove("shadow-[0px_10px_8px_3px]")
    })
    bg_menu_3.forEach(i=>
      i.classList.add("hidden")
    )
  })
})

// document.getElementById('closeAll').addEventListener('click', function () {
//    document.querySelectorAll('.page').forEach(page => {
//     page.classList.remove('active');
//   });
// });



  



// a_menu_1.forEach(box=>{
//   box.addEventListener("mouseenter",()=>{
//     hidee()
//     const img = box.querySelector(".left-arrow")
//     img.classList.remove("hidden")
//   })
// })

// a_menu_1.forEach(box=>{
//   box.addEventListener("mouseenter",function(){
//     hideAllimage()
//     left_arrow_img.cla
//   })
// })



// footer and filter 
let avali =document.querySelectorAll(".one")
console.log(avali);

avali.forEach(a=>{
  a.addEventListener("click",function(){

    const sibl = a.nextElementSibling
    if(sibl){
      sibl.classList.toggle("hidden")
      sibl.classList.toggle("flex")

    }


  })
 
})



// scroll
let lastscrolly = window.scrollY
const mydiv=document.querySelector(".heder")
const scrollth=70

window.addEventListener("scroll",()=>{
  const curry =window.scrollY

  if (Math.abs(curry - lastscrolly)<scrollth) {
    return
  }


  if (curry>lastscrolly) {
    
    mydiv.classList.add("hidden")
   

    
  }
  else{
    mydiv.classList.remove("hidden")
    
  }
  lastscrolly=curry
})

// menu phone 
let menubtnP=document.getElementById("menubtnP")
let backmenuP=document.getElementById("bgmenuP")
let closemdnuP=document.getElementById("closemenuP")

menubtnP.addEventListener("click",function(){
  backmenuP.classList.remove("hidden")
  

})

closemdnuP.addEventListener("click",function(){
  backmenuP.classList.add("hidden")
})


// sec1 
let sec1=document.getElementById("sec1")
sec1.addEventListener("click",function(){
  window.location.href="iphone.html"
})