// const kilometers = prompt('Quanti chilometri vuoi percorrere?');
// console.log('I chilometri inseriti dall utente sono:', kilometers);

// const age = prompt('Qual è la tua età?');
// console.log('L età inserita dall utente è:', age);

// let price = kilometers * 0.21;
// console.log('Il prezzo prima di un eventuale sconto è:', price, '£')


// document.getElementById('info').innerHTML = price; 

// let newPrice = ((price * 20) / 100 )
// let sale18 = price - newPrice

// if (age < 18) {
//     price = sale18

//     document.getElementById('sale18').innerHTML = sale18;

//     console.log('Il prezzo dopo un eventuale sconto è:', sale18, '£')
// } 

// let oldPeoplePrice = ((price * 40) / 100)
// let sale65 = price - oldPeoplePrice

// if (age > 65) {
//     price = oldPeoplePrice

//     document.getElementById('sale65').innerHTML = sale65;

//     console.log('Il prezzo dopo un eventuale sconto è:', sale65, '£')
// } 




const generate = document.getElementById('generate')

generate.addEventListener('click', 
                         
    function() {
        
        document.getElementById("ticket").style.display = 'block';
        console.log('test')

    }
                         
);







