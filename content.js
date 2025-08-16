let defaultSpeed = 1.75;

chrome.storage.local.get(['playbackSpeed'], (result) => {
  if (result.playbackSpeed) {
    defaultSpeed = parseFloat(result.playbackSpeed);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.playbackSpeed) {
    defaultSpeed = parseFloat(changes.playbackSpeed.newValue);
    setPlaybackSpeed();
  }
});

function setPlaybackSpeed() {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = defaultSpeed;
    
    video.addEventListener('ratechange', () => {
      if (video.playbackRate !== defaultSpeed) {
        video.playbackRate = defaultSpeed;
      }
    });
  }
}

setPlaybackSpeed();

const observer = new MutationObserver(() => {
  setPlaybackSpeed();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});