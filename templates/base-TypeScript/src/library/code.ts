/// <reference types="@figma/plugin-typings" />

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
    height: 250,
    width: 500,
});

figma.ui.onmessage = (msg) => {
    // Load the font before creating the text node
    figma.loadFontAsync({ family: "Inter", style: "Regular" }).then(() => {
        if (msg.type === "create-textbox") {
            // Create the text node in Figma with the given properties
            const textNode = figma.createText();
            textNode.characters = msg.text; // Set the text
            textNode.fontSize = msg.fontSize; // Set the font size

            // Set the color to #007082
            textNode.fills = [{ type: "SOLID", color: { r: 0 / 255, g: 112 / 255, b: 130 / 255 } }];

            // Position the text node (optional)
            textNode.x = 100;
            textNode.y = 100;

            // Append to the current page
            figma.currentPage.appendChild(textNode);

            // Close the plugin
            figma.closePlugin();
        }
    }).catch(err => {
        figma.closePlugin();
        console.error("Error loading font: ", err);
    });
};
