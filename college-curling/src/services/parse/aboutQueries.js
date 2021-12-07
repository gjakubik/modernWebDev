import Parse from "parse";

export const getAbout = async () => {
    const About = Parse.Object.extend('About');
    const query = new Parse.Query(About);
    
    try {
        const results = await query.find();
        console.log(results);
        const finalObj = [];
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            finalObj.push({
                objectId: object.id,
                title: object.get('title'),
                content: object.get('content')
            })
        }
        console.log(finalObj);
        return finalObj
    } catch (error) {
        console.error('Error while fetching About\'s Content', error);
        return {}
    }
};