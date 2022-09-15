import { Link, useParams } from "react-router-dom";
import { TopicName } from "../types";

export type TopicsListProps = {
    data: TopicName[];
}

export const TopicsList = ({data}: TopicsListProps) => {
    const { tenant } = useParams();

    return (
        <div>
            {data.length === 0 ? <div className="empty-result-message">The topics list is empty</div> : ''}
            <div>
                {data.map(entry => <div key={entry}><Link to={`/${tenant}/topics/${entry}`}>{entry}</Link></div>)}
            </div>
        </div>
    );
}

