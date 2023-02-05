import React, { useState,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'


const alanKey='13ea661e1326ee927f6be9e53ae8d29e2e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
    const [newsArticles,setNewsArticles]=useState([])
    const [activeArticle,setActiveArticle]=useState(-1);
    const classes = useStyles()
    useEffect(() => {  
      alanBtn({
        key:alanKey,
        onCommand:({command,articles,number})=>{
            if(command==='newHeadlines'){
                setNewsArticles(articles)
                setActiveArticle(-1)
            }else if(command==='highlight'){
              setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
            }else if(command==='open'){
              console.log(number)
              window.open(articles[number].url,'_blank')
            }
        }
      })
    }, [])
    
  return (
    

    
    <div>
        <alanBtn/>
        <div className={classes.logoContainer}>
            <img src="https://i0.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2019/11/preview.jpg?fit=1200%2C630&ssl=1" className={classes.alanLogo} alt="alan Logo"/>
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
    
  )
}

export default App