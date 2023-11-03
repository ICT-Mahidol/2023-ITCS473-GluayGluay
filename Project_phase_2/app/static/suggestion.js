var textSuggestions = []; // Array to store text suggestions

// Function to load text suggestions from a file and update the array
function loadTextSuggestionsFromFile(filename, callback) {
  $.get(
    filename,
    function (data) {
      // Split the content of the file into an array of suggestions
      var suggestions = data.split("\n").map(function (suggestion) {
        return suggestion.trim(); // Remove leading/trailing whitespace
      });
      textSuggestions = textSuggestions.concat(suggestions);
    },
    "text"
  )
    .done(function () {
      if (callback) {
        callback();
      }
    })
    .fail(function () {
      console.log("Failed to load text suggestions from '" + filename + "'");
    });
}

// Define an array of filenames to load text suggestions from
var filenames = ["words-en.txt","words-th.txt"];

// Variable to keep track of how many files have been loaded
var filesLoaded = 0;

// Function to handle the loading of multiple files
function loadSuggestionsFromMultipleFiles() {
  filesLoaded++;
  if (filesLoaded === filenames.length) {
    // All files have been loaded
    initializeSuggestions();
  }
}

// Load text suggestions from all specified files
filenames.forEach(function (filename) {
  loadTextSuggestionsFromFile(filename, loadSuggestionsFromMultipleFiles);
});

// Function to initialize the suggestions
function initializeSuggestions() {
  // Input and suggestion elements
  var inputText = $("#input_text");
  var suggestionList = $("#suggestion_list");

  // Function to update text suggestions based on the current word being typed
  function updateSuggestions() {
    var inputSentence = inputText.val();
    suggestionList.empty();

    if (inputSentence) {
      var words = inputSentence.split(/\s+/); // Tokenize the input sentence
      var currentWord = words[words.length - 1]; // Get the last word in the sentence

      // Check if the current word is not just a space
      if (currentWord.trim() !== "") {
        var matchingSuggestions = textSuggestions
          .filter(function (suggestion) {
            return (
              suggestion.toLowerCase().startsWith(currentWord.toLowerCase()) &&
              suggestion !== currentWord
            );
          })
          .slice(0, 5);

        if (matchingSuggestions.length > 0) {
          suggestionList.text("Suggestion: " + matchingSuggestions.join(", "));
          suggestionList.show();
        } else {
          suggestionList.hide();
        }
      } else {
        suggestionList.hide();
      }
    } else {
      suggestionList.hide();
    }
  }

  // Event handler for input changes
  inputText.on("input", function () {
    updateSuggestions();
  });

  // Event handler for space keypress
  inputText.on("keydown", function (e) {
    if (e.key === " ") {
      suggestionList.hide();
    }
  });

  // Hide suggestion list initially
  suggestionList.hide();
}
