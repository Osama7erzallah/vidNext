const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
const perView = 6;
let totalScroll = 0;
const delay = 4000;

imageWrapper.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = '0s';
    imageWrapper.style.left = '0';
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = '.9s';
}


const team_imageWrapper = document.querySelector('.team_image-wrapper');
const team_imageItems = document.querySelectorAll('.team_image-wrapper > *');
const team_imageLength = team_imageItems.length;
const team_perView = 5;
let team_totalScroll = 0;
const team_delay = 4000;

team_imageWrapper.style.setProperty('--team-per-View', team_perView);

for (let i = 0; i < team_perView; i++) {
  team_imageWrapper.insertAdjacentHTML('beforeend', team_imageItems[i].outerHTML);
}

let team_autoScroll = setInterval(team_scrolling, team_delay);

function team_scrolling() {
  team_totalScroll++;
  if (team_totalScroll === team_imageLength + 1) {
    clearInterval(team_autoScroll);
    team_totalScroll = 1;
    team_imageWrapper.style.transition = '0s';
    team_imageWrapper.style.left = '0';
    team_autoScroll = setInterval(team_scrolling, team_delay);
  }
  const team_widthEl = document.querySelector('.team_image-wrapper > :first-child').offsetWidth ;
  team_imageWrapper.style.left = `-${team_totalScroll * team_widthEl}px`;
  team_imageWrapper.style.transition = '1s';
}

