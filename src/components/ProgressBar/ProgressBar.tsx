import './ProgressBar.scss';

export type ProgressBarProps = {
    value: number;
    max: number;
    min: number;
    bg?: string;
    fg?: string;
}

export const ProgressBar = ({value, min, max, bg, fg}: ProgressBarProps) => {
    const percentage = Math.floor((value - min) / (max - min) * 100) + '%';
    const backgroundColor = bg || '#f4f4f4';
    const foregroundColor = fg || '#4c3ac9';
    return (
        <div className="progress-bar">
            <div className="progress-bar-fg" style={{width: percentage, background: foregroundColor}}></div>
            <div className="progress-bar-bg" style={{background: backgroundColor}}></div>
            <div className="progress-values">
                <span className="min">{min}</span>
                <span className="value">{value}</span>
                <span className="max">{max}</span>
            </div>
        </div>
    );
}
