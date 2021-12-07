import Parse from 'parse';

export const addUser = async (newUser) => {
    const user = new Parse.User();
  
    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
  
    console.log("User: ", user);
    return user
      .signUp()
      .then((newUserSaved) => {
        return newUserSaved;
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  };

export const signIn = async (username, password) => {
    try {
        const user = await Parse.User.logIn(username, password);
        return user;
    } catch (e) {
        console.log("Failed to sign in: ", e);
    }

};

export const logOut = async () => {
    try {
        await Parse.User.logOut();
        return "success";
    } catch (e) {
        return e;
    }
}

export const resetPassword = async (email) => {
    try {
        await Parse.User.requestPasswordReset(email);
        return "success"
    } catch (e) {
        return e;
    }
}