import { TopicName } from "../types";

export type TopicsListProps = {
    data: TopicName[];
}

export const TopicsList = ({data}: TopicsListProps) => {
    return (
        <div>
            {data.map(entry => <div>{entry}</div>)}
        </div>
    );
}

