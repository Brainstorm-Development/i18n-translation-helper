import * as vscode from 'vscode';
import { translateValues } from './utils/googleTranslate';
import { writeFile } from './utils/fileUtils';

export async function createTranslationFile() {
  const defaultLangPath = vscode.workspace.getConfiguration('i18nHelper').get<string>('defaultLangPath');
  if (!defaultLangPath) {
    vscode.window.showErrorMessage('Default language path not configured!');
    return;
  }

  const targetLang = await vscode.window.showInputBox({ prompt: 'Enter target language code (e.g., fr, de)' });
  if (!targetLang) return;

  const translations = await translateValues(defaultLangPath, targetLang);
  const outputPath = `${defaultLangPath.replace('default.json', `${targetLang}.json`)}`;

  writeFile(outputPath, JSON.stringify(translations, null, 2));
  vscode.window.showInformationMessage(`Translation file created: ${outputPath}`);
}
