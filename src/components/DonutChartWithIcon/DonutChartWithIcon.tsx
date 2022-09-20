import "./DonutChartWithIcon.scss";

export type DonutChartWithIconProps = {
    icon: string;
    color: string;
    size?: number;
    percent?: number;
}

export const DonutChartWithIcon = ({icon, color, size = 50, percent}: DonutChartWithIconProps) => {
    const r = size - 10;
    const roundDraw = (percent || 0) * 2 * r * Math.PI / 100
    const strokeDasharray = roundDraw  + ' 999';
    return (
        <svg className="donut-chart-with-icon" viewBox={`0 0 ${size * 2} ${size * 2}`} width={size} height={size} data-percent={percent} style={{strokeDasharray}}>
            <circle cx={size} cy={size} r={r} />
            {/* <path fill="none" stroke="red" stroke-width="2" d="M20,0 a20,20 0 0,1 20,20" />
            <path fill="none" stroke="green" stroke-width="2" d="M20,0 a20,20 0 1,0 20,20" />

            <path fill="none" stroke="blue" stroke-width="2" d="M140,20 a20,20 0 0,1 -20,20" />
            <path fill="none" stroke="yellow" stroke-width="2" d="M140,20 a20,20 0 1,0 -20,20" />

            <path fill="none" stroke="green" stroke-width="2" d="M120,140 a20,20 0 0,1 -20,-20" />
            <path fill="none" stroke="red" stroke-width="2" d="M120,140 a20,20 0 1,0 -20,-20" />    
            
            <path fill="none" stroke="yellow" stroke-width="2" d="M0,120 a20,20 0 0,1 20,-20" />
            <path fill="none" stroke="blue" stroke-width="2" d="M0,120 a20,20 0 1,0 20,-20" /> */}
        </svg>
    )
}