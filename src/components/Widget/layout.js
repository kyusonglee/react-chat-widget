import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';


class WidgetLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(document.styleSheets);
    let slide_in, slide_out;
    for (let x = 0; x < document.styleSheets.length; ++x) {
      for (let y = 0; y < document.styleSheets[x].cssRules.length; ++y) {
        if (document.styleSheets[x].cssRules[y].name !== undefined){
          if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 0; transform: translateX(300px); }"
            && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE
          ) {
            slide_in = document.styleSheets[x].cssRules[y];
          }
          if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 1; transform: translateX(0px); }"
            && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE
          ) {
            slide_out = document.styleSheets[x].cssRules[y];
          }
        }
      }
    }

    if (this.props.onLeft){
      slide_in.deleteRule(0);
      slide_in.deleteRule(1);
      slide_in.appendRule("0% { transform: translateX(0px); opacity: 0; }");
      slide_in.appendRule("100% { transform: translateX(20px); opacity: 1; }");
      slide_out.deleteRule(0);
      slide_out.deleteRule(1);
      slide_out.appendRule("0% { transform: translateX(20px); opacity: 0; }");
      slide_out.appendRule("100% { transform: translateX(0px); opacity: 1; }");
      document.querySelector(".rcw-widget-container").style.left = 0;
      document.querySelector(".rcw-launcher").style.left = "10px";
    } else {
      document.querySelector(".rcw-widget-container").style.right = 0;
      document.querySelector(".rcw-launcher").style.right = "10px";
    }
  }
  render() {
    if (this.props.onLeft){
      return (
        <div
          className={
            `rcw-widget-container ${this.props.fullScreenMode ? 'rcw-full-screen' : ''} ${this.props.showChat ? 'rcw-opened' : ''}`
          }
        >
          {this.props.showChat &&
            <Conversation
              title={this.props.title}
              subtitle={this.props.subtitle}
              sendMessage={this.props.onSendMessage}
              senderPlaceHolder={this.props.senderPlaceHolder}
              onQuickButtonClicked={this.props.onQuickButtonClicked}
              profileAvatar={this.props.profileAvatar}
              toggleChat={this.props.onToggleConversation}
              showChat={this.props.showChat}
              showCloseButton={this.props.showCloseButton}
              disabledInput={this.props.disabledInput}
              autofocus={this.props.autofocus}
              titleAvatar={this.props.titleAvatar}
              handleOnChangeMessage={this.props.handleOnChangeMessage}
            />
          }
          {this.props.customLauncher ?
            this.props.customLauncher(this.props.onToggleConversation) :
            !this.props.fullScreenMode &&
            <Launcher
              toggle={this.props.onToggleConversation}
              badge={this.props.badge}
            />
          }
        </div>
      );
    } else {
      return (
        <div
          className={
            `rcw-widget-container ${this.props.fullScreenMode ? 'rcw-full-screen' : ''} ${this.props.showChat ? 'rcw-opened' : ''}`
          }
        >
          {this.props.customLauncher ?
            this.props.customLauncher(this.props.onToggleConversation) :
            !this.props.fullScreenMode &&
            <Launcher
              toggle={this.props.onToggleConversation}
              badge={this.props.badge}
            />
          }
          {this.props.showChat &&
            <Conversation
              title={this.props.title}
              subtitle={this.props.subtitle}
              sendMessage={this.props.onSendMessage}
              senderPlaceHolder={this.props.senderPlaceHolder}
              onQuickButtonClicked={this.props.onQuickButtonClicked}
              profileAvatar={this.props.profileAvatar}
              toggleChat={this.props.onToggleConversation}
              showChat={this.props.showChat}
              showCloseButton={this.props.showCloseButton}
              disabledInput={this.props.disabledInput}
              autofocus={this.props.autofocus}
              titleAvatar={this.props.titleAvatar}
              handleOnChangeMessage={this.props.handleOnChangeMessage}
            />
          }
        </div>
      );
    }
  }
}
// const WidgetLayout = props => (
//   <div
//     className={
//       `rcw-widget-container ${props.fullScreenMode ? 'rcw-full-screen' : ''} ${props.showChat ? 'rcw-opened' : ''}`
//     }
//   >
//     {props.customLauncher ?
//       props.customLauncher(props.onToggleConversation) :
//       !props.fullScreenMode &&
//       <Launcher
//         toggle={props.onToggleConversation}
//         badge={props.badge}
//       />
//     }
//     {props.showChat &&
//       <Conversation
//         title={props.title}
//         subtitle={props.subtitle}
//         sendMessage={props.onSendMessage}
//         senderPlaceHolder={props.senderPlaceHolder}
//         onQuickButtonClicked={props.onQuickButtonClicked}
//         profileAvatar={props.profileAvatar}
//         toggleChat={props.onToggleConversation}
//         showChat={props.showChat}
//         showCloseButton={props.showCloseButton}
//         disabledInput={props.disabledInput}
//         autofocus={props.autofocus}
//         titleAvatar={props.titleAvatar}
//         handleOnChangeMessage={props.handleOnChangeMessage}
//       />
//     }
//   </div>
// );

WidgetLayout.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  onSendMessage: PropTypes.func,
  onToggleConversation: PropTypes.func,
  showChat: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  onQuickButtonClicked: PropTypes.func,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  handleOnChangeMessage: PropTypes.func,
  onLeft: PropTypes.bool
};

export default connect(store => ({
  showChat: store.behavior.get('showChat'),
  disabledInput: store.behavior.get('disabledInput')
}))(WidgetLayout);
