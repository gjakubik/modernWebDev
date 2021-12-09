import Parse from 'parse';

export const createEvent = async (eventName, startDate, endDate, hostSchool, city, state) => {
    const myNewObject = new Parse.Object('Event');
    let schoolQuery = new Parse.Query("School");
    let schoolObj = await schoolQuery.get(hostSchool);

    myNewObject.set('eventName', eventName);
    myNewObject.set('startDate', startDate);
    myNewObject.set('endDate', endDate);
    myNewObject.set('hostSchool', schoolObj);
    myNewObject.set('city', city);
    myNewObject.set('state', state);
    try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('Event created', result);
    } catch (error) {
    console.error('Error while creating Event: ', error);
    }
};

export const getEvents = async () => {
    const Event = Parse.Object.extend('Event');
    const query = new Parse.Query(Event);

    query.ascending('startDate');

    try {
        const results = await query.find();
        // Use dict here so that ID can be easily accessed
        const finalObj = [];
        for (const event of results) {
            //const eventQuery = new Parse.Query(Parse.Object.extend('Event'));
            //const event = await eventQuery.get(object.get("hostSchool"));
            finalObj.push({
                objectId: event.id,
                hostSchool: event.get("hostSchool").get("schoolName"),
                eventName: event.get("eventName"),
                startDate: event.get("startDate"),
                endDate: event.get("endDate"),
                city: event.get("city"),
                state: event.get("state"),
                firstPlace: event.get("firstPlace"),
                secondPlace: event.get("secondPlace")
            });
        }
        console.log(finalObj);
        return finalObj;
    } catch (error) {
        console.error('Error while fetching Event', error);
        return {}
    }
};