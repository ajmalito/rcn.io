import React from 'react';
import Component from 'react-pure-render/component';
import './app.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h4 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h4>
    );
  }
}

const FontColumn = (props) => {
  const fontHeadingStyle = {
    fontWeight: '400',
    fontSize: '1rem',
    color: 'grey',
    borderBottom: '1px dashed lightgrey',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    marginBottom: '1rem',
    minHeight: '2rem',
  };

  const sampleText = `
    Dunnigan Hills Road Race
    64mi, 2h, 6814ft
    1234567890
    QWERTYqwerty Zz
    lb dl 6b illb
    Good job RCN rcn!`;

  const {className, fontName} = {...props};
  const colClasses = 'col-sm-2 ' + className;

  return (
    <div className={colClasses}>
      <div style={fontHeadingStyle}>{fontName}</div>
      {sampleText}
    </div>
  );
};


export class App extends Component { // eslint-disable-line react/no-multi-comp
  render() {
    const headerText = 'Road Races in CA, 100mi range'
      .toUpperCase();

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 transparent">
              <h1 className="oswald">{headerText}</h1>
              <h1 className="montserrat">{headerText}</h1>
              <h1 className="merriweather">{headerText}</h1>
              {/*
              <h1 className="francois-one">{headerText}</h1>
              <h1 className="aleo">{headerText}</h1>
              */}
            </div>
          </div>
          <div className="row">
            <FontColumn className="source-sans-pro" fontName="Source Sans Pro (H3 A2)"/>
            <FontColumn className="" fontName="Lato (H2 A1)"/>
            <FontColumn className="roboto" fontName="Roboto"/>
            <FontColumn className="roboto-condensed" fontName="Roboto Condensed"/>
            <FontColumn className="alegreya-sans" fontName="Alegreya Sans (H1 A3)"/>
            <FontColumn className="open-sans" fontName="Open Sans (H3 A4)"/>
          </div>
          <div className="row">
            <FontColumn className="merriweather-sans" fontName="Merriweather Sans"/>
            <FontColumn className="pt-sans" fontName="PT Sans"/>
            <FontColumn className="pt-sans-narrow" fontName="PT Sans Narrow"/>
            <FontColumn className="sans-condensed" fontName="Open Sans Condensed"/>
            <FontColumn className="fira-sans" fontName="Fira Sans"/>
          </div>
        </div>
        <br/>
        <Counter increment={1} color="lightblue" />
      </div>
    );
  }
}