export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};


//export type Post: This line declares a TypeScript type named Post and exports it, 
//making it available for use in other modules
export type Post = {
    id: number,
    uuid: string,
    title: string,
    description: string,
    status: number,
    image: string,
    // image_url: string,
    // created_at: string,
    // updated_at: string,
}