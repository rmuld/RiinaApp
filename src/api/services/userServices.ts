import { INewUser, IUser, IUserWithoutPassword } from "../interfaces/usersInterfaces";
import { users } from '../mockData/mockData';


const findUserById = (id: number): IUser | undefined => {
    let user: IUser | undefined = users.find(element => element.id === id);
    return user;
};


const getUserWithoutPassword = (user: IUser): IUserWithoutPassword => {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        personalNumber: user.personalNumber,
        phone: user.phone
    };
};

const unknownUser = (): IUser => {
    return {
            id: 0,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane@doe.com',
            password: 'jane',
            personalNumber: 4568008009,
            phone: "55676869"
        };
};

const getAllUsersService = () => {
    const usersWithoutPassword = users.map(user => {
        const userWithoutPassword = userServices.getUserWithoutPassword(user);
        return userWithoutPassword;
    });
}
    
const createUserService = (user: INewUser):number => {
    const id = users.length + 1;
    const newUser: IUser = {
        id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        personalNumber: user.personalNumber,
        phone: user.phone
    };
    users.push(newUser);
    return id;
}

const userServices = {
    findUserById, 
    getUserWithoutPassword,
    unknownUser,
    getAllUsersService,
    createUserService
}

export default userServices;