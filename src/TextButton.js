import React from 'react';

class TextButton extends React.Component {
  getStyle(){
    return {
      marginTop: "10px",
      height:"30px"
    };
  }
  render(){
    return (
      <button style={this.getStyle()} onClick={()=>{alert('button clicked')}}>
        {this.props.text}
      </button>
    );
  }
}

TextButton.propTypes = {
  text: React.PropTypes.string
}
export default TextButton;
