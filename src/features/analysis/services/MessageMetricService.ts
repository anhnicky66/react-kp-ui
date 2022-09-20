import { Metrics } from "@/interfaces/Metric.interface";
import { getAverage } from "@/utils/calculations";

export class MessageAnalyzeService {
    static getTotalMessages(metrics: Metrics): number {
        return metrics['orders-avro'].message.count;
    }

    static getAvgMessageSize(metrics: Metrics): number {
        const { message } = metrics['orders-avro'];
        const { min, max } = message.recordSize;
        return getAverage([min, max]);
    }

    static getAvgKeySize(metrics: Metrics): number {
        const { message } = metrics['orders-avro'];
        const { min, max } = message.keySize;
        return getAverage([min, max]);
    }

    static getAvgValueSize(metrics: Metrics): number {
        const { message } = metrics['orders-avro'];
        const { min, max } = message.valueSize;
        return getAverage([min, max]);
    }

    static getAvgHeaderSize(metrics: Metrics): number {
        const { message } = metrics['orders-avro'];
        const { min, max } = message.keySize;
        return getAverage([min, max]);
    }

    static getAvgNumberOfHeaders(metrics: Metrics): number {
        const { header } = metrics['orders-avro'];
        return header.distinctKeys;
    }
}