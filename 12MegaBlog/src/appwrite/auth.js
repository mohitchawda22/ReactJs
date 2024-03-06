import { conf } from "../conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setPRoject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.creat(ID.unique(),email, password, name);
            if(userAccount){
                // call another method
                return this.login({email,password})
            }
            else{
                return userAccount
            }
        }catch(error){
            throw error
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrenetUser(){
        try {
            await this.account.get()
        } catch (error) {
            throw error
        }

        return null
    }

    async logout(){
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            throw error
        }
    }
}

const authService=new AuthService()

export default authService