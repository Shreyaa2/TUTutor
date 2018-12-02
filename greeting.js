////const e = React.createElement;

//class Greets extends React.Component{
    ////constructor(props) {
    ////    super(props);
    ////    this.state = {  };
    ////}
    
    //render(){
      //  if (document.getElementById('pupilFirst')) {
        //   // (document.forms["pupilform"].getElementById('sub').clicked == true)
        //    var name = document.forms["pupilform"]["pupilFirst"].value;   
        //} else if (document.getElementById('tutorFirst')){
        //    var name = document.forms["tutorform"]["tutorFirst"].value;            
        //} else {
        //    var name = 'anonymous';
        //}
        //return <h3>Hello, {name}!</h3>;
        
    //}
//}

//const domContainer = document.getElementById('greeting');
////.querySelector('#greeting');
//ReactDOM.render(<Greets />, domContainer);

const e = React.createElement;
//var nameP = document.getElementById("pupilFirst").value;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
        //var name = document.forms["pupilform"]["pupilFirst"].value;
        //var nameS = name.toString();
      return 'You have come to the right place!'
        //nameP;
        //'Hello!';
        //document.forms["pupilform"]["pupilFirst"].value;
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Looking for tutors or pupils?'
    );
  }
}

const domContainer = document.querySelector('#greeting');
ReactDOM.render(e(LikeButton), domContainer);
