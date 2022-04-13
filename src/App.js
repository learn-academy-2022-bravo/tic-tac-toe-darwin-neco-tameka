import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      winner: null,
      currentPlayer: "☠️"
    }
  }

  thePlayerSelection = (currentClick) => {
    const { squares, currentPlayer, winner } = this.state
    if (squares[currentClick] === null && !winner) {
      squares[currentClick] = currentPlayer
      this.setState({
        squares: squares,
        currentPlayer: currentPlayer === "☠️" ? "⚓️": "☠️"
      })
    }
    this.winning()
  }

  winning = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningConditions.forEach(value => {

      const [one, two, three] = value

      const { squares } = this.state

      if (
        squares[one] === "☠️" && squares[two] === "☠️" && squares[three] === "☠️"
      ) {
        this.setState({ winner: "☠️" })
      } else if (
        squares[one] === "⚓️" && squares[two] === "⚓️" && squares[three] === "⚓️"
      ) {
        this.setState({ winner: "⚓️" })
      }
    })
  }

  restartTheGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      winner: null,
      currentPlayer: "⚓️",
    })
  }


  render() {
    const {squares, winner} = this.state
    const tieGame = squares.every(value => value !== null)
    return (
      <>
        <h1>Sink or Swim</h1>
        {winner && <h3>{winner} WINS THE GAME!!</h3>}
        {(tieGame && !winner) && <h3>TIE the game ended!</h3>}
        {(winner || tieGame) &&
          <div className="button">
            <button onClick={this.restartTheGame}>
              Play Another Game
            </button>
          </div>
        }
        <div className="gameboard">
          {squares.map((value, index) => {
            return (
              <Square
                value={value}
                index={index}
                key={index}
                thePlayerSelection={this.thePlayerSelection}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default App


  

//     return null;
// }


// //comment

//   render(){
//     return(
//       <>
//         <h1>Tic Tac Toe</h1>

//         <div className='gameboard'>
         
//         {this.state.squares.map((value, index) => 
//         {
//           return(
            
//              <Square 
//               key={index}
//               value={value}
//               index={index}

//               handleGamePlay={this.handleGamePlay}
//               />
              
//             )
//         })}

//         </div>
        
//       </>
//     )
//   }
// }
// export default App



// function calculateWinner(squares) {
//   const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//   ];

  // for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
  //         return squares[a];
  //     }
  // }


// handleGamePlay = (index) => {
  //   const { board, treasureLocation, bombLocation } = this.state
  //   if(index === treasureLocation) {
  //     board[index] = "💎"
  //     this.setState({board: board})
  //   } else if(index === bombLocation) {
  //     board[index] = "💣"
  //     this.setState({board: board})
  //   } else {
  //     board[index] = "🌴"
  //     this.setState({board: board})
  //   }
  // }