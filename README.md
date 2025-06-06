# 📝 ToDoアプリ

モダンなReact + TypeScript + Viteで構築されたタスク管理アプリケーションです。

![スクリーンショット 2025-06-02 112204](https://github.com/user-attachments/assets/a95d9ebc-3e9a-4d98-87d3-b902fd54751f)


## ✨ 特徴

- ✅ タスクの追加、編集、削除
- 🔄 タスクの完了/未完了の切り替え
- 🔍 タスクのフィルタリング（すべて、未完了、完了済み）
- 💾 ローカルストレージでデータの永続化
- 📱 レスポンシブデザイン
- ♿ アクセシビリティ対応
- 🎨 モダンなUI/UX

## 🛠️ 技術スタック

- **フロントエンド**: React
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS
- **データ永続化**: Local Storage
- **開発ツール**: ESLint, Hot Module Replacement (HMR)

## 🚀 セットアップと実行

### 前提条件
- Node.js (v16以上)
- npm または yarn

### インストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

### プロダクションビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

## 📂 プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── TodoForm.tsx    # タスク追加フォーム
│   ├── TodoItem.tsx    # 個別タスクアイテム
│   ├── TodoList.tsx    # タスクリスト
│   └── TodoFilter.tsx  # フィルター機能
├── hooks/              # カスタムフック
│   └── useLocalStorage.ts
├── types/              # TypeScript型定義
│   └── Todo.ts
├── App.tsx            # メインアプリコンポーネント
└── main.tsx           # エントリーポイント
```

## 🎯 使用方法

1. **タスクの追加**: 上部の入力フィールドにタスクを入力し、「追加」ボタンをクリック
2. **タスクの完了**: チェックボックスをクリックしてタスクを完了としてマーク
3. **タスクの編集**: 鉛筆アイコンをクリックしてタスクテキストを編集
4. **タスクの削除**: ゴミ箱アイコンをクリックしてタスクを削除
5. **フィルタリング**: 「すべて」「未完了」「完了済み」ボタンでタスクをフィルタ
6. **一括削除**: 「完了済みを削除」ボタンで完了したタスクを一括削除

## 🌟 主要機能

### データの永続化
- ローカルストレージを使用してブラウザを閉じても状態を保持
- 自動的にデータを保存・復元

### レスポンシブデザイン
- デスクトップ、タブレット、モバイルに対応
- タッチフレンドリーなインターフェース

### アクセシビリティ
- キーボードナビゲーション対応
- スクリーンリーダー対応
- 適切なARIAラベル

## 🔧 開発

このプロジェクトは、以下のツールを使用して開発されています：

- **React 18**: 最新のReactフック機能を活用
- **TypeScript**: 型安全性とコード品質の向上
- **Vite**: 高速な開発サーバーとビルド
- **ESLint**: コード品質の維持
