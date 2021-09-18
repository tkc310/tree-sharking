# named export vs default export

webpack@5.53.0

tree-sharkingの挙動とvscodeでの補完の挙動を確認

## tree-sharking

namedでもdefaultでもtree-sharkingされている

## vscodeでのコード補完

### import文の追加

下記のようにdefault exportした場合はimport側から `foo` とタイプするとmoduleを探してきてサジェストしてくれる。
moduleを選択すると `import foo from 'xxx'` も追加してくれる。

named exportも同様

```js
const foo = () => {
  console.log('foo');
};
export default foo;
```

### import時のmoduleのサジェスト

下記のようにexportした場合、 `import <ここ> from 'xxx'` にカーソルを当てた際にnamed exportはサジェストしてくれるが、default exportはサジェストしてくれない。

```js
export default foo;
export { bar };
```

## まとめ

tree-sharkingはどちらも効く。
複数moduleをexportする場合は、検索性が優れるためnamed exportしたほうが良さそう。
単一moduleをexportする場合は、default exportしても困るほどではなさそう。
default exportはファイル末尾で行ったほうが親切ではある。
module名を省略してdefault exportするのは禁止したい。

