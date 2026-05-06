const X0 = 60
const X1 = 560
const Y_TOP = 15
const Y_BOTTOM = 315
const MAX_VAL = 200

const RED = '#ffb4b4'

const capacity = [100, 100, 100, 100, 100, 100, 165, 165, 165, 165, 165, 165]
const traffic =  [35, 55, 40, 115, 60, 135, 85, 100, 65, 115, 55, 75]

const N = capacity.length
const bandWidth = (X1 - X0) / N
const barGap = 4
const barWidth = bandWidth - barGap

const barLeft = (i) => X0 + i * bandWidth + barGap / 2
const barCenter = (i) => barLeft(i) + barWidth / 2
const yPlot = (v) => Y_BOTTOM - (v / MAX_VAL) * (Y_BOTTOM - Y_TOP)

const trafficPoints = traffic.map((v, i) => [barCenter(i), yPlot(v)])
const trafficD = trafficPoints
  .map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
  .join(' ')

const breachIndices = traffic
  .map((v, i) => (v > capacity[i] ? i : -1))
  .filter((i) => i >= 0)

export default function ScalingGraph() {
  return (
    <figure className="scaling-graph">
      <svg
        viewBox="0 0 600 340"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="scaling-graph-title"
        role="img"
      >
        <title id="scaling-graph-title">
          A jagged line of traffic over time moves above and below the
          bars of provisioned capacity behind it. Spikes above the bars
          are failures; flat stretches far below them are overspending.
        </title>

        <line x1={X0} y1={Y_BOTTOM} x2={X1 + 10} y2={Y_BOTTOM} stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
        <line x1={X0 - 10} y1={Y_TOP - 5} x2={X0 - 10} y2={Y_BOTTOM} stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />

        {capacity.map((v, i) => (
          <rect
            key={i}
            x={barLeft(i)}
            y={yPlot(v)}
            width={barWidth}
            height={Y_BOTTOM - yPlot(v)}
            fill="currentColor"
            fillOpacity="0.18"
          />
        ))}

        {capacity.map((v, i) => (
          <line
            key={`cap-${i}`}
            x1={barLeft(i)}
            x2={barLeft(i) + barWidth}
            y1={yPlot(v)}
            y2={yPlot(v)}
            stroke="currentColor"
            strokeOpacity="0.75"
            strokeWidth="2"
          />
        ))}

        <path
          d={trafficD}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {trafficPoints.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="currentColor" />
        ))}

        {breachIndices.map((i) => (
          <circle
            key={`breach-${i}`}
            cx={trafficPoints[i][0]}
            cy={trafficPoints[i][1]}
            r="7"
            fill="none"
            stroke={RED}
            strokeWidth="2"
          />
        ))}

        <text
          x={barCenter(3)}
          y={yPlot(traffic[3]) - 14}
          textAnchor="middle"
          fill={RED}
          fontSize="16"
          fontWeight="500"
          letterSpacing="0.4"
        >
          System failure
        </text>
        <text
          x={barCenter(10)}
          y={yPlot(165) - 10}
          textAnchor="middle"
          fill={RED}
          fontSize="16"
          fontWeight="500"
          letterSpacing="0.4"
        >
          Overspending
        </text>

        <text
          x={barCenter(0) - 4}
          y={yPlot(traffic[0]) + 4}
          textAnchor="end"
          fill="currentColor"
          fillOpacity="0.7"
          fontSize="12"
          fontWeight="500"
        >
          traffic
        </text>
        <text
          x={barLeft(6) - 4}
          y={yPlot(165) - 6}
          textAnchor="end"
          fill="currentColor"
          fillOpacity="0.7"
          fontSize="12"
          fontWeight="500"
        >
          capacity
        </text>

        <text x={(X0 + X1) / 2} y={Y_BOTTOM + 22} textAnchor="middle" fill="currentColor" fillOpacity="0.55" fontSize="12">
          time →
        </text>
        <text
          x={X0 - 28}
          y={(Y_TOP + Y_BOTTOM) / 2}
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.55"
          fontSize="12"
          transform={`rotate(-90, ${X0 - 28}, ${(Y_TOP + Y_BOTTOM) / 2})`}
        >
          load →
        </text>
      </svg>
    </figure>
  )
}
