function setHtmlFontSize() {
  var html = document.documentElement;
  var vw = html.clientWidth;
  vw = vw <= 320 ? 320 : vw;
  vw = vw >= 750 ? 750 : vw;
  html.style.fontSize = vw / 7.5 + 'px';
}

//页面载入时 执行
document.addEventListener('DOMContentLoaded', setHtmlFontSize);

//页面更改大小时 执行
window.onresize = setHtmlFontSize;
var currentUrl = window.location;

var aLis = document.querySelectorAll('.nav-top li');

var dialogP = document.querySelectorAll('.nav-dialog-content p');
var url = window.location.href;

if (url.indexOf('about') !== -1) {
  navGetColor(1);
} else if (url.indexOf('product') !== -1) {
  navGetColor(2);
} else if(url.indexOf('contact') !== -1){
  navGetColor(3);
} else {
  navGetColor(0);
}

function navGetColor(item) {
  for (var i = 0; i < aLis.length; i++) {
    if (i == item) {
      aLis[item].className = 'active';
      dialogP[item].className = 'active';
    } else {
      aLis[i].className = '';
      dialogP[i].className = '';
    }
  }
}
//顶部菜单栏nav颜色改变

// for(var i = 0; i < aLis.length; i++) {
//     aLis[i].index = i;
//     aLis[i].onclick = function() {
//         for(var j = 0; j < aLis.length; j++) {
//             aLis[j].className = '';
//         }
//         this.className = "active";
//     };
// }
//选项卡

var cmpynews = document.querySelectorAll('.company-news-content-item');
for (var i = 0; i < cmpynews.length; i++) {
  cmpynews[i].index = i;
  cmpynews[i].onclick = function () {
    for (var j = 0; j < cmpynews.length; j++) {
      cmpynews[j].classList.remove('active');
    }
    this.classList.add('active');
  };
}

//首页新闻

// var newscontent = document.querySelectorAll('.news-content-nav li')
// var newbox  = document.querySelectorAll('.new-content-box')
// for (var i = 0; i < newscontent.length; i++) {
//     newscontent[i].index = i;
//     newscontent[i].onclick = function () {
//         for (var j = 0; j < newscontent.length; j++) {
//             newscontent[j].classList.remove('active')
//             newbox[j].classList.remove('show')
//         }
//         this.classList.add('active')
//         newbox[this.index].classList.add('show')
//     };
// }
//新闻页切换

var aboutbox = document.querySelectorAll('.about-content-box');

var aboutli = document.querySelectorAll('.about-content-nav li');

if (currentUrl.pathname === '/about/' && currentUrl.search) {
  for (var i = 0; i < aboutli.length; i++) {
    aboutli[i].classList.remove('active');
    aboutbox[i].classList.remove('show');
  }
  if (currentUrl.search.split('=')[1] === 'culture') {
    aboutli[0].classList.add('active');
    aboutbox[0].classList.add('show');
  } else if (currentUrl.search.split('=')[1] === 'development') {
    aboutli[1].classList.add('active');
    aboutbox[1].classList.add('show');
  } else if (currentUrl.search.split('=')[1] === 'background') {
    aboutli[2].classList.add('active');
    aboutbox[2].classList.add('show');
  }
}
for (var i = 0; i < aboutli.length; i++) {
  aboutli[i].index = i;
  aboutli[i].onclick = function () {
    for (var j = 0; j < aboutli.length; j++) {
      aboutli[j].classList.remove('active');
      aboutbox[j].classList.remove('show');
    }
    this.classList.add('active');
    aboutbox[this.index].classList.add('show');
  };
}
//文化选项卡

var joinbox = document.querySelectorAll('.join-content-box');

var joinli = document.querySelectorAll('.join-content-nav li');

if (currentUrl.pathname === '/join/' && currentUrl.search) {
  for (var i = 0; i < joinli.length; i++) {
    joinli[i].classList.remove('active');
    joinbox[i].classList.remove('show');
  }
  if (currentUrl.search.split('=')[1] === 'recruit') {
    joinli[0].classList.add('active');
    joinbox[0].classList.add('show');
  } else if (currentUrl.search.split('=')[1] === 'school') {
    joinli[1].classList.add('active');
    joinbox[1].classList.add('show');
  }
}
for (var i = 0; i < joinli.length; i++) {
  joinli[i].index = i;
  joinli[i].onclick = function () {
    for (var j = 0; j < joinli.length; j++) {
      joinli[j].classList.remove('active');
      joinbox[j].classList.remove('show');
    }
    this.classList.add('active');
    joinbox[this.index].classList.add('show');
  };
}
//招聘信息选项卡

