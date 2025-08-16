document.addEventListener('DOMContentLoaded', () => {
  const speedSelect = document.getElementById('speedSelect');
  const status = document.getElementById('status');
  const currentVideo = document.getElementById('currentVideo');
  const videoTitle = document.getElementById('videoTitle');

  
  chrome.storage.local.get(['playbackSpeed'], (result) => {
    if (result.playbackSpeed) {
      speedSelect.value = result.playbackSpeed;
    }
  });

  
  speedSelect.addEventListener('change', (e) => {
    const newSpeed = e.target.value;
    chrome.storage.local.set({ playbackSpeed: newSpeed }, () => {
      status.textContent = '✓ Speed updated!';
      
      
      setTimeout(() => {
        status.textContent = '';
      }, 2000);

      
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0].url.includes('youtube.com/watch')) {
          currentVideo.classList.add('active');
          videoTitle.textContent = tabs[0].title.replace(' - YouTube', '');
        } else {
          currentVideo.classList.remove('active');
        }
      });
    });
  });
});