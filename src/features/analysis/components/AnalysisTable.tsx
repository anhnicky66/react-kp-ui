import './AnalysisTable.scss';

export type AnalysisTableHeader<T> = {
    label: string;
    key: string;
};

export type AnalysisTableProps<T> = {
    headers: AnalysisTableHeader<T>[];
    rows: T[];
}

export const AnalysisTable = <T, >({headers, rows}: AnalysisTableProps<T>) => {
    return (
        <table className="analysis-table">
            <thead>
                <tr>
                    {headers.map(header => <th key={header.key}>{header.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {
                            headers.map(header => <td key={header.key}>{(row as {[key: string]: string | number | boolean})[header.key]}</td>)
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
