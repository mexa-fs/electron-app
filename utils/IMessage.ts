export interface IMessage {
    _id: string;
    to_whom: string;
    text_theme: string;
    message: string;
}

export interface CreateMessageDTO {
    to_whom: string;
    text_theme: string;
    message: string;
}