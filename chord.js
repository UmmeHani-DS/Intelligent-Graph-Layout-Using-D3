function chordLayout(graph) {
    const nodes = Object.keys(graph);

    const svgElement = d3.select(".chordLayout");
    const width = +svgElement.attr("width");
    const height = +svgElement.attr("height");

    const nodeCount = nodes.length;
    const radius = Math.min(width, height) * 0.4;
    const svg = d3.select(".chordLayout")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Calculate angle for each node
    const nodeAngles = nodes.map((node, i) => (i / nodeCount) * 2 * Math.PI);

    // Use d3.scaleOrdinal with d3.schemeCategory10 for colors
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Draw links (curved lines between nodes) with different colors
    nodes.forEach((sourceNode, i) => {
        nodes.forEach((targetNode, j) => {
            const sourceAngle = nodeAngles[i];
            const targetAngle = nodeAngles[j];

            const sourceX = radius * Math.cos(sourceAngle);
            const sourceY = radius * Math.sin(sourceAngle);
            const targetX = radius * Math.cos(targetAngle);
            const targetY = radius * Math.sin(targetAngle);

            if (graph[sourceNode].includes(targetNode)) {
                const curvePath = `M${sourceX},${sourceY} Q0,0 ${targetX},${targetY}`;

                // Assign colors using d3.scaleOrdinal
                svg.append("path")
                    .attr("class", "link")
                    .attr("d", curvePath)
                    .style("stroke", color(sourceNode)) // Use color scale to assign colors
                    .style("stroke-width", 2)
                    .style("fill", "none");
            }
        });
    });

    // Draw nodes
    svg.selectAll(".node")
        .data(nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("cx", (d, i) => radius * Math.cos(nodeAngles[i]))
        .attr("cy", (d, i) => radius * Math.sin(nodeAngles[i]))
        .attr("r", 7)
        .attr("fill", "purple");

    svg.selectAll(".node-label")
        .data(nodes)
        .enter().append("text")
        .attr("class", "node-label")
        .attr("x", (d, i) => (radius + 10) * Math.cos(nodeAngles[i]))
        .attr("y", (d, i) => (radius + 10) * Math.sin(nodeAngles[i]))
        .text(d => d);
}