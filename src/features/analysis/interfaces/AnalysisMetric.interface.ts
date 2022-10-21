export enum AnalysisMetricType {
    TransactionTotal = 'TransactionTotal',
    TransactionFailedCount = 'TransactionFailedCount',
    TransactionAbortRate = 'TransactionAbortRate',
    TransactionAvgDuration = 'TransactionAvgDuration',

    DuplicatesTotal = 'DuplicatesTotal',
    DistinctDuplicates = 'DisctintDuplicates',

    MessageTotal = 'MessageTotal',
    MessageAvgSize = 'MessageAvgSize',
    MessageAvgKeySize = 'MessageAvgKeySize',
    MessageAvgValueSize = 'MessageAvgValueSize',

    HeaderAvgKeySize = 'HeaderAvgKeySize',
    HeaderAvgValueSize = 'HeaderAvgValueSize',
    HeaderDistinctKeys = 'HeaderDistinctKeys',

    CompressionCodecs = 'CompressionCodecs',

    Entropy = 'Entropy'
}
