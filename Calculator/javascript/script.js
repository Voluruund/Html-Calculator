function insert(number){
    document.datiCalc.casellaTesto.value = document.datiCalc.casellaTesto.value+number
};

function remove(){
    document.datiCalc.casellaTesto.value = " ";
};

function execute(){
    document.datiCalc.casellaTesto.value = eval(document.datiCalc.casellaTesto.value)
}