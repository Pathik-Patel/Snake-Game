var row = 11;
var column = 11;
var target_row;
var target_column;
var snake_temp = [];
var snake = [];
var past = 4;

target_column = 15;
target_row = 15;

function again(){
    location.reload();
}

document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "blue";

document.getElementById("11-11").style.backgroundColor = "black";
document.getElementById("11-12").style.backgroundColor = "black";
document.getElementById("11-13").style.backgroundColor = "black";
document.getElementById("11-14").style.backgroundColor = "black";

snake.push("11-11");
snake.push("11-12");
snake.push("11-13");
snake.push("11-14");

function check(row,column){
    
    for(i=0;i<snake.length;i++){
        if(snake[i] == `${row}-${column}`){
            
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            document.getElementById("4").disabled = true;
            document.getElementById("heading").textContent = "You lose!";
        }
    }

}

function change_target(){

    target_column = Math.floor(Math.random()*10) + 11;
    target_row = Math.floor(Math.random()*10) + 11;
    
    for(i=0;i<snake.length;i++){

        if(snake[i] == `${target_row}-${target_column}` ){
            
            change_target();
            
            break;
        }
    }
    
    
    document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "blue";

}
function give(){

for(i=0;i<snake.length;i++)
{
    document.getElementById(`${snake[i]}`).style.backgroundColor = "black";
}
}

function add(){

    var snake_first_element_row = snake[0][0] + snake[0][1];
    var snake_second_element_row = snake[1][0] + snake[1][1];
    
    var snake_first_element_column = snake[0][3] + snake[0][4];
    var snake_second_element_column = snake[1][3] + snake[1][4];

    snake_first_element_column = parseInt(snake_first_element_column);
    snake_first_element_row = parseInt(snake_first_element_row);
    snake_second_element_column = parseInt(snake_second_element_column);
    snake_second_element_row = parseInt(snake_second_element_row);

//this checks that if last two button has same row then we need to add new one in the row 
if(snake_first_element_row == snake_second_element_row){
    
    //right to left
    //this checks that whether snake is goint right to left or not by snake elements.
    
    if( (snake_first_element_column - 1 ) == snake_second_element_column){
        
        //this checks that whether there is a place available at a end of snake to add element or not
        
        if((snake_first_element_column + 1) > 20){
            
            //if there is no space in the same row then we need to 
            //incerement or decrement the row insted of column
            
            //this checks that whether there is a place to increment row or not
            if((snake_first_element_row + 1) < 20){
                var id = (snake_first_element_row + 1) + "-" + (snake_first_element_column);
            }
            else{
                var id = (snake_first_element_row - 1) + "-" + (snake_first_element_column);
            }
        }
        else
        {
            var id = snake_first_element_row + "-" + (snake_first_element_column + 1);
        }

        snake.unshift(id);
    }
    //left to right
    //this checks that whether snake is goint left to right or not by snake elements.
    else{
        if((snake_first_element_column - 1) < 11){
            if((snake_first_element_row + 1) < 20){
                var id = (snake_first_element_row + 1) + "-" + (snake_first_element_column);
            }
            else{
                var id = (snake_first_element_row - 1) + "-" + (snake_first_element_column);
            }
        }
    else{
        var id = snake_first_element_row + "-" + (snake_first_element_column - 1);
    }
    snake.unshift(id);
}
}
//if they are in same row means they are in same column 
else if(snake_first_element_column == snake_second_element_column){
   
    //down to up
    //this checks that whether snake is goint down to up or not by snake elements.
    if((snake_first_element_row - 1 ) == (snake_second_element_row)){
        if((snake_first_element_row + 1) > 20){
            if((snake_first_element_column + 1) < 20){
                var id = (snake_first_element_row) + "-" + (snake_first_element_column + 1);
            }
            else{
                var id = (snake_first_element_row) + "-" + (snake_first_element_column - 1);
            }
        }
        else{

            var id = (snake_first_element_row + 1) + "-" + snake_first_element_column;
        
        }
        snake.unshift(id);
        
    }
    //up to down
    //this checks that whether snake is goint up to down or not by snake elements.
    else{
        if((snake_first_element_row - 1) < 11){
            if((snake_first_element_column + 1) < 20){
                var id = (snake_first_element_row) + "-" + (snake_first_element_column + 1);
            }
            else{
                var id = (snake_first_element_row ) + "-" + (snake_first_element_column - 1 );
            }
        }
        else{
            var id = (snake_first_element_row - 1) + "-" + snake_first_element_column;
            
        
        }
       
        snake.unshift(id);
        
    
}
        
}

}

