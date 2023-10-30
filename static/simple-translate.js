let timer;
  let isTyping = false;
  let inputText = ""; // Declare inputText in a wider scope
  
function translateText() {
  inputText = $("#input_text").val().trim(); // Update the inputText in the wider scope
  var sourceLang = $("#source_lang").val();
  var targetLang = $("#target_lang").val();

  // Check if the input text is not empty or just spaces
  if (inputText.trim() !== "") {
    if (isTyping) {
      clearTimeout(timer);
    }
    isTyping = true;

    timer = setTimeout(function () {
      $.post(
        "/translate",
        {
          text: inputText,
          source_lang: sourceLang,
          target_lang: targetLang,
        },
        function (data) {
          console.log(data);
          if (data != "Unknown") {
            $("#translated_text").val(data);
          }
        }
      );
    }, 500); // Translate after 1 second of idle time
  }
}

function detectLang() {
  var inputText = $("#input_text").val().trim();

  // Check if the input text is not empty or just spaces
  var sourceLangDropdown = $("#source_lang");

  if (inputText.trim() !== "") {
    $.post(
      "/detect-lang",
      {
        text: inputText,
      },
      function (data) {
        if (data === "Unknown") {
          sourceLangDropdown.val("en");
        } else {
          // Check if the detected language is not in the selected options
          if ($("#source_lang option[value='" + data + "']").length === 0) {
            sourceLangDropdown.val("en"); // Set to English ('en') if not found
          } else {
            sourceLangDropdown.val(data);
          }
        }
      }
    );
  } else {
    sourceLangDropdown.val("en");
  }
}
function swapTextAndOptions() {
  var sourceLangSelect = $("#source_lang");
  var targetLangSelect = $("#target_lang");
  var translatedText = $("#translated_text").val();

  // Swap selected options
  var sourceLangValue = sourceLangSelect.val();
  sourceLangSelect.val(targetLangSelect.val());
  targetLangSelect.val(sourceLangValue);

  // Swap text
  $("#input_text").val(translatedText);
}

$(document).ready(function () {
  $("#input_text").on("input", translateText);

  // Listen for spacebar key press
  $("#input_text").keydown(function (event) {
    if (event.keyCode === 32) {
      // 32 is the key code for spacebar
      translateText();
    }
  });
  $("#source_lang").change(function () {
    // Call translateText when the source language selection changes
    translateText();
  });

  // Event handler for the target_lang select element
  $("#target_lang").change(function () {
    // Call translateText when the target language selection changes
    translateText();
  });

  

  $("#change").click(function (event) {
    event.preventDefault(); // Prevent the link from navigating

    // Call the swapTextAndOptions function
    swapTextAndOptions();
    translateText();
  });

  detectLang();
  translateText();

  // Translate text when the input field changes
  var detectionOccurred = false;

  $("#input_text").on("input", function () {
    if (inputText.trim() === '') {
      document.getElementById('translated_text').value = ''
      console.log("SET")
    }
    if ($("#input_text").val().trim() !== "") {
      if (!detectionOccurred) {
        detectLang();
      }
      detectionOccurred = true;
    } else {
      detectionOccurred = false; // Reset the flag when the input box is empty
    }
  });

  inputText.on("input", function () {
    updateSuggestions();
  });

});



// Function to handle the download
function downloadText() {
  var selectedOption = $("#target_lang option:selected").text();
  var textToDownload = "Selected Text: " + selectedOption;

  // Create a Blob with the text content
  var blob = new Blob([textToDownload], { type: "text/plain" });

  // Create a URL for the Blob
  var url = URL.createObjectURL(blob);

  // Set the href and click the link to trigger the download
  $("#downloadTextLink").attr("href", url).show();
}

// Trigger the download when the target_lang select changes
$("#target_lang").change(downloadText);

