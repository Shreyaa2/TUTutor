const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You have come to the right place!'
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
