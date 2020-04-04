import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {

    return (
      <button
        className = "square"
        onClick={ ()=>props.onClick() }
      >
        { props.value }
      </button>
    )

}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square 
        value={this.props.board[i]}
        onClick={()=>this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      history: [{
        board: Array(9).fill(null)
      }],
      stepNumber: 0,
      isXnext: true
    }
  }

  handleClick(i){

    const history_copy = this.state.history.slice()
    const current = history_copy[this.state.stepNumber]
    const board_copy = current.board.slice()

    if (calculateWinner(board_copy) || board_copy[i]) {
      return
    }

    board_copy[i] = this.state.isXnext ? 'X' : 'O'

    this.setState({
      history: history_copy.concat([{
        board: board_copy
      }]),
      stepNumber: history_copy.length,
      isXnext: !this.state.isXnext
    })

  }

  render() {

    const history_copy = this.state.history
    const current = history_copy[this.state.stepNumber]
    const winner = calculateWinner(current.board)
    let status
    const moves = history_copy.map((step, move)=>{
      const description = move ? 'move #' + move : 'Game Start'
      return(
        <li key={move}>
          <button onClick= {()=>this.jumpTo(move)}>
            { description }
          </button>
        </li>
      )
    })

    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.isXnext ? 'X' : 'O')
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            board={current.board}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    )

  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      isXnext: (step % 2) === 0
    })
  }

}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

function calculateWinner(board) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
  
}
