import Parse from 'parse';

export const createEvent = async (eventName, startDate, endDate, hostSchool, city, state) => {
    const myNewObject = new Parse.Object('Event');
    let schoolQuery = new Parse.Query("School");
    let schoolObj = await schoolQuery.get(hostSchool);

    myNewObject.set('eventName', eventName);
    myNewObject.set('startDate', startDate);
    myNewObject.set('endDate', endDate);
    myNewObject.set('hostSchool', schoolObj.toPointer());
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
        const finalObj = {};
        for (const object of results) {
            const schoolQuery = new Parse.Query(Parse.Object.extend('School'));
            const school = await schoolQuery.get(object.get("schoolID").id);
            finalObj[object.id] = {
                objectId: object.id,
                schoolId: school.id,
                schoolName: school.get("schoolName"),
                schoolCity: school.get("city"),
                schoolState: school.get("state"),
                rank: object.get("rank"),
                wins: object.get("wins"),
                losses: object.get("losses"),
                ties: object.get("ties")
            }
        }
        console.log(finalObj);
        return finalObj;
    } catch (error) {
        console.error('Error while fetching Team', error);
        return {}
    }
};