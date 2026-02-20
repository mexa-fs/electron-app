export interface IPost {
    _id: string;
    title: string;
    description: string;
}

export interface CreatePostDTO {
    title: string;
    description: string;
}