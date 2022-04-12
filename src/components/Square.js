
import React, { Component } from 'react'

class Square extends Component {
  handleClick = () => {
    this.props.thePlayerSelection(this.props.index)
  }
  render() {
    return (
      <>
        <div className="square" onClick={this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square

// class index extends Component {
//   render(){
//     return(
//       <>
//         <div className="square"></div>

//       <button className="square" onClick={this.props.onClick}>

//       </button>

//       </>
//     );
//   }

// }

// export default index;


//Imported from Treasure Hunt 

// class Square extends Component {

//   handleClick = () => {
//     this.props.handleGamePlay(this.props.index)
//   }

//   render() {
//     return(
//       <>
//         <div className="square" onClick={this.handleClick}>
//           {this.props.value}
//         </div>
//       </>
//     )
//   }
// }

// export default Square



//Prior Code, did not like props. 

// import Square from './components/Square'

// class Square extends Component {
//   render() {
//     return (
//       <>
//       <div>
//          <Square value={props.squares[0]} onClick={() =>{props.onClick(0)} } />
//       </div>
//       <div className="square"></div>

//     <button className="square" onClick={this.props.onClick}>

//     </button>
//        </>
//     )
//   }
// }

// export default Square;
