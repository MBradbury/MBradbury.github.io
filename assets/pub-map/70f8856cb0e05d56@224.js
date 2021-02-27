// https://observablehq.com/@d3/mobile-patent-suits@224
import define1 from "./a33468b95d0b15b0@699.js";

export default function define(runtime, observer) {
    const main = runtime.module();
    const fileAttachments = new Map([
        ["publications.json", new URL("/assets/pub-map/publications.json", import.meta.url)]
    ]);
    main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));

    main.variable(observer("legend")).define(["swatches", "color"], function(swatches, color) {
        return swatches({color});
    });
    main.variable(observer("chart")).define("chart",
      ["data", "d3", "width", "height", "types", "color", "location", "drag", "linkArc", "invalidation"],
      function(data, d3, width, height, types, color, location, drag, linkArc, invalidation) {
        const links = data.links;
        const nodes = data.nodes;
        const publications = data.publications;

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody().strength(-400))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .force('collide', d3.forceCollide().radius(65).iterations(3));

        const svg = d3.create("svg")
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .style("font", "17px sans-serif")
            .attr("xlink", "http://www.w3.org/1999/xlink");

        // Per-type markers, as they don't inherit styles.
        svg.append("defs").selectAll("marker")
            .data(types)
            .join("marker")
            .attr("id", d => `arrow-${d}`)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 15)
            .attr("refY", -0.5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("fill", color)
            .attr("d", "M0,-5L10,0L0,5");

        const link = svg.append("g")
            .attr("fill", "none")
            .attr("stroke-width", 3)
            .selectAll("path")
            .data(links)
            .join("path")
            .attr("stroke", d => color(d.type))
            .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

        const node = svg.append("g")
            .attr("fill", "currentColor")
            .attr("stroke-linecap", "round")
            .attr("stroke-linejoin", "round")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .call(drag(simulation));

        node.append("a")
            .attr("xlink:href", d => "#" + publications.filter(p => p.ident == d.id).map(p => p.key))
            .append("text")
            .attr("x", 8)
            .attr("y", "0.31em")
            .text(d => d.id)
            .clone(true).lower()
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 15);

        node.append("circle")
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("r", 6);

        simulation.on("tick", () => {
            link.attr("d", linkArc);
            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });

        invalidation.then(() => simulation.stop());

        return svg.node();
    });
    main.variable().define("links", ["d3", "FileAttachment"], async function(d3, FileAttachment) {
        return JSON.parse(await FileAttachment("publications.json").text());
    });
    main.variable().define("types", ["links"], function(links) {
        return Array.from(new Set(links.relations.map(d => d.type)));
    });
    main.variable().define("data", ["links"], function(links) {
        const idents = new Set(links.publications.map(d => d.ident))
        return {
            "nodes": Array.from(idents, id => ({id})),
            "links": links.relations,
            "publications": links.publications
        };
    });
    main.variable().define("height", function() {
        return 900;
    });
    main.variable().define("color", ["d3", "types"], function(d3, types) {
        return d3.scaleOrdinal(types, d3.schemeCategory10);
    });
    main.variable().define("linkArc", function() {
        return (
            function linkArc(d) {
                const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
                return `
    M${d.source.x},${d.source.y}
    A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
  `;
            }
        )
    });
    main.variable().define("drag", ["d3"], function(d3) {
        return (
            simulation => {
              
              function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
              }
              
              function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
              }
              
              function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
              }
              
              return d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended);
            }
        );
    });
    main.variable().define("d3", ["require"], function(require) {
        return require("d3@6");
    });
    const child1 = runtime.module(define1);
    main.import("swatches", child1);
    return main;
}
