import { Metrics } from "@/interfaces/Metric.interface";
import { getAverage } from "@/utils/calculations";

export class TransactionMetricService {
    static getTotal(metrics: Metrics): number {
        const { transaction } = metrics["orders-avro"];
        return transaction.count.value;
    }

    static getFailedCount(metrics: Metrics): number {
        const { transaction } = metrics["orders-avro"];
        return transaction.abortCount.value;
    }

    static getAbortRate(metrics: Metrics): number {
        const abortRate = Number((this.getFailedCount(metrics) / this.getTotal(metrics) * 100).toFixed(1));
        if (isNaN(abortRate)) {
            return 0;
        }

        return abortRate;
    }

    static getAvgDuration(metrics: Metrics): number {
        const { transaction } = metrics["orders-avro"];
        const avg = getAverage([transaction.timeSpan.min, transaction.timeSpan.max]);
        if (isNaN(avg)) {
            return 0;
        }

        return Number(avg.toFixed(0));
    }
}