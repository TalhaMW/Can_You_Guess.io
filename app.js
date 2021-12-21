// required functions;
function createElement(tag,cls,txt){
    let element = document.createElement(`${tag}`);
    element.className=`${cls}`
    let text = document.createTextNode(`${txt}`);
    element.appendChild(text);
    return element;
}


// game logics
let startGame = (status)=>{

    let input = document.querySelector('input');
    let main = document.querySelector("main")
    if(status===true){
        let randomNumber = Math.floor(Math.random()*100)+1;
        let numberOfTurns = 8;
      
        let txtContainer = document.querySelector(".text-cnt");
        let submitBtn = document.querySelector('.submit');
       
        console.log(randomNumber);
        submitBtn.addEventListener("click",()=>{
            if(Number(input.value)===randomNumber){
                let nestedUL = createElement('ul','nested-ul ul',"")
                let winLi = createElement('li','win-li li',"Correct");
                let winMsg = createElement('li',"win-msg li",`You Won the Game . your guess is ${input.value}`);
                winMsg.style="list-style:none;padding:1.2rem 0 0.4rem 0rem;font-size:2.5rem;font-weight:bold"
                nestedUL.appendChild(winMsg);
                winLi.appendChild(nestedUL)

                
                txtContainer.appendChild(winLi);
                console.log(txtContainer);
                input.value="";
                input.disabled=true;
                submitBtn.disabled=true;
                let allLists = document.querySelectorAll('.li');
                 console.log(winLi,winMsg);
            //   console.log(txtContainer.hasChildNodes());
  
                main.appendChild(createElement("button",'restart',"Restart"));
                let restartBtn = document.querySelector(".restart");
                restartBtn.addEventListener("click",()=>{
                    input.disabled=false;
                   allLists = Array.from(allLists)
                   allLists.forEach(item=>item.remove());
                   submitBtn.disabled=false;
                   restartBtn.remove()
                   numberOfTurns= 9;
                   
                   
                })
                  


            }else{
             
                numberOfTurns = numberOfTurns-1;
               let wrongLi = createElement('li','wrong-li li','Wrong');
               let nestedUL = createElement('ul','nested-ul','');
                wrongLi.style="font-size:3rem"
            //    console.log(wrongLi,nestedUL);
        
               if(numberOfTurns>0){
                // console.log("test");
               
                if(Math.abs(randomNumber-input.value)>20){
                    if(randomNumber-input.value<0){
                        let hintLi = createElement('li','hint-li li',`Hint:You are Far from Number  Go Below`);
                        let numberTurnsLi = createElement('li','number-turns',`Number of Turns Left: ${numberOfTurns}`);
                        nestedUL.appendChild(hintLi);
                        nestedUL.appendChild(numberTurnsLi);
                        wrongLi.appendChild(nestedUL)
                        console.log(wrongLi);
                        txtContainer.appendChild(wrongLi);

                       
                    }else if(randomNumber-input.value>0){
                        // txtContainer.appendChild(createElement("p","msg",`wrong you got ${numberOfTurns-1} left You Are Far Away \n go above`))
                        let hintLi = createElement('li','hint-li li',`Hint:You are far from the Number  Go Above`);
                        let numberTurnsLi = createElement('li','number-turns',`Number of Turns Left: ${numberOfTurns}`);
                        nestedUL.appendChild(hintLi);
                        nestedUL.appendChild(numberTurnsLi);
                        wrongLi.appendChild(nestedUL)
                        txtContainer.appendChild(wrongLi)

                    }
                }else if(Math.abs(randomNumber-input.value<=20)){
                    if(randomNumber-input.value<0){
                        // txtContainer.appendChild(createElement("p","msg",`wrong you got ${numberOfTurns-1} left You Close go below`))
                        let hintLi = createElement('li','hint-li li',`Hint:You are close to Number  Go Below`);
                        let numberTurnsLi = createElement('li','number-turns',`Number of Turns Left: ${numberOfTurns}`);
                        nestedUL.appendChild(hintLi);
                        nestedUL.appendChild(numberTurnsLi);
                        wrongLi.appendChild(nestedUL)
                        txtContainer.appendChild(wrongLi)

                    }else if(randomNumber-input.value>0){
                        // txtContainer.appendChild(createElement("p","msg",`wrong you got ${numberOfTurns-1} left You Close go above`))
                        let hintLi = createElement('li','hint-li li',`Hint:You are Close to Number  Go Above`);
                        let numberTurnsLi = createElement('li','number-turns',`Number of Turns Left: ${numberOfTurns}`);
                        nestedUL.appendChild(hintLi);
                        nestedUL.appendChild(numberTurnsLi);
                        wrongLi.appendChild(nestedUL);
                        txtContainer.appendChild(wrongLi)

                    }
                    input.value='';
               
                }
            
                
              
               }else{
                   input.disabled=true;
                   submitBtn.disabled=true;
                   main.appendChild(createElement("button",'restart',"Restart"))
                  let restartBtn = document.querySelector('.restart');
                  let li = document.querySelectorAll('.li');
                  restartBtn.addEventListener('click',()=>{
                      li = Array.from(li);
                      li.forEach(item=>item.remove())
                      input.disabled=false;
                      submitBtn.disabled=false;
                      restartBtn.remove();
                      numberOfTurns = 9;
                      
                    //   input.focus();
                  
                  })

               }
              
               

            }

        })
        
    }
}
startGame(true);