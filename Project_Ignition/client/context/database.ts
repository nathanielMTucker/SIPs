import { collection, doc, DocumentData, Firestore, getDoc, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase.config';
export  * from "firebase/firestore"

export const FirestoreContext = React.createContext<Firestore>(db);

export const getArticle = async (id : string) : Promise<any> => {
    const articleRef = collection(db, "articles")
    const _query = query(articleRef, where("id", "==", id))

    let articles: any[] = []
    await getDocs(_query).then(_articles => {
        _articles.forEach(_article => {
            articles.push(_article.data())
        })
    })

    return articles;
    
}

export enum Sort {
    Featured,
    Most_Read,
    Highest_Rating,
    Highest_Price,
    Lowest_Price
}

interface ArticleSearchType {
    id? : string,
    keywords? : string,
    sortBy? : Sort
}

export const getArticles = async ({id, keywords = "", sortBy = Sort.Featured}:ArticleSearchType) : Promise<any[]> => {
    const articleRef = collection(db, "articles")
    let _query = articleRef

    const articles: any[] = []
    let _articles = await getDocs(_query)
    _articles.forEach(__article => {
        articles.push(__article.data() )
    })
    return articles;
    
}