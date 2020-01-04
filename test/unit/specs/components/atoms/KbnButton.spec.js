import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
  describe('Property', () => {
    describe('type', () => {
      describe('default', () => {
        it('composed of button element with kbn-button class', () => {
          const button = mount(KbnButton)
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })
      describe('button', () => {
        it('composed of button element with kbn-button class', () => {
          const button = mount(KbnButton, {
            propsData: {type: 'button'}
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })
      describe('text', () => {
        it('composed of button element with kbn-button-text class', () => {
          const button = mount(KbnButton, {
            propsData: { type: 'text' }
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button-text')
        })
      })
    })
    describe('type', () => {
      describe('default', () => {
        it('without disable attribute', () => {
          const button = mount(KbnButton)
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      })
      describe('true', () => {
        it('has disable attribute', () => {
          const button = mount(KbnButton, {
            propsData: { disabled: true }
          })
          expect(button.attributes().disabled).to.equal('disabled')
        })
      })
      describe('false', () => {
        it('without disable attribute', () => {
          const button = mount(KbnButton)
          expect(button.attributes().disabled).to.be.an('undefined')
        })
      })
    })
  })
  describe('event', () => {
    describe('click', () => {
      it('created', () => {
        const button = mount(KbnButton)
        button.trigger('click')
        expect(button.emitted().click.length).to.equal(1)
      })
    })
  })
  describe('slot', () => {
    describe('inserted content', () => {
      it('is inserted', () => {
        const button = mount(KbnButton, {
          slots: { default: '<p>hello</p>' }
        })
        expect(button.text()).to.equal('hello')
      })
    })
    describe('without content', () => {
      it('is not inserted', () => {
        const button = mount(KbnButton)
        expect(button.text()).to.equal('')
      })
    })
  })
})
