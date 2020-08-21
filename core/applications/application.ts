import { v4 as uuid } from 'uuid'
import { Properties } from '@/core/applications/properties'

export class Application {
  readonly id: string
  properties?: Properties
  name: string
  open: boolean

  constructor (name: string = 'App', open: boolean = false, properties?: Properties) {
    this.id = uuid()
    this.name = name
    this.open = open
    this.properties = {
      fullScreen: false,
      draggable: true,
      focus: true,
      minified: false,
      ...properties
    }
  }

  get isOpen (): boolean {
    return this.open
  }

  set isOpen (open: boolean) {
    this.open = open
  }
}
