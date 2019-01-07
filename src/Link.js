import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  isClassPresent = function(className) {
    const aClasses = this.state.class.split(' ');
    return aClasses.indexOf(className) > -1;
  }

  isValidClassName = function(className){
    if(className.length<1) return false;
    return className.search(/\s/)===-1
  }

  _onMouseEnter = () => {
    this.setState(
      (state, props) => {
        console.log(`onMouseEnter the current class ${state.class} and isClassPresent: ${this.isClassPresent(STATUS.NORMAL)}`);
        const answer = this.isClassPresent(STATUS.NORMAL) ?
            state.class.replace(/(\s|^)normal(\s|$)/ /*new RegExp(`(\s|^)${STATUS.NOMAL}(\s|$)`)*/, STATUS.HOVERED) :
            `${state.class} ${STATUS.HOVERED}`;
        return {class: answer};
      }  /*{class: STATUS.HOVERED}*/);
  }

  _onMouseLeave = () => {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}