import { Metrics } from "@/interfaces/Metric.interface";

export class DuplicateMetricService {
    static getTotal(metrics: Metrics): number {
        const { message } = metrics["orders-avro"];
        return message.duplicates.sum;
    }

    static getDistinct(metrics: Metrics): number {
        const { message } = metrics["orders-avro"];
        return message.duplicates.distinctDuplicate;
    }

}