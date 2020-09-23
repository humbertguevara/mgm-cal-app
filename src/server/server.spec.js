import { addNewEvent, updateEvent } from './server'

(async function myFunc() {
    await addNewEvent({
        name: "Testing Event no.1",
        id: "E7",
        team: "T1",
        owner: "U1",
        date: '2020-09-28',
        isComplete: false,
    });

    await updateEvent({
        name: "E7 - UPDATED",
        id: "E7",
        team: "T1",
        owner: "U1",
        date: '2020-09-28',
        isComplete: false
    });

})();
