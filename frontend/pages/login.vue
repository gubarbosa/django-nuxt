<template>
  <section class="login">
    <h1 class="title">Autenticação</h1>
    <div class="auth-form">
      <b-field label="Usuário">
        <b-input v-model="user.username" type="text " />
      </b-field>
      <b-field label="Senha">
        <b-input v-model="user.password" type="password" />
      </b-field>
      <b-button class="is-primary" @click="login">Login</b-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.user,
        })
        this.$toasted.global.defaultSuccess({
          msg: 'Usuário autenticado com sucesso',
        })
      } catch (err) {
        this.$toasted.global.defaultError({
          msg: 'Usuário ou senha inválidos.',
        })
      }
    },
  },
}
</script>
