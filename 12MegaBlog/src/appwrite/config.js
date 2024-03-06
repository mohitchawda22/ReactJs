import { query } from "express";
import { conf } from "../conf.js";
import { Client, Databases, ID,Storage,Query } from "appwrite";


export class DatabaseService{
    client=new Client()
    databases
    storage


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases=new Storage(this.client)
        this.storage=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }


    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDatabasesId(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            ) 
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
              )
            return true

        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries=[Query.eqaul("status","equal")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
        )
    } catch (error) {
        throw error
    }
    }

    // file uplaod services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const databaseService=new Service()

export default databaseService

