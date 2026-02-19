import path from "path";
import Realm from "realm";
import { IMessage } from "../utils/IMessage";
import { IPost } from "../utils/IPost";



class Message extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    to_whom!: string;
    text_theme!: string;
    message!: string;

    static schema: Realm.ObjectSchema;
};

class Post extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    title!: string;
    description!: string;

    static schema: Realm.ObjectSchema;
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

let realmInstance: any;

async function getRealm() {
    realmInstance = await Realm.open({
        path: path.join(__dirname, 'myrealm.realm'),
        schema: [Message, Post],
    });
};

function createMessage(message: IMessage) {
    realmInstance.write(() => {
        realmInstance.create('Message', {
            _id: new Realm.BSON.ObjectId(),
            to_whom: message.to_whom,
            text_theme: message.text_theme,
            message: message.message,
        });
    });
};

function getMessages(): IMessage[] {
    return realmInstance.objects('Message').map((msg: IMessage) => ({
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

// function delteMessageById(messageId) {
//     realmInstance.write(() => {
//         const messageToDelete = realmInstance.objectForPrimaryKey('Message', new Realm.BSON.ObjectId(messageId));
//         if (messageToDelete) {
//             realmInstance.delete(messageToDelete);
//         }
//     });
// };

function createPost(IPost: IPost) {
    realmInstance.write(() => {
        realmInstance.create('Post', {
            _id: new Realm.BSON.ObjectId(),
            title: IPost.title,
            description: IPost.description,
        });
    });
};

function getPosts() {
    return realmInstance.objects('Post').map((post: IPost) => ({
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

function deletePostById(postId: string) {
    realmInstance.write(() => {
        const postToDelete = realmInstance.objectForPrimaryKey('Post', new Realm.BSON.ObjectId(postId));
        if (postToDelete) {
            realmInstance.delete(postToDelete);
        }
    });
};

export default { getRealm, createMessage, getMessages, createPost, getPosts, deleteMessages, deletePosts };