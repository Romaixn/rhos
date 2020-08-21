export enum APPLICATION_CATEGORY {
  GAME = 'GAME',
  UTILITY = 'UTILITY',
  INFO = 'INFO',
  OTHERS = 'OTHERS'
}

export class Properties {
  alt?: string
  title?: string
  component?: any
  fullScreen?: boolean
  draggable?: boolean
  focus?: boolean
  minified?: boolean
  icon?: string
  startPosition?: {x: string, y: string}
  size?: {width: string, height: string}
  data?: {[key: string]: any}
  fs?: {
    path: string,
    category: APPLICATION_CATEGORY
  }
}
