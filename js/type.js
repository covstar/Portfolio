// The array of strings you want to split and display
      var myArray = ["HTML", "CSS", "JavaScript", "React", "and Vue."];
      
      // The current word you want to display
      var currentWord = "";
      
      // The current index of the letter
      var currentIndex = 0;
      
      // The time interval between each letter typed
      var typingInterval = 200;
      
      // The time interval between cleaning and typing the next word
      var cleaningInterval = 500;
      
      // The current index of the letter when cleaning
      var cleaningIndex = 0;

      function displayNextLetter() {
        currentWord += myArray[0][currentIndex];
        currentIndex++;
        // Use the text() method to update the text in the <p> element
        $("#array-item").text(currentWord);
        if(currentIndex === myArray[0].length) {
          clearInterval(typingIntervalId);
          setTimeout(cleanAndNext, cleaningInterval);
        }
      }
      
      function cleanAndNext() {
        cleaningIndex = currentWord.length - 1;
        cleaningIntervalId = setInterval(clean, 50);
      }
      
      function clean() {
        currentWord = currentWord.slice(0, cleaningIndex);
        cleaningIndex--;
        $("#array-item").text(currentWord);
        if(cleaningIndex === -1) {
          clearInterval(cleaningIntervalId);
          currentWord = "";
          currentIndex = 0;
          myArray.shift();
          if(myArray.length > 0) {
            typingIntervalId = setInterval(displayNextLetter, typingInterval);
          } else {
            myArray = ["HTML", "CSS", "JavaScript", "React", "and Vue."];
            typingIntervalId = setInterval(displayNextLetter, typingInterval);
          }
        }
      }
      
      var typingIntervalId = setInterval(displayNextLetter, typingInterval);