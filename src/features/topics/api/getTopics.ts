import { useQuery } from 'react-query';
import { axios } from '@/lib/axios';
import { TopicName } from '../types/index';
import { ExtractFnReturnType } from '@/lib/react-query';


export const getTopics = (tenant: string): Promise<TopicName[]> => {
  return axios.get(`/topics/${tenant}`);
};
type GetTopicsQueryFnType = typeof getTopics;

export const useTopics = ({ tenant }: Record<string, string>) => {
    return useQuery<ExtractFnReturnType<GetTopicsQueryFnType>>({
      queryKey: ['topics'],
      queryFn: () => getTopics(tenant),
    });
  };