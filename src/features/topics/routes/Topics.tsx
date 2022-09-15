import { useParams } from 'react-router-dom';
import { useTopics } from '../api/getTopics';
import { TopicsList } from '../components/TopicsList';

export const Topics = () => {
  const { tenant } = useParams();
  let topicsQuery = useTopics({ tenant: tenant || '' });

  if (topicsQuery.isLoading) {
    return (
      <div>
        Loading topics...
      </div>
    );
  }

  if (!topicsQuery.data) { 
    return null;
  }

  return (
    <div>
      <h1><span>{tenant}</span>&nbsp;topics list</h1>
      <TopicsList data={topicsQuery.data} />
    </div>
  );
};
