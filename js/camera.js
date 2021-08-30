(function() {
    if (
      !"mediaDevices" in navigator 
    ) {
      alert("Camera API is not available in your browser");
      return;
    }
  
    // get page elements
    const video = document.querySelector("#video");
    
  
    // video constraints
    const constraints = {
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440,
        },
      },
    };
  
    // use front face camera
    let useFrontCamera = true;
  
    // current video stream
    let videoStream;
  
    // handle events
    
  
    // take screenshot

    // switch camera
    // btnChangeCamera.addEventListener("click", function () {
    //   useFrontCamera = !useFrontCamera;
  
    //   initializeCamera();
    // });
  
    // stop video stream
    function stopVideoStream() {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }
  
    // initialize
    async function initializeCamera() {
      stopVideoStream();
      constraints.video.facingMode = useFrontCamera ? "user" : "environment";
  
      try {
        videoStream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = videoStream;
      } catch (err) {
        alert("Could not access the camera");
      }
    }
  
    initializeCamera();
  })();