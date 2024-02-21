const withPartialProps = 
  <PartialProps extends Partial<Props>, Props> (
      Component: React.ComponentType<Props>, partialProps: PartialProps
  ) => (
    props: Omit<Props, keyof PartialProps>
  ) => {
  const combined = { ...partialProps, ...props } as Props
  return (<Component { ...combined } as Props />) 
}

export default withPartialProps
