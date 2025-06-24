import Vertex from "@/app/elements/vertex";

const FinalInfoTable = ({ vertices }: { vertices: Vertex[] }) => {
    const filtered = vertices.filter(v => v.dist !== Infinity);
    if (filtered.length === 0) return null;
    return (
        <div className="ml-8">
            <h2 className="mb-2 text-gray-700 text-[13px] text-center font-semibold">Final Distances & Parents</h2>
            <table className="w-full text-center text-[13px]">
                <thead>
                    <tr>
                        <th className="border border-[gray]">Node</th>
                        <th className="border border-[gray]">Parent</th>
                        <th className="border border-[gray]">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(v => (
                        <tr key={v.label}>
                            <td className="border border-[gray]">{v.label}</td>
                            <td className="border border-[gray]">{v.parent ? v.parent.label : 'None'}</td>
                            <td className="border border-[gray]">{v.dist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinalInfoTable; 