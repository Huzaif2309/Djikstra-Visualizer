'use client'
import { useDraw } from "@/hooks/useDraw"
import { useState } from "react";

// components
import PriorityQueue from "./pq"
import Canvas from "./canvas"
import Select from "./select"
import Instructions from "./instructions"
import Options from "./options"
import Slider from "./slider"
import Pause from "./pause"
import InfoWindow from "./infoWindow"
import FinalInfoTable from "./finalInfoTable"

const Main = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [vertices, setVertices] = useState<any[]>([]);
    const { refs, currentVertex, pqState, pqHighlight, allVertices } = useDraw(setIsFinished, setVertices);

    return (
        <div className="flex select-none">
            <PriorityQueue pq={pqState} highlight={pqHighlight} allVertices={allVertices} />
            <div>
                <Canvas canvasRef={refs.canvasRef} />
                <Select refs={refs} />
                <div className="flex flex-row justify-center mt-4">
                    {!isFinished && <InfoWindow currentVertex={currentVertex} />}
                    {isFinished && <FinalInfoTable vertices={vertices} />}
                </div>
            </div>
            <div>
                <Instructions />
                <Options refs={refs} />
                <Slider refs={refs} />
                <Pause pauseRef={refs.pauseRef} />
            </div>
        </div>
    )
}

export default Main;