/*function choosen(){
   

    let button1 = document.getElementsByClassName('rating-button')[0];
    let button2 = document.getElementsByClassName('rating-button')[1];
    let button3 = document.getElementsByClassName('rating-button')[2];
    let button4 = document.getElementsByClassName('rating-button')[3];
    let button5 = document.getElementsByClassName('rating-button')[4];


    if(button1){
        button1.style.backgroundColor = 'hsl(217, 12%, 63%)';
        button1.style.color = 'white';
    }
    else if(button2){
        button2.style.backgroundColor = 'hsl(217, 12%, 63%)';
        button2.style.color = 'white';
    }
        
}*/

function choosenButton(){
    return event.target.value;
    
}

function submitButton(){
    
    document.getElementsByClassName('submit-section')[0].style.display = 'none';
    document.getElementsByClassName('thank-you-section')[0].style.display = 'flex';
    
    if(choosenButton='1')
    document.getElementsByClassName('you-selected')[0].innerHTML = 'You selected 1 out of 5'
    else if(choosenButton()='2'){
        document.getElementsByClassName('you-selected')[0].innerHTML = 'You selected 2 out of 5'
    }
    else if(choosenButton()='3'){
        document.getElementsByClassName('you-selected')[0].innerHTML = 'You selected 3 out of 5'
    }
    else if(choosenButton()='4'){
        document.getElementsByClassName('you-selected')[0].innerHTML = 'You selected 4 out of 5'
    }
    else if(choosenButton()='5'){
        document.getElementsByClassName('you-selected')[0].innerHTML = 'You selected 5 out of 5'
    }
}






