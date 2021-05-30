const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playagain = document.getElementById("playagain");

const selection = document.getElementById("selection");
const result = document.getElementById("result");

const choose = () => {
	return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
};

const onClick = (type) => {
	const item = choose();
	result.innerHTML = `<h1>${getResults(item, type)}</h1>\n${result.innerHTML}`;

	result.classList.remove("hidden");
	selection.classList.add("hidden");
};

const getResults = (item, type) => {
	if (item === type) return `No one won, we both chose ${item}.`;

	// rock and paper
	if (item === "paper" && type === "rock") return "I won! I chose paper and you chose rock.";
	if (item === "rock" && type === "paper") return "You won! I chose rock and you chose paper.";

	// paper and scissors
	if (item === "scissors" && type === "paper")
		return "I won! I chose scissors and you chose paper.";
	if (item === "paper" && type === "scissors")
		return "You won! I chose paper and you chose scissors.";

	// rock and scissors
	if (item === "rock" && type === "scissors") return "I won! I chose rock and you chose scissors.";
	if (item === "scissors" && type === "rock")
		return "You won! I chose scissors and you chose rock.";
};

const reset = () => {
	result.innerHTML = '<p id="playagain" onclick="reset()">Play Again</p>';

	result.classList.add("hidden");
	selection.classList.remove("hidden");
};

// register option onClick events
rock.onclick = () => onClick("rock");
paper.onclick = () => onClick("paper");
scissors.onclick = () => onClick("scissors");
