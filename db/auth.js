const users = [
    {
        "id": 987654,
        "username": "user1",
        "date_joined": "2022-01-01",
        "active": true,
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "pfp": "https://bark-coding.vercel.app/src/images/Logo.svg",
        "password": "123"
    },
    {
        "id": 123456,
        "username": "user2",
        "date_joined": "2022-01-02",
        "active": false,
        "bio": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "pfp": "https://bark-coding.vercel.app/src/images/Logo.svg",
        "password": "myPersonalPassword"
    },
    {
        "id": 789012,
        "username": "user3",
        "date_joined": "2022-01-03",
        "active": true,
        "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "pfp": "https://bark-coding.vercel.app/src/images/Logo.svg",
        "password": "SupperSecret"
    }
];
class Auth {
    constructor() { }

    exists(id) {
        const user = users.find(user => user.id === id);
        if (user) {
            return user;
        } else {
            throw new Error('User does not exist.');
        }
    }

    logged() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        } else {
            return null;
        }
    }

    logOut() {
        localStorage.removeItem('user');
    }

    closedBrowser() {
        const currentUser = this.logged();
        if (currentUser) {
            const userIndex = users.findIndex(user => user.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].active = false;
            } else {
                throw new Error('Current user not found in users array.');
            }
        }
    }

    openedBrowser() {
        const currentUser = this.logged();
        if (currentUser) {
            const userIndex = users.findIndex(user => user.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex].active = true;
            } else {
                throw new Error('Current user not found in users array.');
            }
        }
    }

    pfpEdit(id, newPfp) {
        const currentUser = this.logged();
        if (currentUser) {
            if (currentUser.id === id) {
                const userIndex = users.findIndex(user => user.id === currentUser.id);
                if (userIndex !== -1) {
                    users[userIndex].pfp = newPfp;
                } else {
                    throw new Error('Current user not found in users array.');
                }
            } else {
                throw new Error('Unauthorized: You can only edit your own profile picture.');
            }
        } else {
            throw new Error('No user logged in.');
        }
    }
    bioEdit(id, bio) {
        const currentUser = this.logged();
        if (currentUser) {
            if (currentUser.id === id) {
                const userIndex = users.findIndex(user => user.id === currentUser.id);
                if (userIndex !== -1) {
                    users[userIndex].bio = bio;
                } else {
                    throw new Error('Current user not found in users array.');
                }
            } else {
                throw new Error('Unauthorized: You can only edit your own profile picture.');
            }
        } else {
            throw new Error('No user logged in.');
        }
    }
    login(userName, password) {
        const user = this.exists(userName)
        if (password == user.password) {
            localStorage.setItem('user', user)
            return true;
        } else {
            throw new Error('Not valid')
        }

    }
}
