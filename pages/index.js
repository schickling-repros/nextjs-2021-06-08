import { a, b } from '.genpkg'

export const getStaticProps = () => {
  return { props: { b } }
}

export default function Page(props) {
  return <div>
    <div>global import: {a}</div>
    <div>getStaticProps: {props.b}</div>
  </div>
}