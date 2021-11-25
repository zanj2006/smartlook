type GeoType = {
    lat: number,
    lng: number
}

type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoType,
}

type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    phone: string,
    website: string,
    company: CompanyType,
}

export type PostType = {
    id: number,
    userId: number,
    title: string,
    body: string,
    user?: UserType,
    comments?: Array<CommentType>,
}

export type CommentType = {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string,
}

export type StateType = {
    activePost?: PostType,
    showUserDetail: boolean,
    users: Array<UserType>,
    posts: Array<PostType>,
    comments: Array<CommentType>,
    perPage: number,
    around: number,
    page?: number,
    maxPages?: number,
    curPosts?: Array<PostType>,
    toggledIndex?: number,
}

export type ActionType = {
    type: string,
    value: any,
    attr?: string,
}
