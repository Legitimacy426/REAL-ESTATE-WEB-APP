import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)



const TimeAgof = ({date}) => {

  return (
    <ReactTimeAgo date={date} locale="en-US"/>
  )
}

export default TimeAgof