function move(selected){
    
    var gaya_tha = 0;

    var first_element_row = snake[snake.length-1][0] + snake[snake.length-1][1];
    var first_element_column = snake[snake.length-1][3] + snake[snake.length-1][4];
    first_element_column = parseInt(first_element_column);
    first_element_row = parseInt(first_element_row);
    
    var temp_row = snake[0][0] + snake[0][1];
    var temp_column = snake[0][3] + snake[0][4];
    temp_row = parseInt(temp_row);
    temp_column = parseInt(temp_column);
    
    var direction = selected.id;

    if( (direction == 1 && first_element_row>11) && ( past != 2 ) )
    {
        common_part_1(direction);
        first_element_row = first_element_row - 1;
        check(first_element_row,first_element_column);
        if(first_element_row == target_row && first_element_column == target_column){
            add();
            gaya_tha = 1;
            
        }
        common_part_2(first_element_column, first_element_row, temp_column, temp_row);
        if(gaya_tha == 1){
            change_target();
        }
    }
    
    else if( (direction == 2 && first_element_row < 20 ) && ( past != 1) )
    {
        common_part_1(direction);
        first_element_row = first_element_row + 1;
        check(first_element_row,first_element_column);
        if(first_element_row == target_row && first_element_column == target_column){
            add();
            gaya_tha = 1;

            
        }
        common_part_2(first_element_column, first_element_row, temp_column, temp_row);

        if(gaya_tha == 1){
            change_target();
        }
        
    }

    else if( (direction == 3 && first_element_column > 11 ) && ( past != 4) )
    {   
        common_part_1(direction);
        first_element_column = first_element_column - 1;
        check(first_element_row,first_element_column);
        if(first_element_row == target_row && first_element_column == target_column){
            add();
            gaya_tha = 1;
        }
        common_part_2(first_element_column, first_element_row, temp_column, temp_row);
        if(gaya_tha == 1){
            change_target();
        }
    }
    
    else if( (direction == 4 && first_element_column < 20) && ( past != 3) )
    {
        common_part_1(direction);
        first_element_column = first_element_column + 1;
        check(first_element_row,first_element_column);
        if(first_element_row == target_row && first_element_column == target_column){
            add();
            gaya_tha  = 1;
        }
        common_part_2(first_element_column, first_element_row, temp_column, temp_row);
        if(gaya_tha == 1){
            change_target();
        }
    }

    
    snake_temp = [];

}


function common_part_1(direction){

    past = direction;

        for(i=0;i<snake.length;i++){
            snake_temp.push(snake[i]);
        }
    
        for(i=0;i<(snake_temp.length)-1;i++){
            snake[i] = snake_temp[i+1];
        }

}


function common_part_2(first_element_column, first_element_row, temp_column, temp_row){

    snake[snake.length-1] = `${first_element_row}-${first_element_column}`;
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
    
        document.getElementById(`${first_element_row}-${first_element_column}`).style.backgroundColor = "black";

        give();
}


