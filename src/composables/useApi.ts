import { ref, reactive, Ref, toRefs } from '@vue/composition-api'
import { AxiosError } from 'axios'

type useApiResult<T> = {
  handleApi: () => Promise<T | null>
  errors: Ref<ApiErrorResponse>
  loading: Ref<boolean>
}

type ApiErrorResponse = {
  message: string,
  status: number,
  reason: Record<string, string>
}

export type useApi = {
  <T>(apiFunc: ()=> Promise<T>): useApiResult<T>
}