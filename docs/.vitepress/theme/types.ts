export interface APIHeader {
  text: string
  link: string
}

export interface APIGroup {
  text: string
  items: Array<{
    text: string
    link: string
    indexes: APIHeader[]
  }>
}
