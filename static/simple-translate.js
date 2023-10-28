$(document).ready(function () {
  // Function to translate text and update the result field
  function translateText() {
    var inputText = $("#input_text").val().trim(); // Trim to remove leading/trailing whitespace
    var sourceLang = $("#source_lang").val();
    var targetLang = $("#target_lang").val();

    // Check if the input text is not empty or just spaces
    if (inputText.trim() !== "") {
      $.post(
        "/translate",
        {
          text: inputText,
          source_lang: sourceLang,
          target_lang: targetLang,
        },
        function (data) {
          $("#translated_text").val(data);
        }
      );
    }
  }

  function detectLang() {
    var inputText = $("#input_text").val().trim();
    var sourceLang = $("#source_lang").val();
    var targetLang = $("#target_lang").val();

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

  $("#input_text").on("input", translateText);
  inputText.on("input", function () {
    updateSuggestions();
  });

  $("#source_lang").change(translateText);
});
