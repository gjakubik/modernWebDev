import Parse from 'parse';


export const getTeams = async () => {
    const Team = Parse.Object.extend('Team');
    const query = new Parse.Query(Team);

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

export const getSchools = async () => {
    const School = Parse.Object.extend('School');
    const query = new Parse.Query(School);
    
    try {
        const results = await query.find();
        console.log(results);
        const finalObj = {};
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            finalObj[object.get('schoolName')] = {
                objectId: object.id,
                schoolName: object.get('schoolName'),
                city: object.get('city'),
                state: object.get('state')
            }
        }
        console.log(finalObj);
        return finalObj
    } catch (error) {
        console.error('Error while fetching School', error);
        return {}
    }
};

export const createSchool = async (schoolName, city, state) => {
    const myNewObject = new Parse.Object('School');

    myNewObject.set('schoolName', schoolName);
    myNewObject.set('city', city);
    myNewObject.set('state', state);

    try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('School created', result);
    } catch (error) {
    console.error('Error while creating School: ', error);
    }
};

export const createTeam = async (year, rank, schoolID, wins, losses, draws) => {
    const myNewObject = new Parse.Object('Team');
    let schoolQuery = new Parse.Query("School");
    let schoolObj = await schoolQuery.get(schoolID);

    myNewObject.set('rank', rank);
    myNewObject.set('year', year);
    myNewObject.set('schoolID', schoolObj.toPointer());
    myNewObject.set('wins', parseInt(wins));
    myNewObject.set('losses', parseInt(losses));
    myNewObject.set('ties', parseInt(draws));
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