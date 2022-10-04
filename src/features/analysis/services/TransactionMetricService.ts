import {TopicName} from "@/features/topics/types";
import {Metrics, Sizing} from "@/interfaces/Metric.interface";
import {getAverage} from "@/utils/calculations";

export class TransactionMetricService {
    static getTotal(topicName: TopicName, metrics: Metrics): number {
        const {transaction} = metrics[topicName];
        return transaction.count.value;
    }

    static getFailedCount(topicName: TopicName, metrics: Metrics): number {
        const {transaction} = metrics[topicName];
        return transaction.abortCount.value;
    }

    static getAbortRate(topicName: TopicName, metrics: Metrics): number {
        const abortRate = Number((this.getFailedCount(topicName, metrics) / this.getTotal(topicName, metrics) * 100).toFixed(1));
        if (isNaN(abortRate)) {
            return 0;
        }

        return abortRate;
    }

    static getAvgDuration(topicName: TopicName, metrics: Metrics): number {
        const {transaction} = metrics[topicName];
        const avg = getAverage([transaction.timeSpan.min, transaction.timeSpan.max]);
        if (isNaN(avg)) {
            return 0;
        }

        return Number(avg.toFixed(0));
    }

    static getAbortTimeSpanSizing(topicName: TopicName, metrics: Metrics): Sizing {
        const {transaction} = metrics[topicName];
        return transaction.abortTimeSpan;
    }

    static getTimeSpanSizing(topicName: TopicName, metrics: Metrics): Sizing {
        const {transaction} = metrics[topicName];
        return transaction.timeSpan;
    }
}
