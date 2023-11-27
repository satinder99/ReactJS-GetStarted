import conf from "../conf/conf";
import {Client, ID, Databases, Query, Storage} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket; //same as storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
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
            console.log("Service :: createPost():: Error : ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Service :: updatePost() :: Error : ", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Service :: deletePost() :: Error : ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getPost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Service :: deletePost() :: Error : ", error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal('status',"active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Service :: getPosts() :: Error : ",error);
        }   
    }


    /**
     * File related service - createFile(), deleteFile(), updaloadFile()
     */

    async createFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Service :: createFile() :: Error", error);
            return false;
        }
    }

    async deletefile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Service :: deleteFile() :: Error : ", error);
            return false
        }
    }

    getFilePreview(fileID){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Service :: getFilePreview() :: Error : ", error );
        }
    }

}

const service = new Service()

export default service;