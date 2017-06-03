// Model for user crendetials
export class UserCredentials {
  email: string;
  password:string;
}

// Model for user profile

export class UserProfile {
    lastname: string;
    firstname: string;
}

// Model for favorites places

export class Favorites {
    name:string;
    address:string;
    photo:Array<number>;
}

export class UserData {
    lastname: string;
    firstname: string;
    uid:string;
}
