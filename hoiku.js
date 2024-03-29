function resultView(){
    const father = fundamentalScore("f-funda");
    const mother = fundamentalScore("mwork");
    const plussScorePoint = scoreCalc("plusscore") ;
    const cordinateScore = scoreCalc("cordinatescore");

    console.log(plussScorePoint)
    console.log(cordinateScore)

    const fatherFundaPoint = Number(father[0]) + Number(plussScorePoint);
    const motherFundaPoint = Number(mother[0]) + Number(plussScorePoint);
    const fatherPriority = father[1];
    const motherPriority = mother[1];

    document.getElementById("fatherFundaScore").innerText = fatherFundaPoint;
    document.getElementById("motherFundaScore").innerText = motherFundaPoint;
    document.getElementById("fatherPriority").innerText = fatherPriority;
    document.getElementById("motherPriority").innerText = motherPriority;
    document.getElementById("cordinatePoint").innerText = cordinateScore;

    var resultFunda = "";
    var resultPriority ="";

    if (fatherFundaPoint>motherFundaPoint){
        resultFunda = String(motherFundaPoint);
    }else{resultFunda =String(fatherFundaPoint)}

    if (fatherPriority<motherPriority){
        resultPriority = fatherPriority
    }else{resultPriority = motherPriority}

    const resultCellValue = resultFunda + resultPriority + String(cordinateScore)

    document.getElementById("resultCell").innerText = resultCellValue

}

function fundamentalScore (dataId){
    const fatherFunda = document.getElementById(dataId)
    var selectedOption = fatherFunda.options[fatherFunda.selectedIndex]
    const FundaValue = selectedOption.getAttribute("data-value")
    const FundaPriority = selectedOption.getAttribute("data-for")
    return [FundaValue,FundaPriority]
}

function scoreCalc(dataName){
    const elems = document.getElementsByName(dataName)
    var cordinateScore = 0
    elems.forEach(function(elem){
        if (elem.checked){
        cordinateScore = cordinateScore + Number(elem.value)
        }
    })
    return cordinateScore
}