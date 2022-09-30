import Container from './container.js'

import styles from '../styles/components/interface.module.sass'

export default function UserInterface(props) {
  return (
    <> 
      <Container>
        <div id="ui" data-layout={props.layout} className={styles.ui}>
          {props.children}
        </div>
      </Container>
    </>
  )
}

export function Pane(props) {
  return (
    <> 
      <section className={styles.pane}>
        {props.children}
      </section>
    </>
  )
}

export function Sidebar(props) {
  return (
    <> 
      <aside className={styles.side}>
        {props.children}
      </aside>
    </>
  )
}

export function PaneRow(props) {
  return (
    <> 
      <div data-row={props.name} className={styles.row}>
        {props.children}
      </div>
    </>
  )
}

