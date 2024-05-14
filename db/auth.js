const users = [];
function generateUniqueID() {
    let id;
    do {
        // Generate a random number between 100000 and 999999
        id = Math.floor(Math.random() * 900000) + 100000;
    } while (users.some(user => user.id === id));
    return id;
}
function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
class Auth {
    constructor() { }

    exists(idOrUsername) {
        const user = users.find(user => user.id === idOrUsername || user.username === idOrUsername);
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
        const user = this.exists(userName);
        if (password === user.password) {
            localStorage.setItem('user', JSON.stringify(user)); // Serialize user object
            return true;
        } else {
            throw new Error('Not valid');
        }
    }
    createUser(username, email, password, date, gender){
        const obj = {
            id: generateUniqueID(),
            username: username,
            date_joined:getTodaysDate(),
            active: false,
            bio: '',
            pfp: 'https://bark-coding.vercel.app/src/images/Logo.svg',
            password: password,
            birthday: date,
            gender: gender,
            email: email 
        }
        users.push(obj);
        this.login(username, password)
    }
}
function redirect(){
    if(new Auth().logged()){
        window.location.href = "/"
    }
}