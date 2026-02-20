import { CreateMessageDTO, IMessage } from "../../utils/IMessage";
import { CreatePostDTO, IPost } from "../../utils/IPost";

export {};

declare global {
    interface Window {
        api: {
            addPost: (postData: CreatePostDTO) => Promise<void>;
            getPosts: () => Promise<IPost[]>;
            deletePosts: () => Promise<IPost>;
            deletePostById: (id: string) => Promise<void>;
            createPost: (formData: IPost) => Promise<IPost>;
            createAddPostsPopUp: () => Promise<void>;
            onPostsUpdated: (callback: () => void) => Promise<void>;
            closePopUp: () => Promise<void>;
            deleteMessages: () => Promise<IMessage>;
            getMessages: () => Promise<IMessage[]>;
            submitForm: (formData: CreateMessageDTO) => Promise<void>;
            openPosts: () => Promise<void>;
            openInfo: () => Promise<void>;
            openMessages: () => Promise<void>;
            openMain: () => Promise<void>;
            openForm: () => Promise<void>;
        }
    }
}