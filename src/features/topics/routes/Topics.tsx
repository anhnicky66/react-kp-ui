import { useTopics } from '../api/getTopics';
import { TopicsList } from '../components/TopicsList';

export const Topics = () => {
  const topicsQuery = useTopics({
    tenant: 'confluent'
  });

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
      <h1>Topics list</h1>
      <TopicsList data={topicsQuery.data} />
    </div>
  );
};
