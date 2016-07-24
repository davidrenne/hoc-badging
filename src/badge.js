import React from 'react';

const Badge = (startNbr=0) => {
  return (WrappedComponent) =>{

    class BadgedComponent extends React.Component {
      constructor(props){
        super(props);
        //setting up where to start
        this.state={nbr:startNbr};
        this.increment=this.increment.bind(this);
      }
      increment(){
        this.setState({nbr:++this.state.nbr});
      }
      getStyle(){
        return {
           position:'relative',
           top:'-17px',
           right:'5px',
           fontSize:'.8em',
           background:'green',
           color:'white',
           width:'20px',
           height:'20px',
           textAlign:'center',
           lineHeight:'15px',
           borderRadius:'50%',
           boxShadow:'0 0 2px #333',
           padding: "2px"
        };
      }
      render() {
        // only display if > zero
        const badgeDisplay = this.state.nbr > 0 ?
                <span style={this.getStyle()}>{this.state.nbr}</span> :
                undefined;
        return (
          <div onClick={()=>{this.setState({nbr:0})}}>
            <WrappedComponent {...this.props} />
            {badgeDisplay}
          </div>
        );
      }
    }

    return BadgedComponent;
  }
}

export default Badge;
