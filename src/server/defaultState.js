export const defaultState = {
    users: [
        {
            id: "U1",
            name: "Laura Dev"
        }, {
            id: "U2",
            name: "Mary Nat"
        }, {
            id: "U3",
            name: "John Wall"
        }
    ],
    teams: [
        {
            name: "Developers",
            id: "T1",
            owner: "U1"
        }, {
            name: "Network Engineers",
            id: "T2",
            owner: "U2"
        }, {
            name: "Security",
            id: "T3",
            owner: "U3"
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
            owner: "U1",
            id: "C1",
            event: "E1",
            content: "Great work !!!"
        }
    ]
};
