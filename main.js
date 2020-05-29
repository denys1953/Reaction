let wrap = document.querySelector('.wrapper');
let wrap_img = document.querySelector('.wrap_s img');
let wrap_p = document.querySelector('.wrap_s p');
let means = document.querySelector('#col_1');
let p = document.querySelector('#col_2');
let count = 0;
let count2 = 0;
let arr = [];
let middle = 0;

wrap.addEventListener('mousedown', func);

function randomInteger(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}

function func() {
   count = 0;
   this.style.background = '#f6b300';
   wrap_img.src = 'https://mozgion.ru/uploads/puzzles/13/images/waiting-icon.png';
   wrap_p.innerHTML = 'Ждите зелёный';
   wrap.removeEventListener('mousedown', func);
   let interval;
   let timeout = setTimeout(time, randomInteger(3, 6)*1000);
   wrap.addEventListener('mousedown', () => {
      if (count == 0) {
         clearInterval(interval);
         clearTimeout(timeout);
         wrap.addEventListener('mousedown', func);
         wrap_img.src = 'https://mozgion.ru//uploads/puzzles/13/images/result-icon.png';
         wrap.style.background = '#084449'; 
         wrap_p.innerHTML = 'Слишком рано!';
      }
   });
}
function time() {
   wrap.style.background = '#3cdb5e';
   wrap_p.innerHTML = 'Кликайте!';
   interval = setInterval(counter, 1);
   wrap.addEventListener('mousedown', check);
}

function check() {
   clearInterval(interval);
   wrap.removeEventListener('mousedown', check);
   wrap_img.src = 'https://mozgion.ru//uploads/puzzles/13/images/result-icon.png';
   wrap.style.background = '#084449'; 
   wrap_p.innerHTML = count + ' мс';
   middle = 0;
   wrap.addEventListener('mousedown', func);
   arr.push(count);
   for (let i = 0; i < arr.length; i++) {
      middle+=arr[i];
   }
   means.innerHTML = `Среднее ${Math.floor(middle/arr.length)} мс`;
}

function counter() {
   count=count+4;
}