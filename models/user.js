'use strict';

class User {
    constructor(firstName, lastName, email, passwordHash) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordHash = passwordHash;
    }
}

module.exports = User;
