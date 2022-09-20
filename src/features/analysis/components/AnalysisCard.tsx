import { DonutChartWithIcon } from '@/components/DonutChartWithIcon/DonutChartWithIcon';
import { AnalysisMetricType } from '../interfaces/AnalysisMetric.interface';
import './AnalysisCard.scss';

export type AnalysisCardProps = {
    value: string;
    title: string;
    description: string;
    type: AnalysisMetricType;
}

const ColorMap = {
    transition: '',
}

export const AnalysisCard = ({value, title, description, type}: AnalysisCardProps) => {

    return (
      <div className="analysis-card">
          <div className="top-row">
            <DonutChartWithIcon icon={'test-icon'} color={'#000000'} percent={50} size={70} />
            <div className="text-information">
                <div className="value">{value}</div>
                <div className="title">{title}</div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="description">{description}</div>
          </div>
      </div>
    );
  };
  