function copyToClipboard() {
  var textToCopy = $("#translated_text").val();

  if  (textToCopy === ''){
    textToCopy = ''
  }
  var textArea = document.createElement("textarea");

  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

// Bind the function to the "Copy to Clipboard" button
$("#copyToClipboard").click(copyToClipboard);

const textToSpeakSource = document.getElementById("input_text");
const speakButtonSource = document.getElementById("pronounceButtonSource");
const textToSpeakTarget = document.getElementById("translated_text");
const speakButtonTarget = document.getElementById("pronounceButtonTarget");
const synth = window.speechSynthesis;

// Check if the SpeechSynthesis API is available in the browser.
if ("speechSynthesis" in window) {
  const voices = synth.getVoices(); // Fetch available voices.

  speakButtonTarget.addEventListener("click", function () {
    const text = textToSpeakTarget.value;
    if (text && text.length > 0) {
      const message = new SpeechSynthesisUtterance(text);

      // Get the selected language code from the select element.
      const select = document.getElementById("target_lang");
      const selectedOption = select.options[select.selectedIndex];
      const lang = selectedOption.value; // Language code

      // Find the voice that starts with the selected language code.
      const voice = voices.find((voice) => voice.lang.startsWith(lang));

      if (voice) {
        message.voice = voice;
      } else {
        console.log(
          `Voice for language '${lang}' not found. Using default voice.`
        );
      }

      synth.speak(message);
    }
  });

  speakButtonSource.addEventListener("click", function () {
    const text = textToSpeakSource.value;
    if (text && text.length > 0) {
      const message = new SpeechSynthesisUtterance(text);

      // Get the selected language code from the select element.
      const select = document.getElementById("source_lang");
      const selectedOption = select.options[select.selectedIndex];
      const lang = selectedOption.value; // Language code

      // Find the voice that starts with the selected language code.
      const voice = voices.find((voice) => voice.lang.startsWith(lang));

      if (voice) {
        message.voice = voice;
      } else {
        console.log(
          `Voice for language '${lang}' not found. Using default voice.`
        );
      }

      synth.speak(message);
    }
  });
} else {
  // Handle the case where the SpeechSynthesis API is not supported.
  console.log("Speech synthesis is not supported in this browser.");
}
const microphoneButton = document.getElementById("microphone");
let isMicrophoneActive = false; // Flag to track microphone status
let recognition = null; // Store the recognition instance

microphoneButton.addEventListener("click", function () {
  if (isMicrophoneActive) {
    // Stop the microphone if it's active
    recognition.stop();
    isMicrophoneActive = false;
    microphoneButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/><path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/></svg>';
  } else {
    // Start the microphone
    const micElem = document.getElementById("microphone");
    const select = document.getElementById("source_lang");
    const selectedOption = select.options[select.selectedIndex];
    const lang = selectedOption.value; // Language code

    micElem.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/></svg>';

    recognition = new webkitSpeechRecognition();
    recognition.lang = lang; // Set the language for recognition

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      const inputText = $("#input_text");

      // Append the recognized speech to the input_text field
      inputText.val(inputText.val() + " " + transcript);

      recognition.stop();
      micElem.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/><path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/></svg>';
    };

    recognition.start();
    isMicrophoneActive = true;
  }
});



const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// JavaScript to set a delay timer and auto-hide the popover on click
// JavaScript to show popover on click and hide after a delay
$(document).ready(function () {
    var popoverDelayTimer;
    var $copyToClipboard = $("#copyToClipboard");

    $copyToClipboard.popover({
        trigger: "manual" // Set trigger to manual
    });

    $copyToClipboard.on("click", function (e) {
        e.preventDefault(); // Prevent the link from navigating
        clearTimeout(popoverDelayTimer); // Clear any previous timers

        $copyToClipboard.popover("show");

        // Set a delay timer for auto-hiding the popover after 2000 milliseconds (2 seconds)
        popoverDelayTimer = setTimeout(function () {
            $copyToClipboard.popover("hide");
        }, 1000);
    });
});

$('#shareOnFacebook').on('click', () => {
    let text = document.getElementById('translated_text').value + '\n\ntranslated by\n'
    if (navigator.share) {
        navigator.share({
            title: 'Translate Result',
            text: text,
            url: '',
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
    }
});
