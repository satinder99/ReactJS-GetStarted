import { Client, ID,Account} from 'appwrite'
import conf from '../conf/conf';

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("6562ed05ae63ce4fdc18");
        this.account = new Account(this.client);

        console.log("endpoint : ", conf.appwriteUrl);
    }


    async createAccount({email,password}){
        try {
            console.log("Inside createAccount : email is : ",email," Password is : ",password)
            const userAccount = await this.account.create(ID.unique(), email,password)
            console.log("userAccount from appwrite : ",userAccount);
            if(userAccount) return this.login({email,password})
        } catch (error) {
            console.log("AuthService :: createAccount() :: Error : ", error)
        }
        
        return null
    }

    async login({email,password}){
        try {
            const session = await this.account.createEmailSession(email,password);
            console.log("Login session in appwrite ", session);
            if(session) return session;
        } catch (error) {
            console.log("AuthService :: login() :: Error : ", error)
        }
        return null;
    }
}

const authservice = new AuthService()

export default authservice;