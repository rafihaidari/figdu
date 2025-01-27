module.exports = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
        initial: "my-figma-plugin",
    },
    {
        type: "input",
        name: "version",
        message: "What is the initial version?",
        initial: "1.0.0",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your plugin:",
        initial: "A Figma plugin built with Figdu.",
    },
    {
        type: "input",
        name: "author",
        message: "Who is the author of this plugin?",
        initial: "Your Name <your.email@example.com>",
    },
    {
        type: "input",
        name: "pluginName",
        message: "What is the name of your Figma plugin?",
        initial: "My Figma Plugin",
    },
    {
        type: "input",
        name: "pluginId",
        message: "Enter a unique ID for your plugin:",
        initial: "1234567890abcdef",
    },
    {
        type: "select",
        name: "language",
        message: "Choose a language:",
        choices: [
            { name: "TypeScript", value: "TypeScript" },
            { name: "JavaScript", value: "JavaScript" },
        ],
        initial: "TypeScript",
    },
];