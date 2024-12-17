# I18n Helper

**I18n Helper** is a Visual Studio Code extension designed to simplify internationalization (i18n) management for your projects. Easily manage your translation files, create new translations with Google Translate, and view translation values directly in your code editor.

---

## Features

### 🔍 Hover Tooltips for Translation Keys
Hover over any translation key in your JavaScript or TypeScript code to see its corresponding value from the default language file.

### 🌍 Create New Translation Files
Generate new translation files for additional languages based on your default language file. Utilize the Google Translate API to populate translations automatically.

### ⚙️ Configurable Settings
Customize the extension to suit your project by defining:
- The path to your default language JSON file.
- Your Google Translate API key.

---

## Getting Started

### 1️⃣ Install the Extension
Search for **I18n Helper** in the VS Code marketplace and click **Install**.

### 2️⃣ Configure the Extension
Add the following settings to your `settings.json` file in VS Code:

```json
{
  "i18nHelper.defaultLangPath": "/absolute/path/to/default.json",
  "i18nHelper.googleApiKey": "your-google-translate-api-key"
}
```

- Replace `/absolute/path/to/default.json` with the path to your default language JSON file.
- Obtain a Google Translate API key and replace `your-google-translate-api-key` with it.

### 3️⃣ Use the Extension

#### **View Translation Values**
Hover over any translation key in your JavaScript or TypeScript code to see its value from the default language file.

#### **Create New Translations**
1. Open the Command Palette (`Ctrl + Shift + P` or `Cmd + Shift + P`).
2. Search for and select `Create Translation File`.
3. Enter the target language code (e.g., `fr` for French, `de` for German).
4. A new JSON file (e.g., `fr.json`) will be created in the same directory as the default language file.

---

## Requirements

- **Node.js**
- **VS Code 1.75.0+**

---

## Known Issues

- The extension currently supports JSON format for translation files.
- The Google Translate integration requires a valid API key.

---

## Feedback and Support
We’d love to hear your feedback! If you encounter any issues or have feature requests, please visit the [GitHub repository](https://github.com/your-repo) and open an issue.


