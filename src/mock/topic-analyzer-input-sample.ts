export const TopicAnalyzerInputSample = {
  "cluster" : {
    "bootstrapServer" : "localhost:9092",
    "name" : "local",
    "labels" : {

    }
  },
  "metrics" : {
    "orders-avro" : {
      "replicationFactor" : 1,
      "consumer" : {
        "active" : 0,
        "inactive" : 0
      },
      "message" : {
        "count" : 1,
        "recordSize" : {
          "min" : 84,
          "max" : 84,
          "p50" : 84,
          "p90" : 84,
          "p95" : 84
        },
        "keySize" : {
          "min" : 20,
          "max" : 75,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        },
        "valueSize" : {
          "min" : 75,
          "max" : 75,
          "p50" : 75,
          "p90" : 75,
          "p95" : 75
        },
        "headerSize" : {
          "min" : 0,
          "max" : 0,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        },
        "topKeys" : {
          "null" : 1
        },
        "duplicates" : {
          "sum" : 0,
          "distinctDuplicate" : 0,
          "key" : "Coming soon"
        },
        "entropy" : {
          "min" : 0.483,
          "max" : 0.483,
          "mean" : 0.483,
          "stdDev" : 0.0,
          "outliers" : [
            {
              "partition" : 0,
              "offset" : 0,
              "entropy" : 0.483
            },
            {
              "partition" : 0,
              "offset" : 0,
              "entropy" : 0.483
            }
          ]
        },
        "minTimestamp" : 1663077173801,
        "maxTimestamp" : 1663077173801
      },
      "batch" : {
        "batchSize" : {
          "min" : 145,
          "max" : 145,
          "p50" : 145,
          "p90" : 145,
          "p95" : 145
        },
        "messagesPerBatch" : {
          "min" : 1,
          "max" : 1,
          "p50" : 1,
          "p90" : 1,
          "p95" : 1
        },
        "compressionCodecs" : [
          "none"
        ],
        "compressionEfficiency" : {
          "value" : 1.0
        },
        "delay" : {
          "min" : 0,
          "max" : 0,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        },
        "timeSpan" : {
          "min" : 0,
          "max" : 0,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        }
      },
      "transaction" : {
        "count" : {
          "value" : 12
        },
        "abortCount" : {
          "value" : 4
        },
        "timeSpan" : {
          "min" : 240,
          "max" : 800,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        },
        "abortTimeSpan" : {
          "min" : 0,
          "max" : 0,
          "p50" : 0,
          "p90" : 0,
          "p95" : 0
        }
      },
      "header" : {
        "distinctKeys" : 8
      },
      "compressionSavings" : {
        "value" : {
          "SNAPPY-5x" : 158,
          "GZIP-5x" : 144,
          "CURRENT" : 145,
          "SNAPPY-2x" : 158,
          "GZIP-2x" : 144,
          "NONE" : 145,
          "GZIP-1x" : 144,
          "ZSTD-5x" : 144,
          "ZSTD-2x" : 144,
          "LZ4-1x" : 152,
          "LZ4-5x" : 152,
          "ZSTD-1x" : 144,
          "SNAPPY-1x" : 158,
          "LZ4-2x" : 152
        }
      },
      "schema" : {
        "schemaByPartitions" : {
          "0" : 2
        },
        "schemaOccurrences" : [
          {
            "id" : 1,
            "schema" : "OrderDetail",
            "schemaNamespace" : "io.confluent.tutorial",
            "count" : 1
          },
          {
            "id" : 2,
            "schema" : "OrderDetail",
            "schemaNamespace" : "io.confluent.tutorial",
            "count" : 1
          }
        ]
      }
    }
  }
}