import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
	workspaceFile: "../blacksmith-organisation-system_py.code-workspace",
	files: 'test/**/*.test.js'
});
