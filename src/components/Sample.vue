<template>
  <div>
    <form>
      <div v-if="submitLoading">{{ submitErrors.message }}</div>
      <div>formの内容</div>
      <button :disabled="submitLoading" @click="onSubmitClicked">送信する</button>
    </form>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useApi } from '../composables/useApi'
export default defineComponent ({
  setup(){
    const params = ''
    const {
      handleApi,
      loading: submitLoading,
      error: submitErrors,
    } = useApi(async () =>{
      return await this.$axios.$post('/api/test', params)
    })

    const onSubmitClicked = async () => {
        await handleApi()

        if (!submitErrors) {
            this.$router.push(/* 送信後のページ遷移 */)
        }
    }

    return {
      submitLoading,
      submitErrors,
      onSubmitClicked
    }
  }
})
</script>