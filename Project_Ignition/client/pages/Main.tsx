import { Card } from "@rneui/themed";
import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { Logout } from "../components/Authentication";
import { getArticles, Sort } from "../context/database";

interface ArticleCardProp {
    key : number,
    _title : string,
    _body : string
}

export const Main = () => {

    const [articles, setArticles] = React.useState<any[]>();
    const [ sortBy, setSortBy ] = React.useState(Sort.Featured)
    
    const fetchArticles = useCallback(async () => {
        const _articles = await getArticles({
            sortBy
        })

        setArticles([..._articles])
    }, [])

    React.useEffect(()=>{
        

        fetchArticles()
        .catch(console.error)
        
    }, [fetchArticles])

    const ArticleCard = ({_title, _body} : ArticleCardProp) => {
        
            return <Card>
                <Card.Title>{_title}</Card.Title>
                <Text>{_body}</Text>
            </Card>
        
    }

    const ArticleCards = () => {
        return <View>{
            articles?.map((_article, index) => <ArticleCard _title={_article.title} _body={_article.body} key={index}/>)
        }</View>
    }

    const Filter = () => {
        return <View><Text>This is a filter</Text></View>
    }


    return (
        <View>
            {/* <Filter/> */}
            <ArticleCards/>
            <Logout/>
        </View>
    )
}