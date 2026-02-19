import { IPost } from "../../utils/IPost";

export {};

declare global {
    interface Window {
        api: {
            getPosts: () => Promise<void>;
            deletePostById: (id: string) => Promise<void>;
            createPost: (title) => Promise<void>;
            openMain: () => Promise<void>;
            createAddPostsPopUp: () => Promise<void>;
            onPostsUpdated: () => Promise<void>;
        }
    }
}