/*
function move(selected){
    
        
    

    var first_element_row = snake[snake.length-1][0] + snake[snake.length-1][1];
    var first_element_column = snake[snake.length-1][3] + snake[snake.length-1][4];
    first_element_column = parseInt(first_element_column);
    first_element_row = parseInt(first_element_row);

    var temp_row = snake[0][0] + snake[0][1];
    var temp_column = snake[0][3] + snake[0][4];
    temp_row = parseInt(temp_row);
    temp_column = parseInt(temp_column);
    
    //console.log("first_element_row", first_element_row , "first_element_column", first_element_column, "temp_column",temp_column, "temp_row", temp_row);
    
    var direction = selected.id;

    



    if((direction == 1 && first_element_row>11)&&(past!=2)){
        past = direction;
        for(i=0;i<snake.length;i++){
            snake_temp.push(snake[i]);
        }
    
        for(i=0;i<(snake_temp.length)-1;i++){
            snake[i] = snake_temp[i+1];
        }

        first_element_row = first_element_row - 1;

        snake[snake.length-1] = `${first_element_row}-${first_element_column}`;
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
    
        document.getElementById(`${first_element_row}-${first_element_column}`).style.backgroundColor = "black";
    }
    
    else if((direction == 2 && first_element_row<20)&&(past!=1)){
        past = direction;
        for(i=0;i<snake.length;i++){
            snake_temp.push(snake[i]);
        }
    
        for(i=0;i<(snake_temp.length)-1;i++){
            snake[i] = snake_temp[i+1];
        }
        first_element_row = first_element_row + 1;
        snake[snake.length-1] = `${first_element_row}-${first_element_column}`;
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
    
        document.getElementById(`${first_element_row}-${first_element_column}`).style.backgroundColor = "black";
    }

    else if((direction == 3 && first_element_column>11)&&(past!=4)){
        past = direction;
        for(i=0;i<snake.length;i++){
            snake_temp.push(snake[i]);
        }
    
        for(i=0;i<(snake_temp.length)-1;i++){
            snake[i] = snake_temp[i+1];
        }
        
        first_element_column = first_element_column - 1;
        snake[snake.length-1] = `${first_element_row}-${first_element_column}`;
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
    
        document.getElementById(`${first_element_row}-${first_element_column}`).style.backgroundColor = "black";
    }
    
    else if((direction == 4 && first_element_column<20)&&(past!=3)){
        past = direction;

        for(i=0;i<snake.length;i++){
            snake_temp.push(snake[i]);
        }
    
        for(i=0;i<(snake_temp.length)-1;i++){
            snake[i] = snake_temp[i+1];
        }
        first_element_column = first_element_column + 1;
        snake[snake.length-1] = `${first_element_row}-${first_element_column}`;
        
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
        
        document.getElementById(`${first_element_row}-${first_element_column}`).style.backgroundColor = "black";
    }


    console.log(snake);
    snake_temp = [];




}


/*
function move(selected){
    console.log("hello");
    var temp_row = row;
    var temp_column = column;
    
    direction = selected.id;
    if(direction == 1 && row>11){
        row = row - 1;
        if(row == target_row && column == target_column){
            document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "white";
        }
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
        document.getElementById(`${row}-${column}`).style.backgroundColor = "black";
    }
    else if(direction == 2 && row<20){
        row = row + 1;
        if(row == target_row && column == target_column){
            document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "white";
        }
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
        document.getElementById(`${row}-${column}`).style.backgroundColor = "black";
    }
    else if(direction == 3 && column>11){
        column = column - 1;
        if(row == target_row && column == target_column){
            document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "white";
        }
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
        document.getElementById(`${row}-${column}`).style.backgroundColor = "black";
    }
    else if(direction == 4 && column<20){
        column = column + 1;
        if(row == target_row && column == target_column){
            document.getElementById(`${target_row}-${target_column}`).style.backgroundColor = "white";
        }
        document.getElementById(`${temp_row}-${temp_column}`).style.backgroundColor = "white";
        document.getElementById(`${row}-${column}`).style.backgroundColor = "black";
    }


}
















/*var prev_row = 0;
var prev_column = 0;


for(i=11;i<21;i++){
    
    task2(i-11,i);
    
}


function task2(i,row) { 

    setTimeout(function() { 

        for(j=11;j<21;j++){ 
            task(row,j,j-11);
            
        }

        prev_row = i + 11;

    }, 5000 * i); 
} 



function task(row,column,j) { 
  
    setTimeout(function() { 
        
        console.log(prev_row, prev_column,row,column);
        
        document.querySelector("#here").addEventListener("click",function(){
            for(i=0;i<10;i++){
                console.log("hello");
            }
            row = 15;
            column = 15;
        })

        if(column>11){
            document.getElementById(`${prev_row}-${prev_column}`).style.backgroundColor = "white";
        }
        if(column == 11 && row>11){
            document.getElementById(`${row-1}-${20}`).style.backgroundColor = "white";
        }
        document.getElementById(`${row}-${column}`).style.backgroundColor = "black";
  
        prev_column = column ;
  
    }, 500 * j); 
} 


*/