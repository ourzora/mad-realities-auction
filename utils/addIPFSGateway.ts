export const addIPFSGateway = (mediaUrl: string) => {
  return mediaUrl.replace(/^ipfs?:\/\//, 'https://ipfs.io/ipfs/')
}
