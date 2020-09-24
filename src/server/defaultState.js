import md5 from 'md5';

export const defaultState = {
    // session: {
    //     authenticated: false
    // },
    users: [
        {
            id: "U1",
            team: "T1",
            name: "laura_dev",
            passwordHash: md5('12345')
        }, {
            id: "U2",
            team: "T1",
            name: "mary_nat",
            passwordHash: md5('12345')
        }, {
            id: "U3",
            team: "T2",
            name: "john_wall",
            passwordHash: md5('12345')
        }, {
            id: "U4",
            team: "T3",
            name: "john_doe",
            passwordHash: md5('12345')
        }
    ],
    teams: [
        {
            id: "T1",
            name: "Developers"
        }, {
            id: "T2",
            name: "Network Engineers"
        }, {
            id: "T3",
            name: "Security"
        }
    ],
    events: [
        {
            name: "Refactor Tests",
            id: "E1",
            team: "T1",
            owner: "U1",
            date: '2020-09-15',
            isComplete: false,
        },
        {
            name: "OAuth features",
            id: "E2",
            team: "T1",
            owner: "U1",
            date: '2020-09-26',
            isComplete: false,
        },
        {
            name: "Security protocols analysis",
            id: "E3",
            team: "T2",
            owner: "U2",
            date: '2020-09-28',
            isComplete: false,
        },
        {
            name: "Config load balancer",
            id: "E4",
            team: "T2",
            owner: "U2",
            date: '2020-09-22',
            isComplete: false,
        },
        {
            name: "Meeting with CTO",
            id: "E5",
            team: "T3",
            owner: "U3",
            date: '2020-09-22',
            isComplete: false,
        },
    ],
    comments: [
        {
            id: "C1",
            owner: "U1",
            event: "E1",
            content: "First comment from user 1 to event 1"
        }, {
            id: "C2",
            owner: "U1",
            event: "E1",
            content: "Second comment from user 1 to event 1"
        }, {
            id: "C3",
            owner: "U2",
            event: "E1",
            content: "Third comment from user 2 to event 1"
        }
    ]
};
