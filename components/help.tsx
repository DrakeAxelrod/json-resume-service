import Message from '@components/message'

const tpl = (str: TemplateStringsArray, ...vars: string[]) => (<p key={Math.random()} > {
  str.reduce((acc, cur, i) =>
    [...acc, (<span key={`${cur}--${i}`} > {cur} <em> {vars[i]}</em> </span>)], [])
}</p>)

export default () => (<> {[
  [
    'secret',
    tpl`It ${"must"} have a ${"json file"}`,
    tpl`It can be ${"named anything"}`,
    tpl`The ${"first json file"} will be attempted`,
    tpl`Go to ${"origin"}/${"username"}/${"secret_gist_id"}`
  ],
  [
    'public',
    tpl`It must have a ${'json file'}`,
    tpl`It can be ${'named anything'}`,
    tpl`The ${'first json file'} will be attempted`,
  ],
].reduce((acc, [visibility, ...points], i) => [
  ...acc,
  (
    <Message key={`${visibility}--${i}`} msg={visibility}>{points}</Message>
  )
], [])} </>)
