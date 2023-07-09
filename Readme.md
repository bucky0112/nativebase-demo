# Tokenize-Demo

## Technology Stack

- React Native
- Expo
- TypeScript
- Redux Toolkit
- NativeBase

## Structure

assets：使用的 SVG。

src：此目錄包含應用程式的主要程式碼。

api：與 API 服務相關的程式碼。

components：重複使用的元件。其中 `Main` 和 `Markets` 是特定的元件。

screens：各頁面。

stores：包含 Redux store 的設定，以及應用程式中不同種類狀態的 slices。

.env：儲存環境變數的檔案。此檔案在 .gitignore 中，因此不會被納入版本控制，開始專案前需要先新增一個，並按照 `.env.sample` 中設定。

.env.sample：一個 `.env` 檔案的樣板，用於說明需要設定的環境變數。

App.tsx：應用程式的主入口點。

此應用程式使用 SVG 作為圖形，並使用 `react-native-svg-transformer` 轉換為 React 元件。環境變數的管理使用 `react-native-dotenv`。