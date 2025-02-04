export function initializePlayer() {
  const videoPlayer = document.getElementById('main-video-player');
  const fullscreenButton = document.getElementById('fullscreen-btn');
  const playerContainer = document.querySelector('.video-container');
  const controls = document.querySelector('.player-controls');
  let hideControlsTimeout;
  
  if (Hls.isSupported()) {
    const hls = new Hls({
      debug: false,
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90,
      manifestLoadingTimeOut: 10000,
      manifestLoadingMaxRetry: 5,
    });
    
    videoPlayer.addEventListener('loadstart', () => {
      const videoSrc = videoPlayer.src;
      if (videoSrc.includes('.m3u8')) {
        hls.loadSource(videoSrc);
        hls.attachMedia(videoPlayer);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoPlayer.play().catch(error => {
            console.log("Auto-play prevented:", error);
          });
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                break;
            }
          }
        });
      }
    });
  }

  // Control visibility
  function showControls() {
    controls.style.transform = 'translateY(0)';
    clearTimeout(hideControlsTimeout);
    
    hideControlsTimeout = setTimeout(() => {
      if (!videoPlayer.paused) {
        controls.style.transform = 'translateY(100%)';
      }
    }, 3000);
  }

  playerContainer.addEventListener('mousemove', showControls);
  playerContainer.addEventListener('touchstart', showControls);

  videoPlayer.addEventListener('play', () => {
    hideControlsTimeout = setTimeout(() => {
      controls.style.transform = 'translateY(100%)';
    }, 3000);
  });

  videoPlayer.addEventListener('pause', showControls);

  // Fullscreen handling
  fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      if (playerContainer.requestFullscreen) {
        playerContainer.requestFullscreen();
      } else if (playerContainer.webkitRequestFullscreen) {
        playerContainer.webkitRequestFullscreen();
      } else if (playerContainer.msRequestFullscreen) {
        playerContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });

  // Quality toggle
  const qualityToggle = document.getElementById('quality-toggle');
  if (qualityToggle) {
    qualityToggle.addEventListener('click', () => {
      if (Hls.isSupported() && hls) {
        const currentLevel = hls.currentLevel;
        const levels = hls.levels;
        
        if (levels.length > 1) {
          // Toggle between highest and lowest quality
          if (currentLevel === -1 || currentLevel === levels.length - 1) {
            hls.currentLevel = 0;
            qualityToggle.textContent = 'SD';
          } else {
            hls.currentLevel = -1; // Auto quality
            qualityToggle.textContent = 'HD';
          }
        }
      }
    });
  }

  // Error handling
  videoPlayer.addEventListener('error', (e) => {
    console.error('Video Error:', e);
    // You could show a user-friendly error message here
  });

  // Add double tap to seek
  let lastTapTime = 0;
  const DOUBLE_TAP_THRESHOLD = 300;
  const SEEK_TIME = 10;

  playerContainer.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapPosition = e.changedTouches[0].clientX;
    const screenWidth = playerContainer.offsetWidth;

    if (currentTime - lastTapTime < DOUBLE_TAP_THRESHOLD) {
      // Double tap detected
      if (tapPosition < screenWidth / 2) {
        // Left side - rewind
        videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - SEEK_TIME);
      } else {
        // Right side - forward
        videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + SEEK_TIME);
      }
    }

    lastTapTime = currentTime;
  });
}