var textSuggestions; // Array to store text suggestions

// Load text suggestions from the "word.txt" file
$.get(
  "words.txt",
  function (data) {
    // Split the content of the file into an array of suggestions
    textSuggestions = data.split("\n").map(function (suggestion) {
      return suggestion.trim(); // Remove leading/trailing whitespace
    });
  },
  "text"
)
  .done(function () {
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
                suggestion
                  .toLowerCase()
                  .startsWith(currentWord.toLowerCase()) &&
                suggestion !== currentWord
              );
            })
            .slice(0, 5);

          if (matchingSuggestions.length > 0) {
            suggestionList.text(
              "Suggestion : " + matchingSuggestions.join(", ")
            );
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
  })
  .fail(function () {
    console.log("Failed to load text suggestions from 'word.txt'");
  });
