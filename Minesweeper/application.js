/* global React */
var Tile = React.createClass({
  render: function(){
    return(<span>T</span>);
  }
});

var Board = React.createClass({
  render: function(){
    var board = this.props.board;
    return (
      <div> {
        board.grid.map(function(row, rowIdx) {
          return(
            <div> {
                row.map(function(tile, colIdx){
                  return(
                    <Tile
                      tileObj={tile}
                      row={rowIdx}
                      column={colIdx}/>
                  );
                })
            } </div>
          );
        })
      } </div>
    );
  }
});

var Game = React.createClass({
  getInitialState: function(){
    return {
      board: new window.Minesweeper.Board(4,4),
      gameOver: false,
      gameWon: false
    };
  },
  updateGame: function(){

  },
  render:function(){
    return(
      <Board board={this.state.board} update={this.updateGame} />
    );
  }
});

React.render(<Game />, document.getElementById('game'));
