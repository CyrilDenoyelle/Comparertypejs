
function pareil(truk1, truk2) {
console.log(truk1.typeof);
console.log(truk2.typeof);

if (typeof truk1 === typeof truk2){
	console.log("le type est le même");
}
else if (typeof truk1 !== typeof truk2){
	console.log("le type est différent");
}
}