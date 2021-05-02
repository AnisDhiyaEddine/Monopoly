const axios = require("axios");
const baseUrl = 'http://localhost:3000'

// flow         server --> client
//              server <-- client
// In this file you will have the functions for the part  server <-- client // The client emits events to the server



// user : { name : "" } this name should be unique 
const registerUser = async (user) =>{
    try {
        const response = await axios.post(baseUrl+'/Register',{
            name : user.name
        })
        return response.data // success response.data === User registered successfully
    } catch (error) {
        console.error(error.response.data)
    }
    
}

// user : { name : "" } this name should be unique 
const deleteUser = async (data) => {
    try {
        const response = await axios.delete(baseUrl + '/deleteAccount', {
            data 
         })
        return response.data; // success response.data === user deleted
    } catch (error) {
        console.error(error.response.data);
    }
    
}
 
// data : {roomName, userName, gameName}
const newGame = async (data) => {
    try {
        const response = await axios.post(baseUrl + '/games/new',{
            ...data
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data)
    }
    /**
     * {
  _id: '608de22d908c8c9d69adfb75',
  owner: 'test',
  name: 'test',
  room: 'test',
  usersState: [],
  createdAt: '2021-05-01T23:20:13.288Z',
  updatedAt: '2021-05-01T23:20:13.288Z',
  __v: 0
    }
    */
}

//-------------------------------------------------------------

/**
 * think about your entire redux store 
 * 
            {
                user : "test"
                },
                score : 10,
                pion : "Pion haha",
                Cards : [
                    {
                        color : String,
                        price : Number,
                        hyp : Number,
                        housesOnCard : {
                            nbr : Number,
                            housePrice: Number,
                            houseSellPrice: Number
                        },
                        hotelsOnCard : {
                            nbr : Number,
                            hotelPrice: Number,
                            hotelSellPrice: Number
                        },
                        
                    }
                ]
            }
        ],
        room : "test"
    }
*/
const updateUserState = async (userState) => {
    try {
        const response = await axios.patch(baseUrl + '/games/update', userState);
        console.log(response.data);
        return response.data; // response.data === Game updated
    } catch (error) {
        console.error(error.response.data)
    }
}

const getGame = async (gameName) => {
    try {
        const response = await axios.get(baseUrl + '/games/game', {data :{ gameName}});
        console.log(response.data);
        return response.data; // gameStatus
    } catch (error) {
        console.error(error.response.data);
    }
}

/**
 * {
    "gameName" : "test",
    "userName" : "test"
}
*/
const deleteGame = async (data) => {
    try {
        const response = await axios.delete(baseUrl + '/games/delete', {
            data
        })
    } catch (error) {
        console.error(error.response.data)
    }
}


//user of type string user : 'test'
const getAllGames = async (user) => {
    try {
        const response = await axios.get(baseUrl + '/games/all' , {data : {
            user
        }})
        console.log(response.data);
        return response.data; // data
    } catch (error) {
        console.error(error.response.data)
    }
}


//Rooms
//data : {roomName, userName}
const createRoom = async (data) => {
    try {
        const response = await axios.post(baseUrl + '/rooms/create', {
            ...data
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data);
    }
}

//data : {roomName, userName}
const joinRoom = async (data) => {
    try {
        const response = await axios.patch(baseUrl + '/rooms/joinRoom',{
    ...data
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.response.data);  
    }
}

// data : {userName : 'test'}
const getRooms = async (data) => {
    try {
        const response = await axios.get(baseUrl + '/rooms/all',{
            data
        });
        console.log(response.data);
        return response.data; // [room1, room2, ....]
    } catch (error) {
        console.error(error.response.data);
    }
}

// data : {roomName, userName}
const deleteRoom = async (data) => {
try {
    const response = await axios.delete(baseUrl + '/rooms/delete', {
        data
    });
    console.log(response.data);
    return response.data;
} catch (error) {
    console.error(error.data);
}
}


// Thanks to hoisting yahoooo !!!
const joinRoomSync =  (data) => {
    //Socket is a global object here.
    socket.emit('joinRoom', data)
  }
  
  const quitRoomSync = (data) => {
    socket.emit('quitRoom', data)
  }
  
  const endGameSync = (data) => {
    socket.emit('endGame', data)
  }