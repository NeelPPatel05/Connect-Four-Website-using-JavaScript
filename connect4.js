var curPlayer = 1; // Stores if either player 1 or player 2

let grid = [ //All grid slots equal 0 at start
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0]
    ];
var gameEnd;



window.onload = function(){
    startGame();
}

function startGame(){ //Creates an id for each location of grid into the HTML page
    for (let i = 0; i <grid.length; i++){
        for (let j = 0; j <grid[0].length; j++){

            //For HTML Adding new tiles to the grid in HTML
            let tile = document.createElement("div");
            tile.id = i.toString() + "," + j.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", function() {
                place(i, j); // Wrapped place function in an anonymous function
            });
            document.getElementById("grid").append(tile);
            
        }
    }
    
}



function place(row, col){
    if(gameEnd){
        return;
    }
    while (row <5 && grid[row+1][col]== 0) //Moves Tile to bottom
    {
        console.log(row);
            row++; 
            
    }
    
    if (grid[row][col] == 0) {
        grid[row][col] = curPlayer;
        checkWin();
        console.log(grid[row][col]);
        let tile = document.getElementById(row.toString() + "," + col.toString());
        
        if (curPlayer == 1) {
            tile.classList.add("p1Piece");
            curPlayer = 2;
        } else {
            tile.classList.add("p2Piece");
            curPlayer = 1;
        }
    }

}
function checkWin(){
    //Check Vertical Wins
    for(let i = 5; i>2; i--)
    {
        for (let j = 0; j <grid[0].length; j++)
        {
            if(grid[i][j] != 0 && grid[i][j]==grid[i-1][j] && grid[i-1][j]==grid[i-2][j] &&grid[i-2][j]==grid[i-3][j])
            {
                gameEnd = true;
                
            }
        }
    }

    //Check Horizontal Wins
    for(let i = 0; i<grid.length; i++)
    {
        for (let j = 0; j <4; j++)
        {
            if(grid[i][j] != 0 && grid[i][j]==grid[i][j+1] && grid[i][j+1]==grid[i][j+2] &&grid[i][j+2]==grid[i][j+3])
            {
                gameEnd = true;
                
            }
        }
    }

    //Check Diagonal Wins

    //Check Diagonal Bot Left To Top Right
    for(let i = 5; i>2; i--)
    {
        for (let j = 0; j <4; j++)
        {
            if(grid[i][j] != 0 && grid[i][j]==grid[i-1][j+1] && grid[i-1][j+1]==grid[i-2][j+2] &&grid[i-2][j+2]==grid[i-3][j+3])
            {
                gameEnd = true;
                
            }
        }
    }


    //Check Diagonal Bot Right To Top Left
    for(let i = 5; i>2; i--)
    {
        for (let j = 6; j >2; j--)
        {
            if(grid[i][j] != 0 && grid[i][j]==grid[i-1][j-1] && grid[i-1][j-1]==grid[i-2][j-2] &&grid[i-2][j-2]==grid[i-3][j-3])
            {
                gameEnd = true;
                
            }
        }
    }
    if (gameEnd)
    {
        let winner = document.getElementById("winnerText")
        if(curPlayer=1)
        {
            winner.innerText = "Red Wins";
        }
        else
        {
            winner.innerText = "Yellow Wins";
        }
    }

}

