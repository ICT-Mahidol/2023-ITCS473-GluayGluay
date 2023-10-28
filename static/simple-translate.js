$(document).ready(function () {
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
          console.log(data)
          if (data != 'Unknown') {
            $("#translated_text").val(data);
          }
        }
      );
    }, 800); // Translate after 1 second of idle time
  }
}

$("#input_text").on("input", translateText);

// Listen for spacebar key press
$("#input_text").keydown(function (event) {
  if (event.keyCode === 32) { // 32 is the key code for spacebar
    translateText();
  }
});


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

  $("#source_lang").change(translateText);
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

// Function to share text on Facebook
function shareOnFacebook() {
  var textToShare = $("#input_text").val();
  var urlToShare =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(textToShare);

  // Open a new window or tab for Facebook sharing
  window.open(urlToShare, "_blank");
}

// Bind the function to the "Share on Facebook" button
$("#shareOnFacebook").click(shareOnFacebook);

function copyToClipboard() {
  var textToCopy = $("#translated_text").val();
  var textArea = document.createElement("textarea");

  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  
  alert("Text copied to clipboard: " + textToCopy);
}

// Bind the function to the "Copy to Clipboard" button
$("#copyToClipboard").click(copyToClipboard);
