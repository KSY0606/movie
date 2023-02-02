import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({id, mediumCoverImage, title, summary, genres}) {
    return (
    <div className="home_movies">
        <div>
            <Link to={`/movie/${id}`} className="home_link">
                <div className="home_poster_left">
                    <img src={mediumCoverImage} alt={title}/>
                </div>
                <div className="home_poster_rigth">
                    <h2 className="home_title">
                        {title}
                    </h2>
                    <p className="home_summary">
                        {summary}
                    </p>
                    <ul className="home_genres">
                        genre - {genres.map(g => <li key={g}>{g}</li>)}
                    </ul>
                </div>
            </Link>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    mediumCoverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;