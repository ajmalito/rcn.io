import React from 'react'
import Component from 'react-pure-render/component'
import 'styles/bootstrap.scss'
import 'app.scss'
import Row from 'atoms/Row.jsx'
import Col from 'atoms/Col.jsx'
import Icon from 'atoms/Icon.jsx'
import Event from 'calendar/events/Event.jsx'
import Badge from 'calendar/badges/Badge.jsx'
import RoundBadge from 'calendar/badges/RoundBadge.jsx'
import SquareBadge from 'calendar/badges/SquareBadge.jsx'
import Colors from 'styles/colors'
import WeekExample from 'temp/WeekExample.jsx'
import Grid from 'styles/grid'
import Typography from 'styles/typography'

import { Link } from 'react-router'

//TODO: remove these components
const Spacer = width => <span style={{width: `${width}px`}}></span>
const S5 = () => <Spacer width={5}/>
const S10 = () => <Spacer width={10}/>

const ContainerHeader = ({label, width}) => {
  return (
    <div>
      <h3>{label} — {width}px</h3>
      <hr />
    </div>
  )
}


export default class Dev extends Component {
  render() {
    const sizeToPx = size => (Typography.BASE_FONT_SIZE_PX * Typography.scaleUp(size)) + 'px'
    const getFontSize = size => Typography.scaleUp(size) + 'rem'
    const eventName = `John C. Schlesinger Memorial Circuit Race and Team Time Trial AND SOME UPPER CASE
    John C. Schlesinger Memorial Circuit Race and Team Time Trial
    John C. Schlesinger Memorial Circuit Race and Team Time Trial
    John C. Schlesinger Memorial Circuit Race and Team Time Trial
    John C. Schlesinger Memorial Circuit Race and Team Time Trial
    JOHN C. SCHLESINGER MEMORIAL CIRCUIT RACE AND TEAM TIME TRIAL
    JOHN C. SCHLESINGER MEMORIAL CIRCUIT RACE AND TEAM TIME TRIAL
    JOHN C. SCHLESINGER MEMORIAL CIRCUIT RACE AND TEAM TIME TRIAL
    `

    const shortEventName = 'Land Park Criterium'
    const longEventName = 'Chico Stage Race pb Sierra Nevada Brewing Co - Stage 4: Steve Harrison Memorial Criterium'

    let containerWidth = null

    if (this.props.containerWidth) {
      containerWidth = <span style={{color: 'grey'}}>{this.props.containerWidth}<small>PX</small></span>
    } else {
      containerWidth = <span style={{color: 'salmon'}}>UNDEFINED</span>
    }

    return (
      <div>
        <div>
          <Link
            key={8}
            to={{
              pathname: '/events/evt-8',
              state: { modal: true, returnUrl: this.context.locationPathname }
            }}>Open Modal</Link>
        </div>
        <div>
          <Link
            key={9}
            to={{
              pathname: '/mtb',
              state: { modal: true, returnUrl: this.context.locationPathname }
            }}>Open Dev</Link>
        </div>
        <h1>{this.props.foo}</h1>
        <h1>H1 {sizeToPx(7)} {eventName} <Icon name="directions_bike"/> </h1>
        <h2>H2 {sizeToPx(5)} {eventName}</h2>
        <h3>H3 {sizeToPx(4)} {eventName}</h3>
        <h4>H4 {sizeToPx(3)} {eventName}</h4>
        <h5>H5 {sizeToPx(2)} {eventName}</h5>

        <h2>EVENT COMPONENTS, container {containerWidth}</h2>
        <p className={'text-sm-9'} style={{fontSize:9}}>{'9px'} {eventName}</p>
        <p className={'text-' + 1} style={{fontSize:getFontSize(1)}}>{sizeToPx(1)} {eventName}</p>
        <p className={'text-sm-11'} style={{fontSize:11}}>{'11px'} {eventName}</p>
        <p className={'text-sm-12'} style={{fontSize:12}}>{'12px'} {eventName}</p>

        <p className={'text-' + 2} style={{fontSize:getFontSize(2)}}>{sizeToPx(2)} {eventName}</p>
        <p className={'text-' + 3} style={{fontSize:getFontSize(3)}}>{sizeToPx(3)} {eventName}</p>
        <p className={'text-' + 4} style={{fontSize:getFontSize(4)}}>{sizeToPx(4)} {eventName}</p>
        <p className={'text-' + 5} style={{fontSize:getFontSize(5)}}>{sizeToPx(5)} {eventName}</p>
        <p className={'text-' + 6} style={{fontSize:getFontSize(6)}}>{sizeToPx(6)} {eventName}</p>
        <p className={'text-' + 7} style={{fontSize:getFontSize(7)}}>{sizeToPx(7)} {eventName}</p>
        <Row className="margin-top">
          <Col sm={2}><h5>Round Badges: </h5></Col>
          <Col sm={12} className="display-flex">
            <RoundBadge size={2}>8</RoundBadge>
            <RoundBadge size={1}>8</RoundBadge>
            <RoundBadge size={2}><Icon name="directions_car"/></RoundBadge>
            <RoundBadge size={1}><Icon name="directions_car"/></RoundBadge>
            <RoundBadge size={2}>RR</RoundBadge>
            <RoundBadge size={1}>RR</RoundBadge>
            <RoundBadge size={2}>TT</RoundBadge>
            <RoundBadge size={1}>TT</RoundBadge><S5/>
            <RoundBadge size={2} className="Inverted">RR</RoundBadge><S5/>
            <RoundBadge size={2} className="Inverted">8</RoundBadge><S5/>
            <RoundBadge size={1} className="Inverted">8</RoundBadge><S5/>
            <RoundBadge size={2} className="Inverted"><Icon name="directions_car"/></RoundBadge><S5/>
            <RoundBadge size={1} className="Inverted"><Icon name="directions_car"/></RoundBadge>
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Not so Round Badges: </h5></Col>
          <Col sm={12} className="display-flex">
            <Badge>120mi</Badge><S5/>
            <Badge>8</Badge><S5/>
            {/*<Badge><Icon name="trophy"/></Badge><S5/>*/}
            <Badge><Icon name="wb_sunny"/></Badge><S5/>
            <Badge><Icon name="place"/><S5/>Monterey, CA</Badge><S5/>
            <Badge className="Inverted"><Icon name="place"/><S5/>Monterey, CA</Badge>
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Square Badges: </h5></Col>
          <Col sm={12} className="display-flex">
            <SquareBadge>120mi</SquareBadge><S5/>
            <SquareBadge>8</SquareBadge><S5/>
            {/*<SquareBadge><Icon name="trophy"/></SquareBadge><S5/>*/}
            <SquareBadge><Icon name="wb_sunny"/></SquareBadge><S5/>
            <SquareBadge><Icon name="place"/><S5/>Monterey, CA</SquareBadge>
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Square Badges (Inverted): </h5></Col>
          <Col sm={12} className="display-flex">
            <SquareBadge className="Inverted">120mi</SquareBadge><S5/>
            <SquareBadge className="Inverted">8</SquareBadge><S5/>
            {/*<SquareBadge className="Inverted"><Icon name="trophy"/></SquareBadge><S5/>*/}
            <SquareBadge className="Inverted"><Icon name="wb_sunny"/></SquareBadge><S5/>
            <SquareBadge className="Inverted"><Icon name="place"/><S5/>Monterey, CA</SquareBadge>
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Elevation:</h5></Col>
          <Col sm={12} className="display-flex">
            <Icon name="arrow_upward" color={Colors.grey500}/>1200ft<S10/>
            <Icon name="arrow_upward" color={Colors.grey500}/>1200ft<S10/>
            {/*<Badge><Icon name="arrow-up"/>1200ft<S10/></Badge><S5/>*/}
            {/*<Badge><Icon name="long-arrow-up" />1200ft<S10/></Badge>*/}
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Distance:</h5></Col>
          <Col sm={12} className="display-flex">
            <Icon name="directions_bike" color={Colors.grey500}/>20mi<S10/>
            <Badge><Icon name="directions_bike"/>20mi</Badge><S10/>
            <Badge className="Inverted"><Icon name="directions_bike"/>20mi</Badge><S10/>
            44mi 60mi 120mi
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Duration:</h5></Col>
          <Col sm={12} className="display-flex">
            <Icon name="hourglass_empty" color={Colors.grey500}/>60min
            <S10/>
            <Badge><Icon name="hourglass_empty"/>60min</Badge><S5/>
            <Icon name="hourglass_empty" color={Colors.grey500}/>60min<S10/>
            <Icon name="hourglass_full" color={Colors.grey500} />60min<S10/>
            <Icon name="hourglass_full" color={Colors.grey500}/>60min<S10/>
          </Col>
        </Row>
        <Row>
          <Col sm={2}><h5>Location:</h5></Col>
          <Col sm={12} className="display-flex">
            <Icon name="place" color={Colors.grey500}/>Monterey, CA
          </Col>
        </Row>

        {/* CARDS CARDS CARDS*/}
        {/* CARDS CARDS CARDS*/}
        {/* CARDS CARDS CARDS*/}

        {/* all cards per-breakdown in columns*/}
        <h2>CARDS PER CONTAINER:</h2>

        <ContainerHeader label="XXL" width={Grid.ContainerWidth.XXL}/>
        <Row className="margin-top">
          <Col sm={14} className="debug-flex-cards">
            <Event id="test" id="test" debug width={1} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL}
              name="Dunnigan Hills Road Race"/>
            <Event id="test" debug width={2} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
            <Event id="test" debug width={3} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={4} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
          </Col>
        </Row>

        <ContainerHeader label="XL" width={Grid.ContainerWidth.XL}/>
        <Row className="margin-top">
          <Col sm={14} className="debug-flex-cards">
            <Event id="test" debug width={1} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name="Dunnigan Hills Road Race"/>
            <Event id="test" debug width={2} baseHeight={5} containerWidth={Grid.ContainerWidth.XL}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
            <Event id="test" debug width={3} baseHeight={5} containerWidth={Grid.ContainerWidth.XL}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={4} baseHeight={5} containerWidth={Grid.ContainerWidth.XL}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
          </Col>
        </Row>

        <ContainerHeader label="LG (iPad landscape, small laptops)" width={Grid.ContainerWidth.LG}/>
        <Row className="margin-top">
          <Col sm={14} className="debug-flex-cards">
            <Event id="test" debug width={1} baseHeight={4} containerWidth={Grid.ContainerWidth.LG}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={2} baseHeight={4} containerWidth={Grid.ContainerWidth.LG}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
            <Event id="test" debug width={3} baseHeight={4} containerWidth={Grid.ContainerWidth.LG}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
            <Event id="test" debug width={4} baseHeight={4} containerWidth={Grid.ContainerWidth.LG}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
          </Col>
        </Row>

        <ContainerHeader label="MD (iPad portrait)" width={Grid.ContainerWidth.MD}/>
        <Row className="margin-top">
          <Col sm={14} className="debug-flex-cards">
            <Event id="test" debug width={1} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name="Dunnigan Hills Road Race"/>
            <Event id="test" debug width={2} baseHeight={3} containerWidth={Grid.ContainerWidth.MD}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={3} baseHeight={3} containerWidth={Grid.ContainerWidth.MD}
              name="RED KITE OMNIUM EVENT #1 - THE BUMP CIRCUIT RACE (WINTER)"/>
            <Event id="test" debug width={4} baseHeight={3} containerWidth={Grid.ContainerWidth.MD}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
          </Col>
        </Row>

        <ContainerHeader label="SM (iPhone 6+ landscape)" width={Grid.ContainerWidth.SM}/>
        <Row className="margin-top">
          <Col sm={14} className="debug-flex-cards">
            <Event id="test" debug width={1} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name="Dunnigan Hills Road Race"/>
            <Event id="test" debug width={2} baseHeight={2} containerWidth={Grid.ContainerWidth.SM}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={3} baseHeight={2} containerWidth={Grid.ContainerWidth.SM}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
            <Event id="test" debug width={4} baseHeight={2} containerWidth={Grid.ContainerWidth.SM}
              name="John C. Schlesinger Memorial Circuit Race and Team Time Trial"/>
          </Col>
        </Row>

        {/* all cards per-breakdown in rows*/}
        <Row className="margin-top">
          <Col sm={1}><Event id="test" debug width={1} baseHeight={2} containerWidth={Grid.ContainerWidth.SM}
            name="Land Park Criterium"/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={3} containerWidth={Grid.ContainerWidth.MD}
            name="Dunnigan Hills"/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={shortEventName}/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={shortEventName}/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={shortEventName}/></Col>
        </Row>
        <Row className="margin-top">
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={shortEventName}/>
          </Col>
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={shortEventName}/>
          </Col>
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={2} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={shortEventName}/>
          </Col>
          <Col sm={4}>
            <Event id="test" debug width={2} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={shortEventName}/>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col sm={1}>
            <Event id="test" debug width={3} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={shortEventName}/>
          </Col>
          <Col sm={5}>
            <Event id="test" debug width={3} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={shortEventName}/>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={shortEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={shortEventName}/>
          </Col>
          {/*<Col sm={2}>
            <Event id="test" debug width={4} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name="Dunnigan Hills Road Race"/>
          </Col>*/}
        </Row>


        {/* all cards per-breakdown in rows, long name*/}
        <Row className="margin-top">
          <Col sm={1}><Event id="test" debug width={1} baseHeight={2} containerWidth={Grid.ContainerWidth.SM}
            name="Land Park Criterium"/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={3} containerWidth={Grid.ContainerWidth.MD}
            name="Dunnigan Hills Road Race"/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={longEventName}/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={longEventName}/></Col>
          <Col sm={1}><Event id="test" debug width={1} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={longEventName}/></Col>
        </Row>
        <Row className="margin-top">
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={longEventName}/>
          </Col>
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={longEventName}/>
          </Col>
          <Col sm={1}>
            <Event id="test" debug width={2} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={2} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={longEventName}/>
          </Col>
          <Col sm={4}>
            <Event id="test" debug width={2} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={longEventName}/>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col sm={1}>
            <Event id="test" debug width={3} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={3} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={longEventName}/>
          </Col>
          <Col sm={5}>
            <Event id="test" debug width={3} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name={longEventName}/>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={2} containerWidth={Grid.ContainerWidth.SM} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={3} containerWidth={Grid.ContainerWidth.MD} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={4} containerWidth={Grid.ContainerWidth.LG} name={longEventName}/>
          </Col>
          <Col sm={2}>
            <Event id="test" debug width={4} baseHeight={5} containerWidth={Grid.ContainerWidth.XL} name={longEventName}/>
          </Col>
          {/*<Col sm={2}>
            <Event id="test" debug width={4} baseHeight={6} containerWidth={Grid.ContainerWidth.XXL} name="Dunnigan Hills Road Race"/>
          </Col>*/}
        </Row>

        <h1 className="oswald">Road Races in CA, 100mi range</h1>

        <WeekExample days={[1, 1, 1, 2, 2, 3, 4]}/>

        <WeekExample days={[1, 1, 1, 1, 2, 4, 4]}/>
        <WeekExample days={[1, 1, 1, 1, 3, 3, 4]}/>
        <WeekExample days={[1, 1, 1, 2, 2, 3, 4]}/>
        <WeekExample days={[1, 1, 2, 2, 2, 2, 4]}/>

        <WeekExample days={[1, 1, 1, 2, 3, 3, 3]}/>
        <WeekExample days={[1, 1, 2, 2, 2, 3, 3]}/>
        <WeekExample days={[1, 2, 2, 2, 2, 2, 3]}/>
        <WeekExample days={[2, 2, 2, 2, 2, 2, 2]} allSameSize/>
        <WeekExample days={[2, 2, 2, 2, 2, 2, 2]}/>

      </div>
    )
  }
}

Dev.contextTypes = {
  locationPathname: React.PropTypes.string
}
