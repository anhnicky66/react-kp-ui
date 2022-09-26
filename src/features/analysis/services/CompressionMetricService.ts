import {TopicName} from "@/features/topics/types";
import {Metrics} from "@/interfaces/Metric.interface";

export class CompressionMetricService {
    static getCompressionCodecs(topicName: TopicName, metrics: Metrics): string[] {
        return metrics[topicName].batch.compressionCodecs;
    }
    
    static getCompressionSavings(topicName: TopicName, metrics: Metrics, codecName: string): number {
        const compressionSavings = metrics[topicName].compressionSavings.value;
        return compressionSavings[codecName] || 0;
    }
}
