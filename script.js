// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.show();
}

// Function to close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.close();
}

// Function to make the modal draggable
function makeModalDraggable(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.querySelector(".Bar");

  let offsetX, offsetY;

  content.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;

    document.addEventListener("mousemove", dragModal);
    document.addEventListener("mouseup", stopDragging);
  });

  function dragModal(e) {
    modal.style.left = e.clientX - offsetX + "px";
    modal.style.top = e.clientY - offsetY + "px";
  }

  function stopDragging() {
    document.removeEventListener("mousemove", dragModal);
    document.removeEventListener("mouseup", stopDragging);
  }
}

// Function to close modal when clicking outside the dialog
function removeOverlayClickHandler(modal) {
  const overlay = modal.parentElement;
  overlay.removeEventListener("click", closeOnOverlayClick);
}

//making modals draggable
// Attach click event listeners to buttons and close buttons
document.getElementById("button1").addEventListener("click", function () {
  makeModalDraggable("modal1"); // Make modal draggable when opened
});

document.getElementById("button2").addEventListener("click", function () {
  makeModalDraggable("modal2"); // Make modal draggable when opened

});
document.getElementById("button3").addEventListener("click", function () {
  makeModalDraggable("modal3"); // Make modal draggable when opened

});
document.getElementById("button4").addEventListener("click", function () {
  makeModalDraggable("modal4"); // Make modal draggable when opened

});

//making modals open and close
// Attach click event listeners to buttons and close buttons
//Modal1
document.getElementById("button1").addEventListener("click", function () {
  openModal("modal1");
});
document.getElementById("close1").addEventListener("click", function () {
  closeModal("modal1");
});
//Modal2
document.getElementById("button2").addEventListener("click", function () {
  openModal("modal2");
});
document.getElementById("close2").addEventListener("click", function () {
  closeModal("modal2");
});
//Modal3
document.getElementById("button3").addEventListener("click", function () {
  openModal("modal3");
});
document.getElementById("close3").addEventListener("click", function () {
  closeModal("modal3");
});
//Modal4
document.getElementById("button4").addEventListener("click", function () {
  openModal("modal4");
});
document.getElementById("close4").addEventListener("click", function () {
  closeModal("modal4");
});

//buttons sound for opening modal
// Get all elements with the class "sound-button"
const soundButtons = document.querySelectorAll('.sound-button');

// Get the audio element
const buttonSound = document.getElementById('audio1');
soundButtons.forEach(button => {
  button.addEventListener('click', () => {
      buttonSound.currentTime = 0; // Reset audio to start if it's already playing
      // Play the sound when the button is clicked
      buttonSound.play();
  });
});

//buttons closing modal
// Get all elements with the class "close"
const closeButtons = document.querySelectorAll('.close');

// Get the audio element
const closebuttonSound = document.getElementById('audio2');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
      closebuttonSound.currentTime = 0; // Reset audio to start if it's already playing
      // Play the sound when the button is clicked
      closebuttonSound.play();
  });
});

//changing gifs and pausing/stopping music when swapped back to original none hidden gif.
let isGif1Visible = true;
let isAudioPlaying = false;

function toggleGifs() {
    const gif1 = document.getElementById('gif1');
    const gif2 = document.getElementById('gif2');
    const audio = document.getElementById('audio');

    if (isGif1Visible) {
        gif1.style.display = 'none';
        gif2.style.display = 'inline-block';
        if (!isAudioPlaying) {
            audio.play();
            isAudioPlaying = true;
        }
    } else {
        gif1.style.display = 'inline-block';
        gif2.style.display = 'none';
        if (isAudioPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isAudioPlaying = false;
        }
    }

    isGif1Visible = !isGif1Visible;
}
