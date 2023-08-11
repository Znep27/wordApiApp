let word
let arrayOfDefinition
let arrayOfSynonyms
let arrayOfAntonyms
let arrayOfRhymes
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63f5a03d9cmshd64e2edd3a2085ap1bde21jsne0787f084f6c',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

const getWord = document.getElementById('wordSelect');
getWord.addEventListener("submit", e => {
    e.preventDefault()
    word = document.getElementById('word').value
	console.log(word)
	const newButtons = document.getElementById('newButtons')
	newButtons.innerHTML = `<button type="button" id="definition" onclick = "getDefinition()">Definition</button>
		<button type="button" id="synonyms" onclick = "getSynonyms()">Synonyms</button>
		<button type="button" id="antonyms" onclick = "getAntonyms()">Antonyms</button>
		<button type="button" id="rhymes" onclick = "getRhymes()">Rhymes</button>`
  });

const getDefinition = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, options)
	.then(res => res.json())
	.then(index => arrayOfDefinition = index.definitions)
	.then(setTimeout(() => {
		console.log(arrayOfDefinition)}, "1000"))
}
getDefinition()

const getSynonyms = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, options)
	.then(res => res.json())
	.then(index => arrayOfSynonyms = index.synonyms)
	.then(setTimeout(() => {
		console.log(arrayOfSynonyms)}, "1000"))
}
getSynonyms()

const getAntonyms = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`, options)
	.then(res => res.json())
	.then(index => arrayOfAntonyms = index.antonyms)
	.then(setTimeout(() => {
		console.log(arrayOfAntonyms)}, "1000"))
}
getAntonyms()

const getRhymes = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, options)
	.then(res => res.json())
	.then(index => arrayOfRhymes = index.rhymes.all)
	.then(setTimeout(() => {
		console.log(arrayOfRhymes)}, "1000"))
}
getRhymes()