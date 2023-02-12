import React from 'react'
import { Text, View } from 'react-native'
import { getArticle } from '../context/database'

interface Props {
    articleID : string
}

export const Article = ({articleID} : Props) => {
    const [articles, setArticles] = React.useState<any>();
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    React.useEffect(()=>{
        (async () => {
            const articleResponse = await getArticle(articleID);
            setArticles(articleResponse);
            setIsLoading(false)
        })()
    }, [])

    // if(article){
        return (
            <View>
                <Text>{!!articles && articles.title}</Text>
            </View>
        )
    // }

    // return (
    //     <View>
    //         <Text>404 - Article does not exist</Text>
    //     </View>
    // )
    
}