import { useParams } from 'react-router-dom';
import { useTopicDetails } from '../api/getTopicDetails';

export const Topic = () => {
  const { tenant, topic } = useParams();
  const topicQuery = useTopicDetails({ tenant: tenant || '', topic: topic || '' });

  if (topicQuery.isLoading) {
    return (
      <div>
        Loading topics...
      </div>
    );
  }

  if (!topicQuery.data) { 
    return null;
  }

  return (
    <div>
        <div>
            <span>Name:&nbsp;</span>
            <span>{topicQuery.data.name}</span>
        </div>
        <div>
            <span>Compacted key:&nbsp;</span>
            <span>{topicQuery.data.compactedKey}</span>
        </div>
        <hr />
        <div>Partition mappings</div>
        <div>{Object.entries(topicQuery.data.partitionMappings).map((val, index) => <div key={index}>{val.join(':')}</div>)}</div>
    </div>
  );
};
