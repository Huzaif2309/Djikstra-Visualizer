import { RefObject } from "react"
import Vertex from "@/app/elements/vertex";

const PriorityQueue = ({
    pq = [],
    highlight = null,
    allVertices = []
} : {
    pq?: Vertex[],
    highlight?: Vertex | null,
    allVertices?: Vertex[]
}) => {
    // Use allVertices if provided, otherwise fall back to pq
    const nodes = allVertices.length > 0 ? allVertices : pq;
    // Map by label for fast lookup of current distance
    const pqMap = new Map(pq.map(v => [v.label, v]));
    return (
        <div className="w-[200px] mx-8">
            <h1 className="mb-2 text-gray-700 text-[15px] text-center font-bold">Priority Queue</h1>
            <table className="w-full text-center">
                <tbody>
                    <tr className="h-[30px] text-[14px] font-bold">
                        <th className="border border-[gray] text-center font-bold">Vertex</th>
                        <th className="border border-[gray] text-center font-bold">Distance</th>
                    </tr>
                    {nodes.map(v => {
                        const curr = pqMap.get(v.label) || v;
                        return (
                            <tr
                                key={v.label}
                                className={`h-[30px] text-[14px] text-center font-bold ${highlight && highlight.label === v.label ? 'bg-yellow-300' : ''}`}
                            >
                                <td className="border border-[gray] text-center font-bold">{v.label}</td>
                                <td className="border border-[gray] text-center font-bold">{curr.dist === Infinity ? 'Inf' : curr.dist}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PriorityQueue;