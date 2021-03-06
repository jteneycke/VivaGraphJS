/**
 * Configuration to include all features of vivagraph in one file.
 */
configuration = {
    outName : '../dist/vivagraph.svg',
    workDir : '../src/',
    files : [
            "vivagraph.js",
            "version.js",
            "Utils/etc.js",
            "Utils/browserInfo.js",
            "Utils/indexOf.js",
            "Utils/getDimensions.js",
            "Utils/events.js",
            "Input/dragndrop.js",
            "Input/domInputManager.js",
            "Input/spatialIndex.js", // TODO: Do I need this for SVG?
            "Utils/timer.js",
            "Utils/geom.js",

            "Core/primitives.js",
            "Core/graph.js",
            "Core/operations.js",

            "Physics/primitives.js",
            "Physics/eulerIntegrator.js",
            "Physics/Forces/nbodyForce.js",
            "Physics/Forces/dragForce.js",
            "Physics/Forces/springForce.js",
            "Physics/forceSimulator.js",
            "Layout/forceDirected.js",
            "Layout/constant.js",

            "Svg/svg.js",
            "View/svgGraphics.js",
            "View/svgNodeFactory.js",

            "View/renderer.js",
    ]
};
