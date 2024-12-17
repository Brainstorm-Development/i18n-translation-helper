import * as fs from 'fs';
import * as vscode from 'vscode';

export function getTranslationValue(key: string): string | null {
  const defaultLangPath = vscode.workspace.getConfiguration('i18nHelper').get<string>('defaultLangPath');
  if (!defaultLangPath || !fs.existsSync(defaultLangPath)) return null;

  const data = JSON.parse(fs.readFileSync(defaultLangPath, 'utf-8'));
  return data[key] || null;
}

export function writeFile(path: string, content: string) {
  fs.writeFileSync(path, content, 'utf-8');
}
