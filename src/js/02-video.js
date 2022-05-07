
import throttle from 'lodash.throttle';


const iframePlayer = document.querySelector('iframe');
const player = new Vimeo.Player(iframePlayer);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  
  localStorage.setItem('videoplayer-current-time', seconds);

}
if (localStorage.getItem('videoplayer-current-time')) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} else {
  0;
}