export type TopicName = string;

export type Topic = {
    name: string;
    partitionMappings: Record<string, number>;
    compactedKey: string;
}