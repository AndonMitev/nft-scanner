const dev = process.env.NODE_ENV !== 'production'
// const dev = false

export const config = {
  NEXT_PUBLIC_BACKEND_URL:
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (dev
      ? 'http://localhost:3000/'
      : 'https://opn-nft-auth-backend.development-product.opn.dev/')
}
