import Vertex from "@/app/elements/vertex";

const InfoWindow = ({ currentVertex }: { currentVertex: Vertex | null }) => {
    return (
        <div className="w-[200px] mx-8 p-0 border rounded bg-white shadow inline-block" style={{ minHeight: 0, height: 'auto', margin: 0 }}>
            <h1 className="mb-2 text-gray-700 text-[15px] text-center font-bold">Current Node Info</h1>
            <table className="w-full text-center text-[14px] m-0" style={{ margin: 0, height: 'auto' }}>
                <tbody>
                    <tr>
                        <th className="border border-[gray] font-bold">Node</th>
                        <td className="border border-[gray]">{currentVertex ? currentVertex.label : 'None'}</td>
                    </tr>
                    <tr>
                        <th className="border border-[gray] font-bold">Parent</th>
                        <td className="border border-[gray]">{currentVertex && currentVertex.parent ? currentVertex.parent.label : 'None'}</td>
                    </tr>
                    <tr>
                        <th className="border border-[gray] font-bold">Distance</th>
                        <td className="border border-[gray]">{currentVertex ? (currentVertex.dist === Infinity ? 'Inf' : currentVertex.dist) : 'Inf'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfoWindow; 