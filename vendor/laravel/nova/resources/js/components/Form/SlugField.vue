<template>
  <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
    <template slot="field">
      <div class="flex items-center">
        <input
          ref="theInput"
          class="w-full form-control form-input form-input-bordered"
          :id="field.attribute"
          :dusk="field.attribute"
          v-model="value"
          :disabled="isReadonly"
          v-bind="extraAttributes"
        />

        <button
          class="
            btn btn-link
            rounded
            px-1
            py-1
            inline-flex
            text-sm text-primary
            ml-1
            mt-2
          "
          v-if="field.showCustomizeButton"
          type="button"
          @click="toggleCustomizeClick"
        >
          {{ __('Customize') }}
        </button>
      </div>
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import slugify from '@/util/slugify'

export default {
  mixins: [HandlesValidationErrors, FormField],

  data: () => ({
    isListeningToChanges: false,
  }),

  mounted() {
    const listenToCreateModalClosed = () => {
      if (this.isListeningToChanges === true) {
        this.registerChangeListener()
      }
    }

    Nova.$on('create-relation-modal-opened', this.removeChangeListener)
    Nova.$on('create-relation-modal-closed', listenToCreateModalClosed)

    if (this.shouldRegisterInitialListener) {
      this.registerChangeListener()
    }

    this.$once('hook:beforeDestroy', () => {
      Nova.$off('create-relation-modal-opened', this.removeChangeListener)
      Nova.$off('create-relation-modal-closed', listenToCreateModalClosed)
      this.removeChangeListener()
    })
  },

  methods: {
    changeListener(value) {
      return value => {
        this.value = slugify(value, this.field.separator)
      }
    },

    registerChangeListener() {
      Nova.$on(this.eventName, this.handleChange)

      this.isListeningToChanges = true
    },

    removeChangeListener() {
      if (this.isListeningToChanges === true) {
        Nova.$off(this.eventName)
      }
    },

    handleChange(value) {
      this.value = slugify(value, this.field.separator)
    },

    toggleCustomizeClick() {
      if (this.field.readonly) {
        this.removeChangeListener()
        this.isListeningToChanges = false
        this.field.readonly = false
        this.field.extraAttributes.readonly = false
        this.field.showCustomizeButton = false
        this.$refs.theInput.focus()
        return
      }

      this.registerChangeListener()
      this.field.readonly = true
      this.field.extraAttributes.readonly = true
    },
  },

  computed: {
    shouldRegisterInitialListener() {
      return !this.field.updating
    },

    eventName() {
      return `${this.field.from}-change`
    },

    extraAttributes() {
      return this.field.extraAttributes || {}
    },
  },
}
</script>
