# GitHub Actions設定ガイド

このプロジェクトを正常に動作させるために、以下の設定が必要です。

## 1. GitHub Secretsの設定

リポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定してください：

### GEMINI_API_KEY
- **値**: あなたのGemini APIキー
- **取得方法**: 
  1. [Google AI Studio](https://aistudio.google.com/) にアクセス
  2. 「Get API key」をクリック
  3. 新しいAPIキーを作成
  4. 生成されたキーをコピー

## 2. GitHub Pagesの設定

リポジトリの Settings > Pages で以下を設定してください：

### Source
- **選択**: GitHub Actions

### Custom domain（オプション）
- 独自ドメインを使用する場合は設定

## 3. リポジトリ権限の設定

Settings > Actions > General で以下を確認してください：

### Workflow permissions
- **選択**: Read and write permissions
- **チェック**: Allow GitHub Actions to create and approve pull requests

### Pages環境の設定
Settings > Environments で以下を確認してください：
- **github-pages**環境が作成されていることを確認
- デプロイメント保護ルール（必要に応じて設定）

## 3.1. 重要な設定確認項目

### リポジトリの可視性
- リポジトリが**Public**であることを確認
- PrivateリポジトリでGitHub Pagesを使用する場合はGitHub Pro以上が必要

### Actions権限
Settings > Actions > General で以下も確認：
- **Allow all actions and reusable workflows**が選択されていること
- **Allow actions created by GitHub**が有効になっていること

## 4. 実行スケジュール

ワークフローは以下のタイミングで実行されます：

- **定期実行**: 毎日午前9時（JST）
- **手動実行**: Actions タブから「Run workflow」
- **プッシュ時**: src/ または .github/workflows/ の変更時

## 5. 初回実行

1. リポジトリをプッシュ後、Actions タブを確認
2. 「Update World Bank Dashboard」ワークフローを選択
3. 「Run workflow」ボタンで手動実行
4. 実行完了後、GitHub Pagesでダッシュボードが公開される

## 6. トラブルシューティング

### よくある問題

#### Gemini API エラー
- APIキーが正しく設定されているか確認
- APIの利用制限に達していないか確認
- 無料ティアの場合、レート制限に注意

#### GitHub Pages デプロイエラー
- リポジトリがパブリックか確認
- Pages設定でGitHub Actionsが選択されているか確認

#### データ取得エラー
- World Bank APIが利用可能か確認
- ネットワーク接続の問題がないか確認

### ログの確認方法

1. Actions タブを開く
2. 失敗したワークフローをクリック
3. 各ステップのログを確認
4. エラーメッセージを確認して対処

## 7. カスタマイズ

### 実行頻度の変更
`.github/workflows/update-dashboard.yml` の cron 設定を変更：

```yaml
schedule:
  - cron: '0 0 * * *'  # 毎日午前0時（UTC）
  - cron: '0 */6 * * *'  # 6時間ごと
  - cron: '0 0 * * 1'  # 毎週月曜日
```

### 対象国の変更
`src/data-collector.js` の COUNTRIES オブジェクトを編集

### 指標の変更
`src/data-collector.js` の INDICATORS オブジェクトを編集

## 8. セキュリティ

- APIキーは必ずGitHub Secretsで管理
- .envファイルはリポジトリにコミットしない
- 定期的にAPIキーをローテーション

## 9. 監視

### 実行状況の確認
- Actions タブで実行履歴を確認
- 失敗時はメール通知を設定可能

### データ品質の確認
- 生成されたダッシュボードを定期的に確認
- データの異常値や欠損をチェック

