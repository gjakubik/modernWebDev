import Parse from "parse";

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

// Get all the players for a specific team
export const getPlayers = async (teamId) => {
    const Team = Parse.Object.extend('Team');
    const teamQuery = new Parse.Query(Team);
    
    try {
        const teamObj = await teamQuery.get(teamId);

        const Player = Parse.Object.extend('Player');
        const playerQuery = new Parse.Query(Player);

        query.include('Team');
        query.equalTo('Team', teamObj);

        const results = await playerQuery.find();
        var playerList = []
        for (const obj of results) {
            playerList.push({
                "firstName": obj.get('firstName'),
                "lastName": obj.get('lastName'),
            });
        }

        return playerList;
    } catch (err) {
        console.log(err);
        return [];
    }
};