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

    }


    async createAccount({email,password}){
        try {
            const userAccount = await this.account.create(ID.unique(), email,password)
            if(userAccount) return this.login({email,password})
        } catch (error) {
            console.log("AuthService :: createAccount() :: Error : ", error)
            return error
        }
        
        return null
    }

    async login({email,password}){
        try {
            const session = await this.account.createEmailSession(email,password);
            if(session) {
                return session;
            }
        } catch (error) {
            console.log("AuthService :: login() :: Error : ", error)
            return error
        }
        return null;
    }
    async logout(){
        try{ 
            return await this.account.deleteSessions()
        }
        catch(error){
            console.log("AuthService :: logout() :: Error : ", error)
            return error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("AuthService :: getCurrentUser() :: Error : ", error)
            return error
        }
    }
}

const authservice = new AuthService()

export default authservice;