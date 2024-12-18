# API
BAPI, made by dumorando, and is open-sourced!

The API is hosted at (github.com/dumorando/bapiv2)[https://github.com/dumorando/bapiv2]

## Fetches

api/v2/users
```json

{
    "count": 1000,
    users: [{
        "username": "johndoe",
        "bio": "Lorem ipsum dolor sit amit",
        "profilepicture": "data:image/png;base64..."
    },
    {
        "username": "janedoe",
        "bio": "I started painting as a hobby when I was little",
        "profilepicture": "data:image/png;base64..."
    }
    ]
}
```

api/v2/fetchUser?username=USERNAME
```json

{
    "username": "johndoe",
    "bio": "lorem lpsum",
    "profilepicture": "data:image/png;base64..."
}
```