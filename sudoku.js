var board =[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];


var solution =[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];


function initialLoad(){
    for(let i =1;i<=9;i++){
        let globalElement=document.querySelector(".single-container");
        let parentElement=document.createElement("div");
        parentElement.addEventListener('click',solutionHandler);
        parentElement.classList.add("single-line-box");
        parentElement.id=i;
        parentElement.innerHTML=i;
        globalElement.appendChild(parentElement);
    }

    for(let r =0;r<9;r++){
        for(let c=0;c<9;c++){
        let globalElement=document.querySelector(".display-container");
        let parentElement=document.createElement("div");
        parentElement.addEventListener('click',selectHandler);
        parentElement.classList.add("single-line-box");
        parentElement.id=r+""+c;
        parentElement.innerHTML=board[r][c];
        globalElement.appendChild(parentElement);
        }
        
    }
}
initialLoad();

function selectHandler(event){
    console.log(event.target.id);
    let [r,c]=event.target.id.split("");
    let result = solution[r][c];
    let selectedElement = document.querySelector("#selectedNumber").innerText;
    if(result==selectedElement){
        document.getElementById(event.target.id).innerHTML=result;
    }
    
    
}

function solutionHandler(event){
    document.querySelector("#selectedNumber").innerHTML=event.target.id;
    
}
