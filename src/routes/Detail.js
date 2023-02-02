import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const json = await(
                await fetch(`http://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

            setInfo(json.data.movie);
            setLoading(false);
        }
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
            <h1 className="load">Loading..</h1>
            ) : (
                <div>
                    <p className="back">
                    <Link to={`${process.env.PUBLIC_URL}/movie`} className="home_link">
                        ↩
                    </Link>
                    </p>
                    <div className="detail_wrap">
                        <div className="detail_left">
                            <img src={info.medium_cover_image} alt="영화 포스터"></img>
                        </div>
                        <div className="detail_rigth">
                            <div>
                                <h2>{info.title}</h2>
                                <p>개봉 : {info.year}년</p>
                                <p><span>★</span> {info.rating} / 10</p>
                                <p>상영시간 : {info.runtime}분</p>
                                <p>장르 : {info.genres}</p>
                                <p>{info.description_full}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Detail;