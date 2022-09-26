import { TopicName } from "@/features/topics/types";

export interface Sizing {
    min: number;
    max: number;
    p50: number;
    p90: number;
    p95: number;
}

export interface Message {
    count: number,
    recordSize: Sizing,
    keySize: Sizing,
    valueSize: Sizing,
    headerSize: Sizing,
    topKeys: Record<string, number>,
    duplicates: {
        sum: number,
        distinctDuplicate: number,
        key: string,
    },
    entropy: {
        min: number,
        max: number,
        mean: number,
        stdDev: number,
        outliers: Array<{
            partition: number,
            offset: number,
            entropy: number,
        }>
    },
    minTimestamp: number,
    maxTimestamp: number,
}

export interface Batch {
    batchSize: Sizing,
    messagesPerBatch: Sizing,
    compressionCodecs: string[],
    compressionEfficiency: {
        value: number
    },
    delay: Sizing,
    timeSpan: Sizing,
}

export interface Transaction {
    count: {
        value: number,
    },
    abortCount: {
        value: number,
    },
    timeSpan: Sizing,
    abortTimeSpan: Sizing
}

export interface SchemaOccurence {
    id: number,
    schema: string,
    schemaNamespace: string,
    count: number
}

export interface Schema {
    schemaByPartitions: Record<string, number>,
    schemaOccurrences: SchemaOccurence[],
}

export interface TopicAnalyzation {
    replicationFactor: number,
    consumer: {
        active: number,
        inactive: number,
    },
    message: Message,
    batch: Batch,
    transaction: Transaction,
    header: {
        distinctKeys: number
    },
    compressionSavings: {
        value: Record<string, number>
    },
    schema: Schema
}

export type Metrics = Record<TopicName, TopicAnalyzation>;
