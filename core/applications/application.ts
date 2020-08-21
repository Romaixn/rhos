import { v4 as uuid } from 'uuid'
import { Properties } from '@/core/applications/properties'

export class Application {
  readonly id: string
  properties?: Properties
  name: string

  constructor (name: string = 'App', properties?: Properties) {
    this.id = uuid()
    this.name = name
    this.properties = {
      fullScreen: false,
      draggable: true,
      focus: true,
      minified: false,
      ...properties
    }
  }
}
