import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import type { DateClickArg } from "@fullcalendar/interaction"

const events = [
  { title: 'Meeting', start: new Date() }
]

type CalendarProps = {
  onDateSelect: (date:string) => void;
}

export function Calendar({ onDateSelect }: CalendarProps) {

  function HandleClick(info: DateClickArg) {
    onDateSelect(info.dateStr);
  }

    return (
        <div className="min-w-[600px] max-h-[600px] ml-6 bg-white border-bordas border-[1px] rounded-[16px] p-8">
            <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            weekends={true}
            eventContent={renderEventContent}
            buttonText={{ today: 'Hoje'}}
            fixedWeekCount={false}
            showNonCurrentDates={true}
            dateClick={HandleClick}
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