import { APPLICATION_CATEGORY, Properties as IProperties } from '@/core/types'

export class Properties implements IProperties {
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
  pwd?: {
    path: string,
    category: APPLICATION_CATEGORY
  }
}
