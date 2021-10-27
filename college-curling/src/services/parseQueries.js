import Parse from 'parse';

export const getSchools = async () => {
    const School = Parse.Object.extend('School');
    const query = new Parse.Query(School);
    
    try {
        const results = await query.find();
        console.log(results);
        const finalObj = [];
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            finalObj.push({
                objectId: object.get('objectId'),
                schoolName: object.get('schoolName'),
                city: object.get('city'),
                state: object.get('state')
            })
        }
        console.log(finalObj);
        return finalObj
    } catch (error) {
        console.error('Error while fetching School', error);
    return []
    }
};

export const createTeam = async (year, rank, schoolID) => {
    const myNewObject = new Parse.Object('Team');
    myNewObject.set('rank', rank);
    myNewObject.set('year', year);
    myNewObject.set('schoolID', new Parse.Query("School").equalTo('objectID', schoolID));
    myNewObject.set('wins', 0);
    myNewObject.set('losses', 0);
    myNewObject.set('ties', 0);
    try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('Team created', result);
    } catch (error) {
    console.error('Error while creating Team: ', error);
    }
};

export const createPlayer = async (firstName, lastName, teamID) => {
    const myNewObject = new Parse.Object('Player');
    myNewObject.set('firstName', firstName);
    myNewObject.set('lastName', lastName);
    myNewObject.set('teamID', new Parse.Query("Team").equalTo('objectID', teamID));
    try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Player created', result);
    } catch (error) {
        console.error('Error while creating Player: ', error);
    }
};