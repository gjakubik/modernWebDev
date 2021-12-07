import Parse from 'parse';

export const getForm = async () => {
    const Form = Parse.Object.extend('Form');
    const query = new Parse.Query(Form);
    
    try {
        const results = await query.find();
        console.log(results);
        const finalObj = [];
        for (const object of results) {
            // Access the Parse Object attributes using the .GET method
            finalObj.push({
                objectId: object.id,
                description: object.get('description'),
                link: object.get('link')
            })
        }
        console.log(finalObj);
        return finalObj
    } catch (error) {
        console.error('Error while fetching About\'s Content', error);
        return {}
    }
};