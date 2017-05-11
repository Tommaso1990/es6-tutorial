//Dimostrazione delle closure
function salutatore(preambolo){

return function(nome) {
    console.log(preambolo+", "+nome+"!");
}
}

var salutatoreeducato = salutatore("Buongiorno");
var salutatoreAllegro = salutatore("Wellà");

salulatoreeducato("Tommaso")

salutatoreAllegro("Francesco Altomare")