let word
let arrayOfDefinition
let arrayOfSynonyms
let arrayOfAntonyms
let arrayOfRhymes

const getWord = document.getElementById('wordSelect');
getWord.addEventListener("submit", e => {
    e.preventDefault()
    word = document.getElementById('word').value.trim()
	console.log(word)
	const newButtons = document.getElementById('newButtons')
	newButtons.innerHTML = `<br><button type="button" id="definition" onclick = "getDefinition()">Definition</button>
		<br><br><button type="button" id="synonyms" onclick = "getSynonyms()">Synonyms</button>
		<br><br><button type="button" id="antonyms" onclick = "getAntonyms()">Antonyms</button>
		<br><br><button type="button" id="rhymes" onclick = "getRhymes()">Rhymes</button>`
  });

const getDefinition = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, options)
	.then(res => res.json())
	.then(index => arrayOfDefinition = index.definitions)
	.then(setTimeout(() => {
		console.log(arrayOfDefinition)
		const allDef = document.getElementById('list')
		allDef.innerHTML = '<h2>DEFINITIONS:</h2>'
		arrayOfDefinition.map((index) => {
			const li = document.createElement('li')
			li.innerHTML = `${index.definition}`
			allDef.append(li)
		})}, "1000"))
}

const getSynonyms = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, options)
	.then(res => res.json())
	.then(index => arrayOfSynonyms = index.synonyms)
	.then(setTimeout(() => {
		console.log(arrayOfSynonyms)
		const allSyn = document.getElementById('list')
		allSyn.innerHTML = '<h2>SYNONYMS:</h2>'
		display(arrayOfSynonyms, allSyn)
	}, "1000"))
}

const getAntonyms = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`, options)
	.then(res => res.json())
	.then(index => arrayOfAntonyms = index.antonyms)
	.then(setTimeout(() => {
		console.log(arrayOfAntonyms)
		const allAnt = document.getElementById('list')
		allAnt.innerHTML = '<h2>ANTONYMS:</h2>'
		display(arrayOfAntonyms, allAnt)
	}, "1000"))
}

const getRhymes = () => {
	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, options)
	.then(res => res.json())
	.then(index => arrayOfRhymes = index.rhymes.all)
	.then(setTimeout(() => {
		console.log(arrayOfRhymes)
		const allRhy = document.getElementById('list')
		allRhy.innerHTML = '<h2>RHYMES:</h2>'
		display(arrayOfRhymes, allRhy)
	}, "1000"))
}

const display = (arr, all) => {
	arr.map((index) => {
		const li = document.createElement('li')
		li.innerHTML = `${index}`
		all.append(li)
	})
}