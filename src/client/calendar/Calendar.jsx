import React, { PropTypes } from 'react'
import Component from 'react-pure-render/component'
import './Calendar.scss'
import Day from './Day.jsx'
import Week from './Week.jsx'
import Event from './events/Event.jsx'
import WeekdaysHeader from './WeekdaysHeader.jsx'
import { firstDayOfMonth, lastDayOfMonth } from './utils/date-utils.js'
import Colors from 'styles/colors'
import moment from  'moment-timezone'
import { createHighlightedStringComponent } from 'client/utils/component.js'
import { pxToRem } from 'styles/typography'

const getEventByDate = (eventsMap, date) => {
  const key = date.format('MMDDYYYY')
  return eventsMap.get(key) || []
}

class Calendar extends Component {
  // constructor(props) {
  //   super(props)
  //   this.handleScroll = this.handleScroll.bind(this)
  // }

  // handleScroll() {
  //   console.info('scroll')
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }


  render() {
    console.info('Calendar render is called')
    const {
      name,
      highlight,
      description,
      year,
      containerWidth,
      weekdaysSizes,
      events,
      timeZone,
      showPastEvents,
      draft = false,
      onShowFullHidePastClick
    } = this.props

    let shouldShowHidePastLink = false

    //time-zone specific moment factory
    const momentTZ = function() {
      return moment.tz(...arguments, timeZone)
    }

    const today = momentTZ()

    //TODO: refactor all the ternary expressions on simple conditional

    const eventsTotalFromToday = events.getTotalFrom(today)
    const eventsTotal = events.total
    const firstDayOfYear = momentTZ({year: year, month: 0, day: 1}).startOf('isoWeek')

    let startDate = firstDayOfYear
    let totalWeeks = startDate.isoWeeksInYear()

    // if first day of year is before today only then we wan to show hide/show past link
    if (firstDayOfYear.isBefore(today)) {
      startDate = showPastEvents
        ? firstDayOfYear
        : momentTZ().isoWeekday(-6) //this set's a date to two weeks back monday

      totalWeeks = showPastEvents
        ? startDate.isoWeeksInYear()
        : startDate.isoWeeksInYear() - startDate.get('isoWeeks') + 1
      shouldShowHidePastLink = true
    }

    let currentDate = startDate.clone()
    let weeksComponents = []

    for (let i = 1; i <= totalWeeks; i++) {
      let daysComponents = []

      let weekContainsFirstDayOfMonth = false

      for (let k = 1; k <= 7; k++) {
        const daySize = weekdaysSizes[currentDate.isoWeekday() - 1]
        const month = currentDate.month() + 1
        const currentDayIsToday = (today.isSame(currentDate, 'days'))
        //using to alternate between months so we they become easier to spot in a caledar
        const currentDayBelongsToAlternateMonth = (currentDate.month() % 2 === 0)

        const foundEvents = getEventByDate(events.map, currentDate)

        let eventComponents

        if (foundEvents.length > 0) {
          eventComponents = foundEvents.map((event, i) =>
            <Event id={event.id} key={i} width={daySize} containerWidth={containerWidth}
              name={event.name} event={event} draft={draft}/>
          )
        }

        const itIsFirstDayOfMonth = firstDayOfMonth(currentDate)
        if (itIsFirstDayOfMonth) {
          weekContainsFirstDayOfMonth = true
        }

        daysComponents.push(
          <Day key={k} year={currentDate.year()} month={month} day={currentDate.date()}
            size={daySize}
            itIsToday={currentDayIsToday}
            itIsFirstDayOfMonth={itIsFirstDayOfMonth}
            itIsLastDayOfMonth={lastDayOfMonth(currentDate)}
            isItAlternateMonthsDay={currentDayBelongsToAlternateMonth}
            containerWidth={containerWidth}
            dayOfWeek={currentDate.isoWeekday()}
            weekNumber={currentDate.isoWeek()}>
            {eventComponents}
          </Day>
        )
        currentDate.add(1, 'day')
      }

      const currentMonth = currentDate.month() + 1

      weeksComponents.push(
        <Week key={i} month={currentMonth} lastOne={i === totalWeeks}
          containsFirstDayOfMonth={weekContainsFirstDayOfMonth}>
          {daysComponents}
        </Week>
      )
    }

    let subTitleComp

    if (!showPastEvents) {
      subTitleComp = (
        <h3 className="sub-title">
          {eventsTotalFromToday} upcoming events from Today ({today.format('MMMM Do')})
          {shouldShowHidePastLink
            && <a className="show-more-or-less" onClick={onShowFullHidePastClick}>show all {eventsTotal} events</a>}
        </h3>
      )
    } else {
      subTitleComp = (
        <h3 className="sub-title">
          {eventsTotal} events
          {shouldShowHidePastLink &&
            <a className="show-more-or-less" onClick={onShowFullHidePastClick}>
              hide past {eventsTotal - eventsTotalFromToday} events
            </a>
          }
        </h3>
      )
    }

    const draftComp = draft
      ? (
      <span style={{
        color: 'rgb(255, 255, 255)',
        padding: '0.5rem 1rem',
        marginLeft: '2rem',
        fontStyle: 'normal',
        background: Colors.blueGrey300,
        borderRadius: pxToRem(2) + 'rem',
      }}>DRAFT</span>
      )
      : null

    const descComp = description
      ? <h4 className="sub-title" style={{marginBottom: '1rem'}}>{description}</h4>
      : null

    const nameCompChildren = highlight
      ? createHighlightedStringComponent(name, highlight.word, highlight.color)
      : name
    const nameComp = (
      <h1 className="title">
        {nameCompChildren}{draftComp}
      </h1>
    )



    return (
      <div className="Calendar">
        {/*{eventDetailsModal.isOpen && <EventDetailsModal onClose={this.onEventDetailsModalClose}/>}*/}
        {nameComp}
        {descComp}
        {subTitleComp}

        <WeekdaysHeader sizes={weekdaysSizes} containerWidth={containerWidth}/>
        <div className="body">
          {weeksComponents}
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  highlight: PropTypes.shape({
    word: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  calendarId: PropTypes.string.isRequired,
  weekdaysSizes: PropTypes.arrayOf(React.PropTypes.number),
  timeZone: PropTypes.string.isRequired, //list of timezones https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json
  events: PropTypes.shape({
    map: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
  }),
  containerWidth: PropTypes.number.isRequired,
  showPastEvents: PropTypes.bool,
  draft: PropTypes.bool,
  onShowFullHidePastClick: PropTypes.func,
}

import { connect } from 'react-redux'
import { toggleShowPastEvents } from 'shared/actions/actions.js'
import { getCalendar, getEventsByDateForCalendar } from 'shared/reducers/reducer.js'


export default connect(
  (state, ownProps) => ({
    ...getCalendar(state, ownProps),
    events: getEventsByDateForCalendar(state, ownProps)
  }),
  (dispatch, ownProps) => ({
    onShowFullHidePastClick: () => dispatch(toggleShowPastEvents(ownProps.calendarId))
  })
)(Calendar)
