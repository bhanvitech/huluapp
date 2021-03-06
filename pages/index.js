import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'



export default function Home({results}) {
  
  // console.log(props);
  return (

    <div >
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
     {/* Header -1 navbar2 results-3 */}
     <Header/>
   <Nav/>
   <Results results={results}/>
    </div>
  )
}
//this will ender first then client side rendering happens ie. home page
export async function getServerSideProps(context){
 const  genre=context.query.genre;
 const request=await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then
 ((res)=>res.json());
 return{
   props:{
     results:request.results,
   },
 };
}