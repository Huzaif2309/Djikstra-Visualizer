import Edge from "./edge";

const vertexRadius = 30;

class Vertex {
    x: number;
    y: number;
    label: string;
    edges: Array<Edge>;

    constructor(x: number, y: number, label: string) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.edges = new Array<Edge>();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, vertexRadius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    addEdge(edge: Edge) {
        this.edges.push(edge);
    }

    computeClosestPoint(x: number, y: number) {
        var distX = x - this.x;
        var distY = y - this.y;
        var dist = Math.sqrt(distX * distX + distY * distY);
        
        var px = this.x + distX * vertexRadius / dist;
        var py = this.y + distY * vertexRadius / dist;
        return {px, py};
    }

    containsPoint(x: number, y: number) {
        return vertexRadius*vertexRadius > (x - this.x)*(x - this.x) + (y - this.y)*(y - this.y);
    }
}

export default Vertex;