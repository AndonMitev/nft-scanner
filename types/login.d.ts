import { TCode, TCampaignResponse } from './index'

export type TLoginData = {
  address: string
  campaigns: TCampaignResponse[]
  codes: TCode[]
  __v: number
  _id: string
}

export interface AxiosLoginResponse extends AxiosResponse {
  data: TLoginData
}
