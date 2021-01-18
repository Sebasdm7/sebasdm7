var Rows = 3;
var Columns = 3;
var defaultColor = "#0000ff";
var currColor = "#0000ff";
var inColumns = 3;
var outColumns = 4; 


function newPoly(){
    let sv = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    let pol = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    pol.setAttribute("class", "poly");
    pol.setAttribute("points", "0,15 10,0 20,15 10,30");

    sv.appendChild(pol);
    return sv;
}
function newPolyBlank(){
    let sv = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    let pol = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    pol.setAttribute("class", "blankPoly");
    pol.setAttribute("points", "0,0 10,15 0,30");
    sv.appendChild(pol);
    return sv;
}

function updateNumber(){
    let input = document.getElementById("numberInput").value;
    let output = document.getElementById("updatedNumber");

    output.innerHTML= `${input}`;

}



function plusOneF(){
    
    addSquare(0);
    addSquare(1);
    for(let i=0; i<Rows; i++){
        
        
        if(i%2==0){
            let id = `r${i}`;
            let r = document.getElementById(id);
        
            let eleID = `r${i}c${outColumns}`;
            
            let newElement = document.createElement('div');
            newElement.className = "pgPreview";
            newElement.id = eleID;
            let nPoly = newPoly();
            newElement.appendChild(nPoly);
            r.appendChild(newElement);
            
            

            
            
        }else{
            let id = `r${i}`;
            let r = document.getElementById(id);
        
            let eleID = `r${i}c${inColumns}`;
            
            let newElement = document.createElement('div');
            newElement.className = "pgPreview";
            newElement.id = eleID;
            let nPoly = newPoly();
            newElement.appendChild(nPoly);
            r.appendChild(newElement);
            

            
            
        }
        
        
        
    }
    outColumns+=2;
    inColumns+=2;
    

    

    
    
    Columns+=2;
    
    let output = document.getElementById("updatedNumber");
    let newOutput = parseInt(output.innerHTML, 10);
    

    newOutput+=2;
    
    
    output.innerHTML = `${newOutput}`;
    updateOnClick();
}


function minusOneF(){
    
    for(let i=0; i<Rows; i++){
        
        let id = `r${i}`;
        let r = document.getElementById(id);
        let lastEle = r.lastElementChild;
        r.removeChild(lastEle);
        

    }


    Columns-=2;
    
    
    let output = document.getElementById("updatedNumber");
    let newOutput = parseInt(output.innerHTML, 10);
    

    newOutput-=2;
    
    
    output.innerHTML = `${newOutput}`;
    updateOnClick();
}

function plusOneRow(){
    let table = document.getElementById('table');
    

    if(Rows%2 == 0){
        let id = `r${Rows}`; 
        let newR = document.createElement('div');
        newR.className = 'pgPreviewRow';
        newR.id= id;
        let m=0;
        for(let i=0; i<Columns/2; i++){
            let ncid = `r${Rows}c${m}`; 
            let newColElem = document.createElement('div');
            let nPoly = newPoly();
            
            newColElem.appendChild(nPoly);

            newColElem.className = 'pgPreview';
            newColElem.id = ncid; 

            

            newR.appendChild(newColElem);
            m+=2;
        }

        table.appendChild(newR);

    }else{
        let id = `r${Rows}`; 
        let newR = document.createElement('div');
        newR.className = 'pgPreviewRow';
        newR.id= id;

        let m = 1;
        let newBlankElem = document.createElement('div');
        let blankPoly = newPolyBlank();
        newBlankElem.appendChild(blankPoly);
        newBlankElem.className = 'pgPreviewBlank';
        newR.appendChild(newBlankElem);

        for(let i=0; i<Columns/2-1; i++){
            let ncid = `r${Rows}c${m}`; 

            

            let newColElem = document.createElement('div');
            let nPoly = newPoly();
            

            newColElem.appendChild(nPoly);
            newColElem.className = 'pgPreview';
            newColElem.id = ncid; 

            m+=2;

            newR.appendChild(newColElem);
        }

        table.appendChild(newR);
    }

    
    Rows++;
    let output = document.getElementById("nRows").innerHTML++;
    output.innerHTML = `${output}`;
    updateOnClick();
}


