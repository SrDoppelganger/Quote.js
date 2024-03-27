let num;
let quote;

//pega uma frase dentre as opções possíveis
function citacoes(num){
    num = Math.floor(Math.random() * 10);
    switch(num){
        case 0:
          quote = "Rider Kick!!!!"
          break;
        case 1:
            quote = "A-MA-ZON!!!!"
            break;
        case 2:
            quote = "The Sky calls to me!The land calls to me!The people call me!They call me, to fight the evil.I am the warrior of justice. Kame rider Stronger!"
            break;
        case 3:
            quote = "No Fear, No Pain"
            break;
        case 4:
            quote = "Now, count up your sins!"
            break;
        case 5:
            quote = "Shall we begin the experiment?"
            break;
        case 6:
            quote = "A jump to the sky turns into a rider kick"
            break;
        case 7:
            quote = "This game...The winner in the end is me!"
            break;
        case 8:
            quote = "Rider time!";
            break;
        case 9:
            quote = "I...Have arrived!";
            break;
        default:
            quote = "falha ao gerar uma frase...oopsie"

    }
}

//muda o texto na tela
document.getElementById("gerar").onclick = function(){
    citacoes(num);
    document.getElementById("citacao").textContent = `"${quote}"`;
    console.log(num)
}


