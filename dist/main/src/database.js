"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const realm_1 = __importDefault(require("realm"));
class Message extends realm_1.default.Object {
    _id;
    to_whom;
    text_theme;
    message;
    static schema;
}
;
class Post extends realm_1.default.Object {
    _id;
    title;
    description;
    static schema;
}
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
    realmInstance = await realm_1.default.open({
        path: path_1.default.join(__dirname, 'myrealm.realm'),
        schema: [Message, Post],
    });
}
;
function createMessage(message) {
    realmInstance.write(() => {
        realmInstance.create('Message', {
            _id: new realm_1.default.BSON.ObjectId(),
            to_whom: message.to_whom,
            text_theme: message.text_theme,
            message: message.message,
        });
    });
}
;
function getMessages() {
    return realmInstance.objects('Message').map((msg) => ({
        _id: msg._id.toString(),
        to_whom: msg.to_whom,
        text_theme: msg.text_theme,
        message: msg.message,
    }));
}
;
function deleteMessages() {
    realmInstance.write(() => {
        const allMessages = realmInstance.objects('Message');
        realmInstance.delete(allMessages);
    });
}
;
// function delteMessageById(messageId) {
//     realmInstance.write(() => {
//         const messageToDelete = realmInstance.objectForPrimaryKey('Message', new Realm.BSON.ObjectId(messageId));
//         if (messageToDelete) {
//             realmInstance.delete(messageToDelete);
//         }
//     });
// };
function createPost(IPost) {
    realmInstance.write(() => {
        realmInstance.create('Post', {
            _id: new realm_1.default.BSON.ObjectId(),
            title: IPost.title,
            description: IPost.description,
        });
    });
}
;
function getPosts() {
    return realmInstance.objects('Post').map((post) => ({
        _id: post._id.toString(),
        title: post.title,
        description: post.description,
    }));
}
;
function deletePosts() {
    realmInstance.write(() => {
        const allPosts = realmInstance.objects('Post');
        realmInstance.delete(allPosts);
    });
}
;
function deletePostById(postId) {
    realmInstance.write(() => {
        const postToDelete = realmInstance.objectForPrimaryKey('Post', new realm_1.default.BSON.ObjectId(postId));
        if (postToDelete) {
            realmInstance.delete(postToDelete);
        }
    });
}
;
exports.default = { getRealm, createMessage, getMessages, createPost, getPosts, deleteMessages, deletePosts };
//# sourceMappingURL=database.js.map