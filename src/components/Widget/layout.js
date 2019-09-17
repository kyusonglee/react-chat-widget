import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

let fullScreenMode;

class WidgetLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Onlfet", this.props.onLeft);
    fullScreenMode = this.props.fullScreenMode;
    // console.log(document.styleSheets);
    let slide_in = [], slide_out = [];
    for (let x = 0; x < document.styleSheets.length; ++x) {
      for (let y = 0; y < document.styleSheets[x].cssRules.length; ++y) {
        if (document.styleSheets[x].cssRules[y].name !== undefined){
          if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 0; transform: translateX(50px); }"
            && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE
          ) {
            slide_in.push (document.styleSheets[x].cssRules[y]);
          }
          if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 1; transform: translateX(0px); }"
            && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE
          ) {
            slide_out.push(document.styleSheets[x].cssRules[y]);
          }
        }
      }
    }
    if (!this.props.fullScreenMode) {
      if (this.props.onLeft){
        slide_in.map((i) => {
          i.deleteRule(0);
          i.deleteRule(1);
          i.appendRule("0% { transform: translateX(0px); opacity: 0; }");
          i.appendRule("100% { transform: translateX(15px); opacity: 1; }");
        });

        slide_out.map((o) => {
          o.deleteRule(0);
          o.deleteRule(1);
          o.appendRule("0% { transform: translateX(15px); opacity: 0; }");
          o.appendRule("100% { transform: translateX(0px); opacity: 1; }");
        });

        document.querySelector(".rcw-widget-container").style.left = 0;
        if (document.querySelector(".rcw-launcher"))
          document.querySelector(".rcw-launcher").style.left = "10px";
        if (document.querySelector(".rcw-reply"))
          document.querySelector(".rcw-reply").style.borderRadius = "40px 40px 0 40px";
      } else {
        document.querySelector(".rcw-widget-container").style.right = 0;
        if (document.querySelector(".rcw-launcher"))
          document.querySelector(".rcw-launcher").style.right = "10px";
        if (document.querySelector(".rcw-reply"))
          document.querySelector(".rcw-reply").style.borderRadius = "40px 40px 40px 0";
      }
    } else {
      slide_in.map((i) => {
        i.deleteRule(0);
        i.deleteRule(1);
        i.appendRule("0% { transform: translateY(10px); opacity: 0; }");
        i.appendRule("100% { transform: translateY(0); opacity: 1; }");
      });

      slide_out.map((o) => {
        o.deleteRule(0);
        o.deleteRule(1);
        o.appendRule("0% { transform: translateX(0); opacity: 1; }");
        o.appendRule("100% { transform: translateX(10px); opacity: 0; }");
      });
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
              ifHeader={this.props.ifHeader}
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
              ifHeader={this.props.ifHeader}
            />
          }
        </div>
      );
    }
  }
}

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
  onLeft: PropTypes.bool,
  ifHeader: PropTypes.bool
};

export default connect(store => ({
  showChat: fullScreenMode? true : store.behavior.get('showChat'),
  // showChat: store.behavior.get('showChat'),
  disabledInput: store.behavior.get('disabledInput')
}))(WidgetLayout);
