<template>
    <div>
        <h1 class="title">Questions</h1>
        <form-question v-model="question" @save="save" @reset="reset" />
        <hr />
        <list-questions
            v-model="questions"
            @remove="remove"
            @loadQuestion="loadQuestion"
        />
    </div>
</template>

<script>
import ListQuestions from '@/components/questions/ListQuestions'
import FormQuestion from '@/components/questions/FormQuestion'
export default {
    components: { FormQuestion, ListQuestions },
    async fetch() {
        this.questions = await this.$axios.$get("/api/pools")
    }
}





</script>