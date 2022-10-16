import { useHistory, useParams } from 'react-router-dom';

export default function Posts() {
    const history = useHistory();
    console.log(history);
    const { category, topic } = useParams();

    return (
        <div>
            <div className="container">
                <h1 className="text_white">This is the posts page - {category} / {topic} </h1>
            </div>
        </div>
    );
}
