import { ReactElement } from "react"

type HeaderProps = {
    title: string
}

const Header = ({title}: HeaderProps): ReactElement => {
  return (
    <div>{title}</div>
  )
}

export default Header