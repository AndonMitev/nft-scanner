const defaults = {
  title: 'opn',
  description: '',
  image: '',
  url: ''
}

interface MetaProps {
  title?: string
  description?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  url?: string
}

export const Meta: React.VFC<MetaProps> = props => (
  <>
    <meta
      name="description"
      content={props.description || defaults.description}
    />

    {/*<!-- Google / Search Engine Tags -->*/}
    <meta itemProp="name" content={props.title || defaults.title} />
    <meta
      itemProp="description"
      content={props.description || defaults.description}
    />

    {/*<!-- Facebook Meta Tags -->*/}
    <meta property="og:title" content={props.title || defaults.title} />
    <meta
      property="og:description"
      content={props.description || defaults.description}
    />
    <meta property="og:image" content={props.image || defaults.image} />
    {props.imageWidth && (
      <meta property="og:image:width" content={props.imageWidth.toString()} />
    )}
    {props.imageHeight && (
      <meta property="og:image:height" content={props.imageHeight.toString()} />
    )}
    <meta property="og:url" content={props.url || defaults.url} />
    <meta property="og:type" content="website" />

    {/*<!-- Twitter Meta Tags -->*/}
    <meta name="twitter:title" content={props.title || defaults.title} />
    <meta
      name="twitter:description"
      content={props.description || defaults.description}
    />
    {!props.imageWidth && !props.imageHeight && (
      <meta name="twitter:image" content={props.image || defaults.image} />
    )}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={props.url || defaults.url} />
  </>
)
