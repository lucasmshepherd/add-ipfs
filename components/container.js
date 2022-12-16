export default function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export function Page(props) {
  return (
    <div id="page">
      {props.children}
    </div>
  )
}