import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { Topic, TopicName } from '../types/index';
import { ExtractFnReturnType } from '@/lib/react-query';


export const getTopics = (tenant: string): Promise<TopicName[]> => {
  return axios.get(`/topics/${tenant}`);
};
type QueryFnType = typeof getTopics;


export const getTopicDetails = (tenant: string, topicName: TopicName): Promise<Topic> => {
    return axios.get(`/topics/${tenant}/${topicName}`);
}

export const useTopics = ({ tenant }: Record<string, string>) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
      queryKey: ['topics'],
      queryFn: () => getTopics(tenant),
    });
  };