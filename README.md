# Intelligent Graph Layout using d3.js

### Introduction
This project involves creating an intelligent dashboard for graph layout using d3.js. The dashboard allows users to upload an adjacency matrix file, identify graph cycles, determine connectivity, and classify the graph as a General Graph, Directed Acyclic Graph (DAG), or Tree. The user can then visualize the graph using various layout options tailored to the graph type. The project requires implementing custom layout algorithms from scratch without using pre-built d3.js layouts.

### Objective
The primary objective is to develop an interactive and intelligent dashboard that processes and visualizes graph data uploaded by users. By identifying graph characteristics and offering suitable layout options, this project aims to enhance users' ability to analyze and understand graph structures efficiently.

### Key Features
1. **UI Design & Development**: Create a user-friendly interface that enables file uploads, graph analysis, and layout visualization.
   - File upload feature for adjacency matrix files.
   - Analyze graph data to identify cycles and determine connectivity.
   - Classify graphs as General Graph, DAG, or Tree.
   - Offer appropriate layout options based on graph type.

2. **Graph Layouts**:
   - **Grid Layout (General Graph)**: Lay out nodes according to chosen criteria (e.g., alphabetically, degree-based).
   - **Chord Diagram (General Graph)**: Use SVG curves for edges/chords, with node layout based on chosen criteria.
   - **Sugiyama Layout (DAG)**: Calculate node layers and layout nodes in directed Sugiyama form, ignoring crossing minimization.
   - **Radial Sugiyama Layout (DAG)**: Use node layers to layout nodes in radial Sugiyama form, ignoring crossing minimization.
   - **Rheingold Tilford Layout (Tree)**: Implement bottom-up traversal with Depth First search and subtree merging.
   - **Icicle Layout (Tree)**: Draw the tree in the form of an Icicle Plot with equal-sized leaf nodes.

### Project Components
- **index.html**: Main HTML file for the UI design and development (25 marks).
- **grid.js**: Implements Grid Layout for General Graphs (10 marks).
- **chord.js**: Implements Chord Diagram for General Graphs (10 marks).
- **Sugiyama-layers.js**: Calculates node layers for Sugiyama Layout (10 marks).
- **directed-sugiyama.js**: Implements Directed Sugiyama Layout (10 marks).
- **radial-sugiyama.js**: Implements Radial Sugiyama Layout (10 marks).
- **reingold-tilford-tree.js**: Implements Rheingold Tilford Layout for Trees (15 marks).
- **icicle-tree.js**: Implements Icicle Layout for Trees (10 marks).

### How to Run
1. Upload the adjacency matrix file using the file upload feature on the webpage.
2. The dashboard will analyze the graph and offer suitable layout options based on the graph type.
3. Select the desired layout option to visualize the graph.

This project showcases the ability to create custom graph layouts and intelligent visualization tools using d3.js, emphasizing the importance of user-friendly interfaces and detailed analysis.
