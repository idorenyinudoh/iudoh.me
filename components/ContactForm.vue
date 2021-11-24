<template lang="pug">
div
  p.form-greeting If you want to say hi, or hire me:
  p.error-message.hide It's not me so it's either you or the internet. Either way, try submitting the form again.
  p.thank-you.hide Thank you! I'll reply you shooooortlyyy.
  form(@submit.prevent='submitForm')
    label Name:
      input#name(
        type='text',
        name='name',
        placeholder='Tobias Lütke',
        v-model='name',
        required
      )
    label Email:
      input#email(
        type='email',
        name='email',
        placeholder='probablytobiaslütke@shopify.com',
        v-model='email',
        required
      )
    label Subject:
      input#subject(
        type='text',
        name='subject',
        placeholder='Employment Request',
        v-model='subject',
        required
      )
    label(
      :data-characters-left='charactersLeft === 1 ? charactersLeft + " character left" : charactersLeft + " characters left"'
    ) Message:
      textarea#message(
        maxlength='500',
        rows='10',
        name='message',
        placeholder='Hi Idorenyin!\n\nI was wondering if you would be willing to join us at Shopify as a Frontend developer. I would really love to have you on our team.',
        required,
        v-model='message',
        @input='getCharactersLeft'
      )
    base-button Submit
</template>

<script>
import { send } from 'emailjs-com'

export default {
  data() {
    return {
      charactersLeft: 500,
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    getCharactersLeft() {
      this.charactersLeft = 500 - this.message.length
    },
    submitForm(e) {
      send(
        'service_a23ks2u',
        'template_hflruyo',
        {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        },
        'user_KKGeOCryoJdt5V45QFpqk'
      ).then(
        () => {
          document.querySelector('.form-greeting').classList.add('hide')
          e.target.classList.add('hide')
          document.querySelector('.thank-you').classList.remove('hide')
        },
        () => {
          const errorMessageElement = document.querySelector('.error-message')

          errorMessageElement.classList.remove('hide')
          errorMessageElement.scrollIntoView({ behavior: 'smooth' })
        }
      )
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 660px) {
  form {
    grid-template-columns: 1fr 1fr;
  }

  label:nth-child(4),
  button {
    grid-column: 1 / 2;
  }
}

p {
  margin: 0 0 calc(30px + 1vw) 0;
}

.error-message {
  color: #dc1a1a;
}

form {
  display: grid;
  gap: calc(20px + 1vw);
}

label {
  display: grid;
  row-gap: calc(2px + 0.5vw);
  font-size: 24px;
}

label:nth-child(4) {
  position: relative;
  margin-bottom: calc(30px + 1vw);
}

label:nth-child(4)::after {
  position: absolute;
  bottom: -30px;
  left: 0;
  font-size: 18px;
  content: attr(data-characters-left);
}

input,
textarea {
  border: 2px solid #808080;
  padding: 10px 5px;
  font-size: 20px;
  letter-spacing: inherit;
  outline: none;
}

textarea {
  font-family: inherit;
}

input:focus,
textarea:focus {
  border-color: #000;
}

.hide {
  display: none;
}
</style>
