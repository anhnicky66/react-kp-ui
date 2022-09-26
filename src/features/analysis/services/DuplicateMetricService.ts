import { TopicName } from "@/features/topics/types";
import { Metrics } from "@/interfaces/Metric.interface";

export class DuplicateMetricService {
    static getTotal(topicName: TopicName, metrics: Metrics): number {
        const { message } = metrics[topicName];
        return message.duplicates.sum;
    }

    static getDistinct(topicName: TopicName, metrics: Metrics): number {
        const { message } = metrics[topicName];
        return message.duplicates.distinctDuplicate;
    }

}