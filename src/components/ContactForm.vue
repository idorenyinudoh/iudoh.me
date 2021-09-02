<template lang="pug">
form(@submit.prevent="submitForm")
    label Name:
        input(type="text", name="name", id="name", placeholder="Tobias Lütke", v-model="name", required)
    label Email:
        input(type="email", name="email", id="email", placeholder="tobiaslütke@shopify.com", v-model="email", required)
    label Subject:
        input(type="text", name="subject", id="subject", placeholder="Employment Request", v-model="subject", required)
    label(:data-characters-left="charactersLeft === 1 ? charactersLeft + ' character left' : charactersLeft + ' characters left'") Message: 
        textarea(maxlength="500", rows="10", name="message", id="message", placeholder="Hi Idorenyin!\n\nI was wondering if you would be willing to join us at Shopify as a Frontend developer. I would really love to have you on our team.", required, v-model="message", @input="getCharactersLeft")
    button(type="submit") Submit
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'contact-form',
    data() {
        return {
            charactersLeft: 500,
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    emits: ['show-thank-you'],
    methods: {
        getCharactersLeft() {
            this.charactersLeft = 500 - this.message.length;
        },
        submitForm(e) {
            emailjs.send(
                'service_a23ks2u',
                'template_hflruyo',
                {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                },
                'user_KKGeOCryoJdt5V45QFpqk'
            )
            .then(res => {
                e.target.classList.add('hide')
                this.$emit('show-thank-you')
                console.log('Success!', res.status, res.text)
            }, err => {
                console.log('Failed', err)
            })
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 660px) {
    form {
        grid-template-columns: 1fr 1fr;
    }
    label:nth-child(4), button {
        grid-column: 1 / 2;
    }
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
input, textarea {
    border: 2px solid #808080;
    padding: 10px 5px;
    font-size: 20px;
    letter-spacing: inherit;
    outline: none;
}
textarea {
    font-family: inherit;
}
input:focus, textarea:focus {
    border-color: #000;
}
button {
    margin: 20px 0 50px 0;
    border: 2px solid #808080;
    padding: 8px 8px 8px 6px;
    background: inherit;
    font-family: inherit;
    font-size: 20px;
    letter-spacing: inherit;
    cursor: pointer;
}
button:hover, button:focus {
    outline: none;
    border-color: #212121;
    background: #212121;
    color: #fff;
}
.hide {
    display: none;
}
</style>