export type ContainerProps = React.PropsWithChildren

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>
}
