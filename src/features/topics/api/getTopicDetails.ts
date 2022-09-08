import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Topic, TopicName } from '../types/index';
import { ExtractFnReturnType } from '@/lib/react-query';

export const getTopicDetails = (tenant: string, topicName: TopicName): Promise<Topic> => {
    return axios.get(`/topics/${tenant}/${topicName}`);
}
type QueryFnType = typeof getTopicDetails;

export const useTopicDetails = ({ tenant, topicName }: Record<string, string>) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      queryKey: ['topicsDetails'],
      queryFn: () => getTopicDetails(tenant, topicName as TopicName),
    });
  };