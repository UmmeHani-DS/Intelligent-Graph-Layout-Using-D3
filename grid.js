function gridLayout(data) {

    const nodes = Object.keys(data);

    const gridSize = 130; // Adjust the grid size as needed
    const margin = 100;

    const svg = d3.select(".gridLayout")

    // Create an array to store the coordinates of each node
    const nodeCoordinates = [];

    nodes.forEach((node, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;

        const x = margin + col * gridSize;
        const y = margin + row * gridSize;

        // Store node coordinates
        nodeCoordinates.push({
            name: node,
            x: x,
            y: y
        });

        // Node Placement
        svg.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 25)
            .style("fill", "purple");

        // Node labels
        svg.append("text")
            .attr("x", x)
            .attr("y", y)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .style("fill", "white")
            .text(node);
    });

    const circleRadius = 25; // Adjust the radius of the circle as needed
    const gap = 0; // Adjust the gap between the circle and edge line

    // Adding edges
    for (let i = 0; i < nodes.length; i++) {
        const currentNode = nodes[i];
        const neighbors = data[currentNode];

        neighbors.forEach(neighbor => {
            // Find coordinates of current node and neighbor
            const sourceNode = nodeCoordinates.find(item => item.name === currentNode);
            const targetNode = nodeCoordinates.find(item => item.name === neighbor);

            // Calculate the angle between nodes to draw the line with a gap from the circumference
            const angle = Math.atan2(targetNode.y - sourceNode.y, targetNode.x - sourceNode.x);

            // Calculate adjusted endpoints with a gap
            const sourceX = sourceNode.x + Math.cos(angle) * (circleRadius + gap);
            const sourceY = sourceNode.y + Math.sin(angle) * (circleRadius + gap);
            const targetX = targetNode.x - Math.cos(angle) * (circleRadius + gap);
            const targetY = targetNode.y - Math.sin(angle) * (circleRadius + gap);

            // Draw a line from the adjusted circumference of sourceNode to targetNode
            svg.append("line")
                .attr("x1", sourceX)
                .attr("y1", sourceY)
                .attr("x2", targetX)
                .attr("y2", targetY)
                .style("stroke", "black")
                .style("stroke-width", 2);
        });
    }


}