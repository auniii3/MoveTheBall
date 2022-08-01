var ball = document.getElementById('ball');
var container = document.getElementById('container');
var coordinate = container.getBoundingClientRect();
var counter = 0;
var counterver = 0;
var keyPressed = false;

document.addEventListener('keypress',handleMove);

function handleMove(event){
    if(event.key === 'd' && !keyPressed){
        var interval = setInterval(function(){
            if(counter >= window.innerWidth - 137){
                clearInterval(interval);
                keyPressed = false;
                return;
            }
            keyPressed = true;
            counter += 10;
            ball.style.left = counter + "px";
        },30)
    }

    if(event.key === 'a' && !keyPressed){
        var interval = setInterval(function(){
            if(counter <= 20){
                clearInterval(interval);
                keyPressed = false;
                return;
            }
            keyPressed = true;
            counter -= 10;
            ball.style.left = counter + "px";
        },30)
    }

    if(event.key == 's' && !keyPressed){
        var interval = setInterval(function(){
            if(counterver >= window.innerHeight - 130){
                clearInterval(interval);
                keyPressed = false;
                return;
            }
            keyPressed = true;
            counterver += 10;
            ball.style.top = counterver + "px";
        },30)
    }
    if(event.key == 'w' && !keyPressed){
        var interval = setInterval(function(){
            if(counterver <= 20){
                clearInterval(interval);
                keyPressed = false;
                return;
            }
            keyPressed = true;
            counterver -= 10;
            ball.style.top = counterver + "px";
        },30)
    }

}