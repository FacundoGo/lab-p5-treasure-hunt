class Player {
    constructor(col, row, img){
      this.col = col;
      this.row = row;
      this.score = 0;
      this.image = img;
    }
    drawPlayer(){
      fill('blue');
      // clear();
      game.drawGrid();
      // game.drawGame();
      // draw();
      image(this.image, this.col, this.row, 100, 100);
    //   rect(5, 5, 40, 4x0);
      
    }
    moveUp(){
      this.row -= 100;
      
      
    }
    moveDown(){
      this.row += 100;
      
    }
    moveLeft(){
      this.col -= 100
      
    }
    moveRight(){
      this.col += 100;
      
    }
    score1(){
      this.score =+ 1
    }
    
  }