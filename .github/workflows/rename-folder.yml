# .github/workflows/unzip.yml

name: Unzip and Commit Website

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  unzip_and_commit:
    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # 已修改此步骤以将文件移动到根目录
      - name: Unzip to root directory
        run: |
          # 1. 解压文件，这会在根目录创建一个 "weic-website" 文件夹
          unzip -o weic-website.zip
          
          echo "Moving files from 'weic-website' folder to root..."
          
          # 2. 将 "weic-website" 文件夹中的所有内容（包括隐藏文件）移动到上一级目录（也就是根目录）
          mv weic-website/* weic-website/.[!.]* .
          
          # 3. 删除现在已经变空的 "weic-website" 文件夹
          rmdir weic-website

      - name: Commit and push changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          if ! git diff-index --quiet HEAD; then
            git commit -m "Automated: Unzip website files to root"
            git push
          else
            echo "No changes to commit."
          fi
