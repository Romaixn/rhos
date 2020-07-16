import { mount } from '@vue/test-utils'
import ActivityBar from '@/layouts/activity.vue'

describe('Activity Bar', () => {
  test('is activity bar exist', () => {
    const wrapper = mount(ActivityBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
