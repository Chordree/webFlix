function MovieCard({sampMov}) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
    // see how to pass this value from app.js

    return(
        <div className='movie'>
          <div> <p>{sampMov.release_date}</p></div>
          <p>{sampMov.release_date}</p>
          <div>
            <img src={sampMov.poster_path !== null ? IMG_PATH +  sampMov.poster_path: 'https://via.placeholder.com/400'}
            alt={sampMov.title + ' image'} />
          </div>
          <div>
            <span>{sampMov.original_title}</span>
            <h3>{sampMov.title}</h3>
          </div>
        </div>
    )
}

// see how to implement overview on swipe
// truncated or read more

export default MovieCard