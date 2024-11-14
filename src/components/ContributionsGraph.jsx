"use client"
import React from 'react'
import { ContributionCalendar } from 'react-contribution-calendar'



const ContributionsGraph = () => {
    const data = [
        { '2023-12-04': { level: 1 } },
        { '2023-12-16': { level: 1 } },
        { '2024-01-20': { level: 1 } },
        { '2024-01-21': { level: 2 } },
        { '2024-02-18': { level: 1 } },
        { '2024-03-10': { level: 1 } },
        { '2024-03-30': { level: 1 } },
        { '2024-03-31': { level: 1 } },
        { '2024-04-07': { level: 1 } },
        { '2024-05-11': { level: 1 } },
        { '2024-07-21': { level: 1 } },
        { '2024-08-27': { level: 1 } },
        { '2024-08-31': { level: 1 } },
        { '2024-09-16': { level: 1 } },
        { '2024-09-18': { level: 1 } },
        { '2024-09-21': { level: 4 } },  // 30 contributions
        { '2024-09-22': { level: 1 } },
        { '2024-09-23': { level: 2 } },
        { '2024-09-26': { level: 1 } },
        { '2024-10-02': { level: 2 } },
        { '2024-10-03': { level: 2 } },
        { '2024-10-04': { level: 3 } },  // 12 contributions
        { '2024-10-05': { level: 2 } },
        { '2024-10-06': { level: 2 } },
        { '2024-10-08': { level: 1 } },
        { '2024-10-10': { level: 2 } },
        { '2024-10-11': { level: 2 } },
        { '2024-10-12': { level: 2 } },
        { '2024-10-14': { level: 1 } },
        { '2024-10-16': { level: 1 } },
        { '2024-10-18': { level: 2 } },
        { '2024-10-19': { level: 2 } },
        { '2024-10-21': { level: 2 } },
        { '2024-10-23': { level: 1 } },
        { '2024-10-25': { level: 1 } },
        { '2024-10-26': { level: 2 } },
        { '2024-10-27': { level: 2 } },
        { '2024-10-30': { level: 1 } },
        { '2024-10-31': { level: 1 } },
        { '2024-11-01': { level: 1 } },
        { '2024-11-02': { level: 2 } },
        { '2024-11-03': { level: 3 } },  // 9 contributions
        { '2024-11-05': { level: 2 } },
        { '2024-11-06': { level: 1 } },
        { '2024-11-08': { level: 1 } },
        { '2024-11-10': { level: 2 } }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto my-8 bg-white dark:bg-inherit">
            <h2 className="text-2xl mb-5 font-bold text-black dark:text-white">Contribution Activity</h2>
            <div className="
                [--cal-level-0-color:#ebedf0] dark:[--cal-level-0-color:#262626]
                [--cal-level-1-color:#9be9a8] dark:[--cal-level-1-color:#0e4429]
                [--cal-level-2-color:#40c463] dark:[--cal-level-2-color:#006d32]
                [--cal-level-3-color:#30a14e] dark:[--cal-level-3-color:#26a641]
                [--cal-level-4-color:#216e39] dark:[--cal-level-4-color:#39d353]
            ">
                <ContributionCalendar
                    data={data}
                    start="2023-11-04"
                    end="2024-12-30"
                    daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                    textColor="currentColor"
                    startsOnSunday={true}
                    includeBoundary={true}
                    theme={{
                        level0: 'var(--cal-level-0-color)',
                        level1: 'var(--cal-level-1-color)',
                        level2: 'var(--cal-level-2-color)',
                        level3: 'var(--cal-level-3-color)',
                        level4: 'var(--cal-level-4-color)'
                    }}
                    cx={14}
                    cy={14}
                    cr={2}
                    scroll={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        fontSize: '1rem',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                />
            </div>

        </div>
    )
}

export default ContributionsGraph