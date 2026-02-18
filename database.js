const path = require('path');
const Realm = require('realm');

class Message extends Realm.Object {}
class Post extends Realm.Object {}

Post.schema = {
  name: 'Post',
  properties: {
    _id: 'objectId',
    title: 'string',
    description: 'string',
  },
  primaryKey: '_id',
};

Message.schema = {
  name: 'Message',
  properties: {
    _id: 'objectId',
    to_whom: 'string',
    text_theme: 'string',
    message: 'string',
  },
  primaryKey: '_id',
};

let realmInstance;

async function getRealm() {
    realmInstance = await Realm.open({
        path: path.join(__dirname, 'myrealm.realm'),
        schema: [Message],
    });
};

function createMessage(to_whom, text_theme, message) {
    realmInstance.write(() => {
        realmInstance.create('Message', {
            _id: new Realm.BSON.ObjectId(),
            to_whom: to_whom,
            text_theme: text_theme,
            message: message,
        });
    });
};

function getMessages() {
    return realmInstance.objects('Message').map(msg => ({
        _id: msg._id.toString(),
        to_whom: msg.to_whom,
        text_theme: msg.text_theme,
        message: msg.message,
    }));
};

function deleteMessages() {
    realmInstance.write(() => {
        const allMessages = realmInstance.objects('Message');
        realmInstance.delete(allMessages);
    });
};

function createPost(title, description) {
    realmInstance.write(() => {
        realmInstance.create('Post', {
            _id: new Realm.BSON.ObjectId(),
            title: title,
            description: description,
        });
    });
};

function getPosts() {
    return realmInstance.objects('Post').map(post => ({
        _id: post._id.toString(),
        title: post.title,
        description: post.description,
    }));
};

function deletePosts() {
    realmInstance.write(() => {
        const allPosts = realmInstance.objects('Post');
        realmInstance.delete(allPosts);
    });
};

module.exports = { getRealm, createMessage, getMessages, createPost, getPosts, deleteMessages, deletePosts };