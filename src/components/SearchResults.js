import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { MY_API_KEY } from '../Utils/contants';
import SearchResultCard from './SearchResultCard';

const SearchResults = () => {

    const [ searchParams ] = useSearchParams()

    const [ searchResults , setSearchResults ] = useState([])

    const query = searchParams.get('search_query')

    useEffect(()=>{
        const SEARCH_RESULTS_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=${MY_API_KEY}`
        fetchSearchResults(SEARCH_RESULTS_URL)
        window.scrollTo(0,0)
    }, [query])

    const fetchSearchResults = async (SEARCH_RESULTS_URL) => {
        const data = await fetch(SEARCH_RESULTS_URL)
        const jsonData = await data.json()
        setSearchResults(jsonData?.items)
    }

    //early return
    if(!searchResults) return null

  return  (
    <div className='w-10/12' >
        {searchResults.map(result => (
            <SearchResultCard key={result?.id?.videoId ? result?.id?.videoId : result?.id?.channelId} data={result} isChannel={result?.id?.kind === 'youtube#channel' ? true : false} />
        ))}
    </div>
  )
}

export default SearchResults