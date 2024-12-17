import * as vscode from 'vscode';
import { registerHoverProvider } from './hoverProvider';
import { createTranslationFile } from './translationManager';

export function activate(context: vscode.ExtensionContext) {
  // Register hover provider
  context.subscriptions.push(registerHoverProvider());

  // Register command for creating translation files
  const disposable = vscode.commands.registerCommand(
    'i18nHelper.createTranslation',
    async () => {
      await createTranslationFile();
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}