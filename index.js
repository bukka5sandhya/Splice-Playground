let arr = [1,7,3,1,20,77];
let startIndexInputEle = document.getElementById("startInput");
let deleteCountInputEle = document.getElementById("deleteCountInput");
let itemToAddInputEle = document.getElementById("itemToAddInput");
let spliceBtnEle = document.getElementById("spliceBtn");
let updatedArrayEle = document.getElementById("updatedArray");

function  convertToJSONString(){
    let stringifiederr = JSON.stringify(arr);
    updatedArrayEle.textContent = stringifiederr;

}
convertToJSONString();

spliceBtnEle.onclick = function(){
    let startIndexEle = startIndexInputEle.value;
    let deleteCount= deleteCountInputEle.value;
    let itemToAdd = itemToAddInputEle.value;

    if(startIndexEle === ""){
        alert("Please enter the start index");
        return;
    }
    if(deleteCount === ""){
        deleteCount = 0;

    }
    if(itemToAdd === ""){
        arr.splice(parseInt(startIndexEle),parseInt(deleteCount));
    }else{
        arr.splice(parseInt(startIndexEle),parseInt(deletCount),itemToAdd);
    }
    startIndexInputEle.value = "";
    deleteCountInputEle.value ="";
    itemToAddInputEle.value ="";
    convertToJSONString();

}