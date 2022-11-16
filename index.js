//Done
function introduction(name){
    const akiName = `Hi, my name is ${name}.`
    return akiName
}
introduction('Aki');

//Done
function introductionWithLanguage(name, language){
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return message
}
introductionWithLanguage('Aki', 'Ember.js')



const lanG = "Javascript"
function introductionWithLanguageOptional(name, language = `${lanG}`){

    const defaultParam = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return defaultParam
}
introductionWithLanguageOptional("Gracie", undefined)

//Done
function introductionWithLanguageOptional(name, language = "Javascript"){
    const introName = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return introName
}
introductionWithLanguageOptional("Gracie", "Python.")
