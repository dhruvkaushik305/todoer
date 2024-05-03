import React from 'react'
import ActivityCalendar from 'react-activity-calendar'
//This is a calendar component to show the user's activity like a github calendar
const Calendar: React.FC = () => {
    const data = [
        {
            date: '2024-01-01',
            count: 10,
            level: 4
        },
        {
            date: '2024-01-02',
            count: 10,
            level: 4
        },
        {
            date: '2024-01-03',
            count: 10,
            level: 4
        },
        {
            date: '2024-02-01',
            count: 20,
            level: 3
        },
        {
            date: '2024-02-02',
            count: 20,
            level: 3
        },
        {
            date: '2024-03-01',
            count: 30,
            level: 2
        },
        {
            date: '2024-03-02',
            count: 30,
            level: 2
        },
        {
            date: '2024-04-01',
            count: 40,
            level: 1
        },
        {
            date: '2024-04-02',
            count: 40,
            level: 1
        },
    ]
    return (
        <div className='bg-white'>
            <ActivityCalendar data={data} blockMargin={3} blockRadius={3} blockSize={14} loading={false} showWeekdayLabels={true} theme={{
                "light": [
                    "hsl(0, 0%, 92%)",
                    "rebeccapurple"
                ],
                "dark": [
                    "hsl(0, 0%, 22%)",
                    "hsl(225,92%,77%)"
                ]
            }} />
        </div>
    )
}

export default Calendar