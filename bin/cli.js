#!/usr/bin/env node
const { prompt } = require("enquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { spawn } = require("child_process");

// Import your template prompts
const prompts = require("../templates/prompts");

async function main() {
    console.log(chalk.blue("Welcome to Figdu! Let's create your Figma plugin."));

    // Ask questions
    const answers = await prompt(prompts);

    // Define the project directory
    const projectDir = path.join(process.cwd(), answers.projectName);

    // Create the project directory
    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir);
    }

    // Choose the template based on the language
    const templateDir = path.join(
        __dirname,
        `../templates/base-${answers.language}`
    );
    fs.copySync(templateDir, projectDir);

    // Update package.json and manifest.json with user answers
    updatePackageJson(projectDir, answers);
    updateManifestJson(projectDir, answers);

    console.log(chalk.green("Project created successfully!"));

    // Install dependencies
    console.log(chalk.blue("Installing dependencies..."));
    await new Promise((resolve, reject) => {
        const installProcess = spawn("npm", ["install"], { cwd: projectDir, stdio: "inherit" });
        installProcess.on("close", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`npm install failed with code ${code}`));
        });
    });

    // Add Chakra UI snippets
    console.log(chalk.blue("Adding Chakra UI snippets..."));
    await new Promise((resolve, reject) => {
        const snippetProcess = spawn("npx", ["@chakra-ui/cli", "snippet", "add"], { cwd: projectDir, stdio: "inherit" });
        snippetProcess.on("close", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Chakra UI snippet add failed with code ${code}`));
        });
    });
}

function updatePackageJson(projectDir, answers) {
    const packageJsonPath = path.join(projectDir, "package.json");
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = answers.projectName;
    packageJson.version = answers.version;
    packageJson.description = answers.description;
    packageJson.author = answers.author;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
}

function updateManifestJson(projectDir, answers) {
    const manifestJsonPath = path.join(projectDir, "manifest.json");
    const manifestJson = fs.readJsonSync(manifestJsonPath);
    manifestJson.name = answers.pluginName;
    manifestJson.id = answers.pluginId;
    fs.writeJsonSync(manifestJsonPath, manifestJson, { spaces: 2 });
}

main().catch((err) => {
    console.error(chalk.red("Error:"), err);
    process.exit(1);
});