var timeplane = document.querySelectorAll('.date-plane-item');

var timeline = document.querySelectorAll('.company-deve .time-line ul li b');
for (var i = 0; i < timeline.length; i++) {
  timeline[i].index = i;
  timeline[i].onclick = function () {
    for (var j = 0; j < timeline.length; j++) {
      timeline[j].parentElement.className = '';
      timeplane[j].classList.remove('show');
    }
    this.parentElement.className = 'active';
    timeplane[this.index].classList.add('show');
  };
}
//时间线

var heycourse = document.querySelectorAll('.heyme-course-content');
var timelinetwo = document.querySelectorAll(
  '.about-content-box  .time-line ul li b'
);
for (var i = 0; i < timelinetwo.length; i++) {
  timelinetwo[i].index = i;
  timelinetwo[i].onclick = function () {
    for (var j = 0; j < timelinetwo.length; j++) {
      timelinetwo[j].parentElement.className = '';
      heycourse[j].classList.remove('show');
    }
    this.parentElement.className = 'active';
    heycourse[this.index].classList.add('show');
  };
}

var navdialog = document.querySelector('.nav-dialog');
var navdialogcontent = document.querySelector('.nav-dialog-content');
document.querySelector('.nav-btn').onclick = function () {
  this.classList.contains('closed')
    ? this.classList.remove('closed')
    : this.classList.add('closed');
  if (navdialog.classList.contains('closed')) {
    navdialog.classList.remove('closed');
    document.body.style.overflow = 'hidden';
  } else {
    navdialog.classList.add('closed');
    document.body.style.overflow = 'auto';
  }
};
navdialog.addEventListener('click', function () {
  this.classList.add('closed');
  document.querySelector('.nav-btn').classList.remove('closed');
  document.body.style.overflow = 'auto';
});
navdialogcontent.addEventListener('click', function (ev) {
  ev.stopPropagation();
}); //弹窗关闭

var nav = document.getElementById('nav');
var docEl = document.documentElement;
var moveHight = 0;
window.matchMedia('(max-width: 767px)').matches
  ? (moveHight = 200)
  : (moveHight = 550);
window.onscroll = function () {
  var top = docEl.scrollTop;
  nav.classList[top >= moveHight ? 'add' : 'remove']('fixed-head');
};
//顶部导航栏

//单击小箭头旋转
var joinitem = document.querySelectorAll('.join-job-cont-item-p');
var rotatei = document.querySelectorAll('.rotate');
for (var i = 0; i < joinitem.length; i++) {
  joinitem[i].index = i;
  joinitem[i].onclick = function () {
    if (rotatei[this.index].classList.contains('rotated')) {
      rotatei[this.index].classList.remove('rotated');
    } else {
      rotatei[this.index].classList.add('rotated');
    }
  };
}

var indexBox = document.querySelectorAll('.index_content-box');

var indexLi = document.querySelectorAll('.index_content-nav li');

if (currentUrl.pathname === '/' && currentUrl.search) {
  for (var i = 0; i < indexLi.length; i++) {
    indexLi[i].classList.remove('active');
    indexBox[i].classList.remove('show');
  }
}

for (var i = 0; i < indexLi.length; i++) {
  indexLi[i].index = i;
  indexLi[i].onclick = function () {
    for (var j = 0; j < indexLi.length; j++) {
      indexLi[j].classList.remove('active');
      indexBox[j].classList.remove('show');
    }
    this.classList.add('active');
    indexBox[this.index].classList.add('show');
  };
}

if(currentUrl.pathname === '/product/') {
  var mulu = document.getElementsByClassName("menu-item")[0];
  var item = mulu.querySelectorAll("li");
  var content = document.getElementById("content-right");
  var title = content.querySelector("h3");
  title.innerHTML = item[0].innerHTML;
  var content_ul = content.querySelectorAll("ul");
  content_ul[0].classList.remove("hide");
  for(var i = 0; i < item.length; i++) {
    item[i].index = i;
    item[i].onclick = function() {
        title.innerHTML = this.innerHTML;
        for(var j = 0; j < content_ul.length; j++) {
            if(j === this.index) {
                content_ul[j].classList.remove("hide");
            }else {
                content_ul[j].classList.add("hide");
            }
        }
    }
  }
}