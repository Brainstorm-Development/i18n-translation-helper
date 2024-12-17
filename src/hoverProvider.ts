import * as vscode from 'vscode';
import { getTranslationValue } from './utils/fileUtils';

export function registerHoverProvider() {
  return vscode.languages.registerHoverProvider(['javascript', 'typescript'], {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position, /['"](.*?)['"]/);
      if (!range) return;

      const key = document.getText(range).replace(/['"]/g, '');
      const translation = getTranslationValue(key);

      if (translation) {
        return new vscode.Hover(`**Translation:** ${translation}`);
      }
    },
  });
}