function minusOneRow(){
    let table = document.getElementById('table');
    let lr = table.lastElementChild;
    table.removeChild(lr);
    Rows--;

    let output = document.getElementById("nRows").innerHTML--;
    output.innerHTML = `${output}`;
    updateOnClick();
}

function colour1Column(id){
    let c = currColor;
    for(let i=0; i<Rows; i++){
        console.log(`helel ${i}`)
        if(i%2==id%2){
            console.log(`iiiiii= ${i}  |   ididididid= ${id}`);
            let rid= `r${i}c${id}`;
            let rombo = document.getElementById(rid).children[0].children[0];
            rombo.style.fill = c;
            console.log(rombo);
            console.log(rid);
            

        }
    }
}

function updateOnClick(){
    let c = currColor;
    document.querySelectorAll('.poly').forEach(item => {
        item.addEventListener('click', function() {
            this.style.fill= c;
        });
      });
    
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('click', function(){
            this.style.backgroundColor = c;
            colour1Column(this.id);
        });
    });
}


function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    
    colorWell.select();






}

function updateFirst(event) {
    updateOnClick();
    currColor = event.target.value;
}







function selectecColor(args, event){
    let n = args[0];
    
    
    if(n==1){
        let c = document.getElementById("colorWell").value;
        currColor = c;
        let hexCol = document.getElementById("hexcol1");
        hexCol.innerHTML = c;
    }else if(n==2){
        let c = document.getElementById("colorWell1").value;
        currColor = c;
        let hexCol = document.getElementById("hexcol2");
        hexCol.innerHTML = c;
    }else if(n==3){
        let c = document.getElementById("colorWell2").value;
        currColor = c;
        let hexCol = document.getElementById("hexcol3");
        hexCol.innerHTML = c;

    }else if(n==4){
        let c = document.getElementById("colorWell3").value;
        currColor = c;
        let hexCol = document.getElementById("hexcol4");
        hexCol.innerHTML = c;

    }else if(n==5){
        let c = document.getElementById("colorWell4").value;
        currColor = c;
        let hexCol = document.getElementById("hexcol5");
        hexCol.innerHTML = c;

    }

    
    
    updateOnClick();

    
}
function plus5C(){
    for(let i=0; i<2; i++){
        plusOneF();
    }
}
function minus5C(){
    for(let i=0; i<2; i++){
        minusOneF();
    }
}


function newSquare(n){
    let newElem = document.createElement("div");
    newElem.className = "square";
    let cc = Columns+n;
    newElem.id = cc;
    return newElem;
}
function addSquare(i){
    let squR = document.getElementById("squares");
    let n = newSquare(i);
    squR.appendChild(n);
}

let mOne = document.getElementById('minusOneButton');
mOne.onclick = minusOneF;
let pOne = document.getElementById('plusOneButton');
pOne.onclick = plusOneF;

let pOneR = document.getElementById('plusOneButtonR');
pOneR.onclick = plusOneRow;

let mOneR = document.getElementById('minusOneButtonR');
mOneR.onclick = minusOneRow;



let col1B = document.getElementById('bSelect');
col1B.onclick = selectecColor.bind(this, [1]);
let col2B = document.getElementById('bSelect1');
col2B.onclick = selectecColor.bind(this, [2]);
let col3B = document.getElementById('bSelect2');
col3B.onclick = selectecColor.bind(this, [3]);
let col4B = document.getElementById('bSelect3');
col4B.onclick = selectecColor.bind(this, [4]);
let col5B = document.getElementById('bSelect4');
col5B.onclick = selectecColor.bind(this, [5]);

updateOnClick();

