import React, { useState, useEffect } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constant'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId, setUrlId] = useState([])
    const [show, setShow] = useState(false)


    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setmovies(response.data.results)
        }).catch((err) => {
            // alert('err')
            //console.log('error is:', err)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    }
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
                setShow(true)
                console.log(show)

            }
            else {
                console.log('array is empty')
            }
        })
    }



    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />


                )}


            </div>

            {show && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost