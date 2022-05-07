
import throttle from 'lodash.throttle';


const iframePlayer = document.querySelector('iframe');
const player = new Vimeo.Player(iframePlayer);



function onPlay({ seconds }) {
  
  localStorage.setItem('videoplayer-current-time', seconds);

}
if (localStorage.getItem('videoplayer-current-time')) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlay, 1000));