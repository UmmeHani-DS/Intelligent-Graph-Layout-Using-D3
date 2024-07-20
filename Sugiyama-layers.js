function calculateLayers(adjacencyList) {
    const layers = [];
    const visited = new Set();
    const queue = [];
    const inDegree = {};

    // Initialize in-degree
    Object.keys(adjacencyList).forEach(node => {
        inDegree[node] = 0;
    });

    // Calculate in-degree for each node
    Object.keys(adjacencyList).forEach(node => {
        adjacencyList[node].forEach(neighbor => {
            inDegree[neighbor]++;
        });
    });

    // Initialize queue with nodes having zero in-degree
    Object.keys(inDegree).forEach(node => {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    });

    // Perform BFS to create layers
    while (queue.length > 0) {
        const currentLayer = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            visited.add(currentNode);
            currentLayer.push(currentNode);

            for (let j = 0; j < adjacencyList[currentNode].length; j++) {
                const neighbor = adjacencyList[currentNode][j];
                inDegree[neighbor]--;

                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        layers.push(currentLayer);
    }

    return layers;
}

const layers = calculateLayers(adjacencyList);
const svg = d3.select('.sugiyamaLayout');

const nodeRadius = 20;
const verticalSpacing = 100;
const horizontalSpacing = 150;

function createNodes(layers) {
    for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
        const layer = layers[layerIndex];
        const layerY = layerIndex * verticalSpacing + 50;

        for (let nodeIndex = 0; nodeIndex < layer.length; nodeIndex++) {
            const node = layer[nodeIndex];
            const nodeX = nodeIndex * horizontalSpacing + 50;

            svg.append('circle')
                .attr('cx', nodeX)
                .attr('cy', layerY)
                .attr('r', nodeRadius)
                .attr('fill', 'steelblue');

            svg.append('text')
                .attr('x', nodeX)
                .attr('y', layerY + 5)
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .text(node);
        }
    }
}