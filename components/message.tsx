import Link from 'next/link'

import styles from '@styles/message.module.scss'

const links = { public: '/user/<username>', secret: '/gist/<gist_id>' }
export default ({ msg, children = [], ...etc }) => {
  const link = links[msg]
  return (
    <Link className={styles.message} href={link ?? '/'} {...etc}>
      <h3>{msg}</h3>
      {children}
      <h4>{link}</h4>
    </Link>
  )
}
