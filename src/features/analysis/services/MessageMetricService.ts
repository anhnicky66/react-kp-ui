import {TopicName} from "@/features/topics/types";
import {Message, Metrics} from "@/interfaces/Metric.interface";
import {getAverage} from "@/utils/calculations";

export class MessageAnalyzeService {
    static getTotalMessages(topicName: TopicName, metrics: Metrics): number {
        return metrics[topicName].message.count;
    }

    static getAvgMessageSize(topicName: TopicName, metrics: Metrics): number {
        const {message} = metrics[topicName];
        const {min, max} = message.recordSize;
        return getAverage([min, max]);
    }

    static getAvgKeySize(topicName: TopicName, metrics: Metrics): number {
        const {message} = metrics[topicName];
        const {min, max} = message.keySize;
        return getAverage([min, max]);
    }

    static getAvgValueSize(topicName: TopicName, metrics: Metrics): number {
        const {message} = metrics[topicName];
        const {min, max} = message.valueSize;
        return getAverage([min, max]);
    }

    static getAvgHeaderSize(topicName: TopicName, metrics: Metrics): number {
        const {message} = metrics[topicName];
        const {min, max} = message.keySize;
        return getAverage([min, max]);
    }

    static getAvgNumberOfHeaders(topicName: TopicName, metrics: Metrics): number {
        const {header} = metrics[topicName];
        return header.distinctKeys;
    }

    static getTopKeys(topicName: TopicName, metrics: Metrics): {key: string; value: number;}[] {
        const {message} = metrics[topicName];
        return Object.keys(message.topKeys).map((key) => {
            return {
                key,
                value: message.topKeys[key]
            };
        }).sort((a, b) => {
            return a.value < b.value ? -1 : 1;
        }) || [];
    }

    static getEntropyOutliers(topicName: TopicName, metrics: Metrics): Message['entropy']['outliers'] {
        const {message} = metrics[topicName];
        return message.entropy.outliers || [];
    }

    static getMessageRecordSize(topicName: TopicName, metrics: Metrics): Message['recordSize'] {
        const {message} = metrics[topicName];
        return message.recordSize;
    }

    static getMessageKeySize(topicName: TopicName, metrics: Metrics): Message['recordSize'] {
        const {message} = metrics[topicName];
        return message.keySize;
    }

    static getMessageValueSize(topicName: TopicName, metrics: Metrics): Message['recordSize'] {
        const {message} = metrics[topicName];
        return message.valueSize;
    }

    static getMessageHeaderSize(topicName: TopicName, metrics: Metrics): Message['recordSize'] {
        const {message} = metrics[topicName];
        return message.headerSize;
    }
}
