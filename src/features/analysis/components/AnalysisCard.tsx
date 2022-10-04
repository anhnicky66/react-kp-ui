import {DonutChartWithIcon} from '@/components/DonutChartWithIcon/DonutChartWithIcon';
import {AnalysisMetricType} from '../interfaces/AnalysisMetric.interface';
import {faArrowRightArrowLeft, faCircleExclamation, faReply} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import './AnalysisCard.scss';
import {ProgressBar} from '@/components/ProgressBar/ProgressBar';

export type AnalysisProgress = {
    min: number;
    max: number;
    value: number;
    label: string;
    fg?: string;
    bg?: string;
}

export type AnalysisCardProps = {
    value: string;
    title: string;
    description: string;
    type: AnalysisMetricType;
    progress?: AnalysisProgress[]
}

const IconMap = {
    transition: faArrowRightArrowLeft,
    info: faCircleExclamation,
    duration: faClock,
    rate: faReply
}

const ColorMap = {
    transition: '#4c3ac9',
    info: '#ed4122',
    duration: '#43b462',
    rate: '#e9684d'
}

export const AnalysisCard = ({value, title, description, type, progress}: AnalysisCardProps) => {

    let icon = faCircleExclamation;
    let color = '#ed4122';

    if ([AnalysisMetricType.TransactionTotal, AnalysisMetricType.MessageTotal, AnalysisMetricType.DuplicatesTotal].includes(type)) {
        icon = IconMap.transition;
        color = ColorMap.transition;
    }

    if ([AnalysisMetricType.TransactionAvgDuration].includes(type)) {
        icon = IconMap.duration;
        color = ColorMap.duration;
    }

    if (AnalysisMetricType.TransactionAbortRate.includes(type)) {
        icon = IconMap.rate;
        color = ColorMap.rate;
    }

    const progressBars = progress || [];

    return (
        <div className="analysis-card">
            <div className="top-row">
                <DonutChartWithIcon icon={icon} color={color} percent={100} size={70} />
                <div className="text-information">
                    <div className="value">{value}</div>
                    <div className="title">{title}</div>
                </div>
            </div>
            <div className="bottom-row">
                {progressBars.map(pb => (
                    <div className="progress-bar-container" key={pb.label}>
                        <span className="progress-bar-label">{pb.label}</span><ProgressBar value={pb.value} min={pb.min} max={pb.max} />
                    </div>
                ))}
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

