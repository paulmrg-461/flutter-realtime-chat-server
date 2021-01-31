const User = require('../models/user');
const Message = require('../models/message');

const userOnline = async ( uid = '' ) => {
    const user = await User.findById( uid );
    user.online = true;
    await user.save();

    return user;
}
const userOffline = async ( uid = '' ) => {
    const user = await User.findById( uid );
    user.online = false;
    await user.save();

    return user;
}

const saveMessage = async (payload) => {
    /* 
        payload: {
            from: '',
            to: '',
            message: ''
        }
    */
    try {
        const message = new Message( payload );
        await message.save();
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    userOnline, 
    userOffline,
    saveMessage
}