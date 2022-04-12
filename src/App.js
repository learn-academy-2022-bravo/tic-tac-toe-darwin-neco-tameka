import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Game from './components/Game'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

//comment

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>

        <div className='gameboard'>
         
        {this.state.squares.map((value, index) => 
        {
          return(
            
             <Square 
              key={index}
              value={value}
              index={index}

              handleGamePlay={this.handleGamePlay}
              />
              
            )
        })}

        </div>
        
      </>
    )
  }
}
export default App
