import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export function Calendar() {
    return (
        <div className="min-w-[500px] max-h-[500px] ml-6 bg-white border-bordas border-[1px] rounded-[16px] p-8">
            <FullCalendar
            height={420}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            weekends={true}
            eventContent={renderEventContent}
            buttonText={{ today: 'Hoje'}}
            fixedWeekCount={false}
            showNonCurrentDates={true}
            headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next'
            }}
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