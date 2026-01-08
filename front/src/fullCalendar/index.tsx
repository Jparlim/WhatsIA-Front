import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export function Calendar() {
    return (
        <div className="w-[400px] h-full ml-6">
            <FullCalendar
            height={450}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            weekends={true}
            eventContent={renderEventContent}
            buttonText={{ today: 'Hoje'}}
          />
        </div>
    )
}

// a custom render function
export function renderEventContent(eventInfo:any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}