// Model for user user crendetials
export class UserCredentials {
  email: string;
  password:string;
}

// Model for user profile

export class UserProfile {
    lastname: string;
    firstname: string;
}

// Model for favorites

export class Favorites {
    name:string;
    address:string;
    photo:Array<number>;
}
