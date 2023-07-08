let vowels = "aelouAEIOU";

function translateToPigLatin(){
  // Declare local variables
  let input = inputText.value; // Stores the value of the input text 
  let pigLatin =''; //Placeholder for the pig Latin output

  if (input.length <= 2) {
    // The string contains only one letter or less (invalid)
    pigLatin = "Invalid input. A word must have less than one letter.";
  }else if (!vowels.includes(input.charAt(0)) && !vowels.includes(input.charAt(1))){
    // The first two letters are consonants (not vowels)
    pigLatin = input.slice(2) + input.slice(0, 2) + 'ay';
  } else if (!vowels.includes(input.charAt(0))){
    //The first letter is a consonant
    pigLatin = input.slice(1) + input.charAt(0) + 'ay';
  }else{
    // The first letter is a vowel
    pigLatin = input + 'way';
  }

  // Update the text in the pigoutput span
  translationResult.innerHTML = pigLatin;
    
};
  










  
