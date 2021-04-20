import React from 'react';
import './App.css';
import './Heading.css';
import './Status.css';
import './Btn.css';

function Heading() {
    return (
      <div>
        <header className="title">
         <h1 id="main">TICK TOCK TOE</h1>
         <h1 id="main">Impossible Mode</h1>
        </header>
      </div>
    );
  }
  function Btn(props){
    return (
        <div className="rld">
             <button className="btn" onClick={props.onClick}>RESTART</button>
        </div>
    );
  }
function Square(props)
{
  return(
         <button  id={props.id} onClick={props.onClick} className={props.value=== "O" ? "red":"green"} >{props.value}</button>
        );
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xext: true,
          count : 1,
        };
      }
      funreload(){
         window.location.reload();
     }  
  handleclick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xext ? 'X' : 'O'; 
//___________________________________________________________

    if (this.state.count === 1 && squares[4] == null)
      squares[4]="O"; 
    else 
     if (this.state.count === 1 && squares[4] != null)  
     {
         squares[0]="O";
     }
//_______________________________________________________________________ 

if (this.state.count === 3)
{ 
   let check = caniwin(squares,"X");
}
//var num=0;
//____________________________________________________________________________  
if(this.state.count === 5)
{
  let check=0;
  check=caniwin(squares,"O");
  if(check)
  caniwin(squares,"X");
}
//________________________________________________________________________________

if(this.state.count === 7)
{
  let check=0;
  check=caniwin(squares,"O");
  if(check)
   caniwin(squares,"X");
   else
   {
   for(let u=0;u<9;u++) 
    {
      if(squares[u]==null)
         squares[u]="O";
         break;
    }
  } 
}

//_____________________________________________________________________________________
    this.setState({
      squares: squares,
      count: this.state.count+2,
    });
  }   
  renderSquare(i,idd)
  {
    return(
      <Square id={idd} value={this.state.squares[i]}  setclass={this.state.xext} onClick={()=>this.handleclick(i)}></Square>
    );
  }    
  render(){
    const winner = calculateWinner(this.state.squares);
    let status;
   // if (winner==='O') {
     // status =  winner+" IS WINNER";
    //} 
   // else
    if (winner==='O')
    {
      status ="YOU LOST THE GAME";
    }
    else 
      if(winner===8)
        status = "IT's A DRAW";
      else
      status = "YOUR TURN(X)";
   return (
  <div className="App">
    <Heading/>
   <div className="row">
       {this.renderSquare(0,'a')}
       {this.renderSquare(1,'b')}
       {this.renderSquare(2,'c')}
   </div>
    <div className="row">
       {this.renderSquare(3,'d')}
       {this.renderSquare(4,'e')}
       {this.renderSquare(5,'f')}
   </div>
   <div className="row">
      {this.renderSquare(6,'g')}
      {this.renderSquare(7,'h')}
      {this.renderSquare(8,'i')}
   </div>
      <div className="stt">STATUS</div>
      <div className="stt2">{status}</div>
      <Btn onClick={()=>this.funreload()}/>
  </div> 
   );}
  }
export default App;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let count=0;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    else
     if(squares[a]&& squares[b]&& squares[c])
     count=count+1;
  }
  if(count===8)
    return count;
  return null;
}

function caniwin(squares,ele) {
  console.log("function called!!!!");
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  var exted=1;
  for (let i = 0; i < lines.length; i++)
   {
    const [a, b, c] = lines[i];
    if (squares[a] ===null && squares[b] === squares[c] && squares[c]===ele) 
     { 
       squares[a]="O";
       exted=0;
       break;
     }
    if(squares[b]==null && squares[a] === squares[c] && squares[c]===ele) 
    {
      exted=0;
      squares[b]="O";
      break;
      
    }
    if (squares[c]==null && squares[b] === squares[a] && squares[a]===ele)
    {
      exted=0;
      squares[c]="O";
      break;
    }
  } 
  if(exted===1 && ele==="X"){
    console.log(exted)
  for (let i = 0; i < lines.length; i++)
  {
    const [a, b, c] = lines[i];
    if (squares[a]==null && squares[b] ==null && squares[c]==="O")
    {
     squares[a]='O';
     break;
    }
    else
    if(squares[b]==null && squares[c] ==null && squares[a]==="O") 
    { 
      squares[b]='O';
      break;
    }
    else
      if (squares[a]==null && squares[c] ==null && squares[b]==="O")
      {
        squares[c]='O';
        break;
      }
  }
}
  return exted;
}