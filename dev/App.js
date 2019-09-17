import React, { Component } from 'react';
import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  handleOnChangeMessage,
  toggleWidget
} from "../index";
import "../lib/styles.css";
import "./widget.css";

export default class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  componentDidMount() {
    // toggleWidget();
    console.log(this.props);
    addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  handleOnChangeMessage = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }


  render() {
    return (
      <div style={{minHeight: '100vh'}}>
        <Widget
          title=""
          subtitle=""
          senderPlaceHolder="..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          handleOnChangeMessage={this.handleOnChangeMessage}
          badge={1}
          fullScreenMode={true}
          showCloseButton={false}
          // onLeft={true}
        />
      </div>
    );
  }
}
