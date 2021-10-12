const menu = document.querySelector(".menu");
const bar = document.querySelector(".fa-bars");
const barCls = document.querySelector(".fa-times");
barCls.style.display = "none"
bar.onclick = () => {
  bar.style.display = "none";
  barCls.style.display = "block";
  document.querySelector(" .header nav ul").style.cssText = " top : 50px;";
};
barCls.onclick = () => {
  barCls.style.display = "none";
  bar.style.display = "block";
  document.querySelector(".header nav ul").style.cssText = " top : -400px;";
};
const grid = document.querySelectorAll(".use");

// var i = 1;
// grid.forEach((ele)=> {
//     ele.style.gridArea = `gr${i}`;
//     i++;
// });
