import { useFetch } from '@vueuse/core'
import { ref, watch } from 'vue'

export const useApi = (url) => {
  const itemsCount = ref(0)
  const { isFinished, isFetching, error, data, canAbort, aborted,abort, response } = useFetch(
    url,
    {
      initialData: [] || null,
      refetch: true
    }
  ).json()

  const cancelFetch = () => {
    if (canAbort.value && !aborted.value) {
      abort()
      console.log('Request has been cancelled')
    }
  }

  watch(response, (value) => {
    if (value) {
      itemsCount.value = parseInt((value.headers.get('X-Total-Count')))
    }
  })

  return { data, isFetching, error, cancelFetch, itemsCount, isFinished }
}