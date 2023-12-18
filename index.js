// introduction function
// name as parameter, introduce name

function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// introduction with name and language
// returns both functions

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// introduction with name, language optional

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
