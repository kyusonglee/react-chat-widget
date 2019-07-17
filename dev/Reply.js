import React, {Component} from 'react';
// import {addUserMessage, dropMessages} from 'react-chat-widget';
// import {Tag} from 'antd'


class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFold: true,
    };
  }
  componentDidMount() {
    // if (window.innerWidth <= "768") {
    //   document.querySelector(".rcw-conversation-container").style.height = "60%";
    //   document.querySelector(".rcw-conversation-container .rcw-header").style.position = "relative";
    //   document.querySelector(".rcw-conversation-container .rcw-header").style.bottom = "0";
    //   document.querySelector(".rcw-messages-container").style.height = "2000px";
    //   document.querySelector(".rcw-widget-container").style.height = "80%";
    //   this.setState({isFold: false});
    // }
  }
  sendQuickReply = (reply) => {
    console.log(this.props); //returns empty object
    dropMessages();
    addUserMessage(reply);
    this.props.next(reply, this.props.this);
    //this.props.correct();  <-- should be called
  };
  render() {
    return (
        <div >
          {/*{this.props.value ?*/}
          {/*    this.props.value.map(x =>*/}
          {/*      <Tag*/}
          {/*        key={x}*/}
          {/*        style={{marginBottom:"5px"}}*/}
          {/*        color="yellow"*/}
          {/*        className={"response"}*/}
          {/*        onClick={*/}
          {/*          this.sendQuickReply.bind(this, x)*/}
          {/*        }>{x}</Tag>) : null*/}
          {/*}*/}
        </div>)
  }
}

export default Reply;
