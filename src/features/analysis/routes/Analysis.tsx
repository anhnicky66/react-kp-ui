import "./Analysis.scss"
import { AnalysisCard } from "../components/AnalysisCard";
import { TopicAnalyzerInputSample } from "@/mock/topic-analyzer-input-sample";
import { MessageAnalyzeService } from "../services/MessageMetricService";
import { Metrics } from "@/interfaces/Metric.interface";
import { TransactionMetricService } from "../services/TransactionMetricService";
import { AnalysisMetricType } from "../interfaces/AnalysisMetric.interface";
import { DuplicateMetricService } from "../services/DuplicateMetricService";

export const Analysis = () => {
    const metrics = TopicAnalyzerInputSample.metrics as Metrics;
    const transactionsAnalysis = [
        {
            id: AnalysisMetricType.TransactionTotal,
            value: TransactionMetricService.getTotal(metrics).toString(),
            title: 'Transactions',
            description: '',
        },
        {
            id: AnalysisMetricType.TransactionFailedCount,
            value: TransactionMetricService.getFailedCount(metrics).toString(),
            title: 'Failed Transactions',
            description: '',
        },
        {
            id: AnalysisMetricType.TransactionAbortRate,
            value: TransactionMetricService.getAbortRate(metrics).toString() + '%',
            title: 'Abort rate',
            description: '',
        },
        {
            id: AnalysisMetricType.TransactionAvgDuration,
            value: TransactionMetricService.getAvgDuration(metrics).toString() + 'ms',
            title: 'Average duration',
            description: '',
        }
    ];
    const duplicatesAnalysis = [
        {
            id: AnalysisMetricType.DuplicatesTotal,
            value: DuplicateMetricService.getTotal(metrics).toString(),
            title: 'Duplicates',
            description: '',
        },
        {
            id: AnalysisMetricType.DistinctDuplicates,
            value: DuplicateMetricService.getDistinct(metrics).toString(),
            title: 'Distinct Duplicates',
            description: '',
        }
    ];
    const messagesAnalysis = [
        {
            id: AnalysisMetricType.MessageTotal,
            value: MessageAnalyzeService.getTotalMessages(metrics).toString(),
            title: 'Number of message',
            description: '',
        },
        {
            id: AnalysisMetricType.MessageAvgSize,
            value: MessageAnalyzeService.getAvgMessageSize(metrics) + ' bytes',
            title: 'Average message size',
            description: '',
        },
        {
            id: AnalysisMetricType.MessageAvgKeySize,
            value: MessageAnalyzeService.getAvgKeySize(metrics) + ' bytes',
            title: 'Average key size',
            description: '',
        },
        {
            id: AnalysisMetricType.MessageAvgValueSize,
            value: MessageAnalyzeService.getAvgValueSize(metrics) + ' bytes',
            title: 'Average value size',
            description: '',
        }
    ];
    const headersAnalysis = [
        {
            id: AnalysisMetricType.HeaderAvgKeySize,
            value: MessageAnalyzeService.getAvgHeaderSize(metrics).toString() + ' bytes',
            title: 'Average header size',
            description: '',
        },
        {
            id: AnalysisMetricType.HeaderDistinctKeys,
            value: MessageAnalyzeService.getAvgNumberOfHeaders(metrics).toString(),
            title: 'Distinct Header Keys',
            description: '',
        }
    ];

    return (
        <div className="analysis-page">
            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Transactions</div>
                    <div className="analysis-section">
                        {transactionsAnalysis.map(m => <AnalysisCard key={m.id} type={m.id} value={m.value} title={m.title} description={m.description} />)}
                    </div>
                </div>
                <div className="col">
                <div className="analysis-section-header">Duplicates</div>
                    <div className="analysis-section">
                        {duplicatesAnalysis.map(m => <AnalysisCard key={m.id} type={m.id} value={m.value} title={m.title} description={m.description} />)}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Messages</div>
                    <div className="analysis-section">
                        {messagesAnalysis.map(m => <AnalysisCard key={m.id} type={m.id} value={m.value} title={m.title} description={m.description} />)}
                    </div>
                </div>
                <div className="col">
                    <div className="analysis-section-header">Headers</div>
                    <div className="analysis-section">
                        {headersAnalysis.map(m => <AnalysisCard key={m.id} type={m.id} value={m.value} title={m.title} description={m.description} />)}
                    </div>
                </div>
            </div>
            
        </div>
    );
};
