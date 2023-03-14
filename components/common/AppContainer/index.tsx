import { Container, ContainerProps } from '@mui/material'

export const AppContainer: React.FC<ContainerProps> = ({
  maxWidth = false,
  sx,
  ...restProps
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        maxWidth: maxWidth ? 'initial' : 1500,
        ...sx
      }}
      {...restProps}
    ></Container>
  )
}
