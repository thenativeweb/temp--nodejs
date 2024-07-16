Um ein einfaches Setup von Babel.js zu erstellen, mit dem du modernes ECMAScript nach ES5 zurückkompilieren kannst, kannst du folgende Schritte befolgen:

1. **Erstellen eines neuen Projekts:**
   Erstelle einen neuen Ordner für dein Projekt und navigiere in diesen Ordner.

   ```bash
   mkdir babel-demo
   cd babel-demo
   ```

2. **Initialisieren des Projekts:**
   Initialisiere ein neues Node.js-Projekt mit `npm init`. Dies erstellt eine `package.json`-Datei.

   ```bash
   npm init -y
   ```

3. **Installieren von Babel:**
   Installiere Babel und die notwendigen Presets.

   ```bash
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
   ```

4. **Erstellen der Babel-Konfigurationsdatei:**
   Erstelle eine `.babelrc`-Datei im Projektverzeichnis. Diese Datei enthält die Babel-Konfiguration.

   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

5. **Erstellen der Quell- und Zielverzeichnisse:**
   Erstelle Verzeichnisse für deinen Quellcode und den kompilierten Code.

   ```bash
   mkdir src
   mkdir dist
   ```

6. **Schreiben einer Beispiel-JavaScript-Datei:**
   Erstelle eine JavaScript-Datei im `src`-Verzeichnis mit modernem ECMAScript-Code.

   `src/index.js`:

   ```javascript
   const greet = () => {
     console.log("Hello, Babel!");
   };

   greet();
   ```

7. **Kompilieren des Codes:**
   Füge in deiner `package.json`-Datei ein Skript hinzu, um Babel zu verwenden und den Code zu kompilieren.

   ```json
   "scripts": {
     "build": "babel src --out-dir dist"
   }
   ```

8. **Kompilieren und Ausführen:**
   Führe das Build-Skript aus, um den Code zu kompilieren.

   ```bash
   npm run build
   ```

   Du findest den kompilieren Code im `dist`-Verzeichnis. Die Datei `dist/index.js` sollte nun ES5-kompatiblen Code enthalten.

   Der kompilierte Code könnte etwa so aussehen:

   ```javascript
   "use strict";

   var greet = function greet() {
     console.log("Hello, Babel!");
   };

   greet();
   ```

Mit diesem einfachen Setup kannst du nun modernen ECMAScript-Code nach ES5 zurückkompilieren und die Funktionsweise von Babel demonstrieren.
