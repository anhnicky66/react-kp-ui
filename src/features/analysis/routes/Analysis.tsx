import "./Analysis.scss"
import {AnalysisCard, AnalysisProgress} from "../components/AnalysisCard";
import {TopicAnalyzerInputSample} from "@/mock/topic-analyzer-input-sample";
import {MessageAnalyzeService} from "../services/MessageMetricService";
import {Metrics} from "@/interfaces/Metric.interface";
import {TransactionMetricService} from "../services/TransactionMetricService";
import {AnalysisMetricType} from "../interfaces/AnalysisMetric.interface";
import {DuplicateMetricService} from "../services/DuplicateMetricService";
import {CompressionMetricService} from "../services/CompressionMetricService";
import {AnalysisTable} from "../components/AnalysisTable";

export const Analysis = () => {
    const metrics = TopicAnalyzerInputSample.metrics as Metrics;
    const topicName = 'orders-avro';

    const transactionsAnalysis = [
        {
            id: AnalysisMetricType.TransactionTotal,
            value: TransactionMetricService.getTotal(topicName, metrics).toString(),
            title: 'Transactions',
            description: 'Further Analyze coming soon',
            progress: []
        },
        {
            id: AnalysisMetricType.TransactionFailedCount,
            value: TransactionMetricService.getFailedCount(topicName, metrics).toString(),
            title: 'Failed Transactions',
            description: 'Further Analyze coming soon',
            progress: [],
        },
        {
            id: AnalysisMetricType.TransactionAbortRate,
            value: TransactionMetricService.getAbortRate(topicName, metrics).toString() + '%',
            title: 'Abort rate',
            description: 'Further Analyze coming soon',
            progress: [],
        },
        {
            id: AnalysisMetricType.TransactionAvgDuration,
            value: TransactionMetricService.getAvgDuration(topicName, metrics).toString() + 'ms',
            title: 'Average duration',
            description: 'Further Analyze coming soon',
            ...(() => {
                const {min, max, p50, p90, p95} = TransactionMetricService.getTimeSpanSizing(topicName, metrics);
                const progress: AnalysisProgress[] = [
                    {min, max, value: p50, label: 'p50'},
                    {min, max, value: p90, label: 'p90'},
                    {min, max, value: p95, label: 'p95'}
                ];
                return {
                    progress
                }
            })()
        }
    ];
    const duplicatesAnalysis = [
        {
            id: AnalysisMetricType.DuplicatesTotal,
            value: DuplicateMetricService.getTotal(topicName, metrics).toString(),
            title: 'Duplicates',
            description: 'Further Analyze coming soon',
        },
        {
            id: AnalysisMetricType.DistinctDuplicates,
            value: DuplicateMetricService.getDistinct(topicName, metrics).toString(),
            title: 'Distinct Duplicates',
            description: 'Further Analyze coming soon',
        }
    ];
    const messagesAnalysis = [
        {
            id: AnalysisMetricType.MessageTotal,
            value: MessageAnalyzeService.getTotalMessages(topicName, metrics).toString(),
            title: 'Number of message',
            description: 'Further Analyze coming soon',
        },
        {
            id: AnalysisMetricType.MessageAvgSize,
            value: MessageAnalyzeService.getAvgMessageSize(topicName, metrics) + ' bytes',
            title: 'Average message size',
            description: 'Further Analyze coming soon',
        },
        {
            id: AnalysisMetricType.MessageAvgKeySize,
            value: MessageAnalyzeService.getAvgKeySize(topicName, metrics) + ' bytes',
            title: 'Average key size',
            description: 'Further Analyze coming soon',
        },
        {
            id: AnalysisMetricType.MessageAvgValueSize,
            value: MessageAnalyzeService.getAvgValueSize(topicName, metrics) + ' bytes',
            title: 'Average value size',
            description: 'Further Analyze coming soon',
        }
    ];
    const headersAnalysis = [
        {
            id: AnalysisMetricType.HeaderAvgKeySize,
            value: MessageAnalyzeService.getAvgHeaderSize(topicName, metrics).toString() + ' bytes',
            title: 'Average header size',
            description: 'Further Analyze coming soon',
        },
        {
            id: AnalysisMetricType.HeaderDistinctKeys,
            value: MessageAnalyzeService.getAvgNumberOfHeaders(topicName, metrics).toString(),
            title: 'Distinct Header Keys',
            description: 'Further Analyze coming soon',
        }
    ];

    const compressionAnalysis = {
        id: AnalysisMetricType.CompressionCodecs,
        headers: [
            {label: 'Name', key: 'name'},
            {label: 'Saving', key: 'value'}
        ],
        rows: CompressionMetricService.getCompressionCodecs(topicName, metrics).map(codec => {
            return {
                name: codec,
                value: CompressionMetricService.getCompressionSavings(topicName, metrics, codec)
            }
        }),
    };

    const topKeysAnalysis = {
        headers: [
            {label: 'Key', key: 'key'},
            {label: 'Occurences', key: 'value'},
        ],
        rows: MessageAnalyzeService.getTopKeys(topicName, metrics)
    };

    const entropyOutliers = {
        headers: [
            {label: 'Partition', key: 'partition'},
            {label: 'Offset', key: 'offset'},
            {label: 'Entropy', key: 'entropy'},
        ],
        rows: MessageAnalyzeService.getEntropyOutliers(topicName, metrics)
    }


    return (
        <div className="analysis-page">
            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Transactions</div>
                    <div className="analysis-section">
                        {transactionsAnalysis.map(m => <AnalysisCard key={m.id} type={m.id} value={m.value} title={m.title} description={m.description} progress={m.progress || []} />)}
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

            <hr />

            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Compression Codecs</div>
                    <div className="analysis-section">
                        <AnalysisTable headers={compressionAnalysis.headers} rows={compressionAnalysis.rows}></AnalysisTable>
                    </div>
                </div>
                <div className="col"></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Top message keys</div>
                    <div className="analysis-section">
                        <AnalysisTable headers={topKeysAnalysis.headers} rows={topKeysAnalysis.rows}></AnalysisTable>
                    </div>
                </div>
                <div className="col"></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="analysis-section-header">Outliers</div>
                    <div className="analysis-section">
                        <AnalysisTable headers={entropyOutliers.headers} rows={entropyOutliers.rows}></AnalysisTable>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    );
};
