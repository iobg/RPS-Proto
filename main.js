let buttons = $("button");
let randomFiller = ["rock", "paper", "scissors"]
let results = $("#results")
let options = {
rock: {
	priority: "NA",
	value: "rock",
	count: 1,
	beats: ["scissors"]
},
paper:{
	priority: "NA",
	value: "paper",
	count: 1,
	beats: ["rock"]
},
scissors:{
	priority: "NA",
	value: "scissors",
	count:1,
	beats: ["paper"]
}
}

buttons.click(event=>{
	playCheck(event.currentTarget.id, randomFiller[Math.floor(Math.random() * 3)])
})


function playCheck(p1, p2){
	if (options[p1].beats.includes(p2)){
		results.html("you win lad")
	}
	else if (p1 == p2){
		results.html("draw :(")
	}
	else {
		results.html("you lose son")
	}
}