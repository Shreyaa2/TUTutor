//const e = React.createElement;

class Greets extends React.Component{
    //constructor(props) {
    //    super(props);
    //    this.state = {  };
    //}
    
    render(){
        if (document.getElementById('pupilFirst')) {
           // (document.forms["pupilform"].getElementById('sub').clicked == true)
            var name = document.forms["pupilform"]["pupilFirst"].value;   
        } else if (document.getElementById('tutorFirst')){
            var name = document.forms["tutorform"]["tutorFirst"].value;            
        } else {
            var name = 'anonymous';
        }
        return <h3>Hello, {name}!</h3>;
        
    }
}

const domContainer = document.getElementById('greeting');
//.querySelector('#greeting');
ReactDOM.render(<Greets />, domContainer);
