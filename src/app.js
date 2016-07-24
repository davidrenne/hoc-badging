import React from 'react';
import ReactDom from 'react-dom';
import Avatar from './Avatar';
import TextButton from './TextButton';
import Badge from './Badge';

const AvatarBadged = Badge(0)(Avatar);
const TextButtonBadged = Badge(11)(TextButton);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }

  componentWillMount(){
    this.intervalAvatar = setInterval(()=>{
      this.refs.avatar.increment();
    }, 5000);
    this.intervalTextButton = setInterval(()=>{
      this.refs.textbutton.increment();
    }, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalAvatar);
    clearInterval(this.intervalTextButton);
  }

  render(){
    return (
      <div>
        <AvatarBadged ref="avatar" cbClick={()=>{
          if (this.state.Text){
            this.setState({Text: undefined});
          } else {
            this.setState({Text: 'Menu goes here: '+Date.now() });
          }
        }}/><span>{this.state.Text}</span>
        <TextButtonBadged ref='textbutton' text="Click me" />
      </div>);
  }
}

ReactDom.render(<App />, document.getElementById('app'));
