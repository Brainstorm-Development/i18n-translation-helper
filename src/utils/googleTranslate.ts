import fetch from 'node-fetch';
import * as fs from 'fs';
import * as vscode from 'vscode';

export async function translateValues(defaultLangPath: string, targetLang: string): Promise<Record<string, string>> {
  const apiKey = vscode.workspace.getConfiguration('i18nHelper').get<string>('googleApiKey');
  if (!apiKey) {
    vscode.window.showErrorMessage('Google Translate API key not configured!');
    throw new Error('API key missing');
  }

  const data = JSON.parse(fs.readFileSync(defaultLangPath, 'utf-8'));
  const translations: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: 'POST',
        body: JSON.stringify({ q: value, target: targetLang }),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const json = await response.json();
    translations[key] = json.data.translations[0].translatedText;
  }

  return translations;
}
