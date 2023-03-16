import axios from 'axios'
import { config } from 'config'

export const scanMembership = async (scanData: {
  signature: string
  membershipId: string
  chain: string
}) => {
  try {
    const response = await axios.post(
      `https://8765-88-203-244-169.eu.ngrok.io/membership/scan-member`,
      scanData
    )

    const isSuccess = true
    console.log(response)

    return response.data.length
      ? {
          isSuccess,
          data: response.data
        }
      : {
          isSuccess,
          message:
            'The user was successfully authenticated and can join the event.'
        }
  } catch (err: any) {
    return { isSuccess: false, message: err.response.data.message }
  }
}

export const authenticationWithTicket = async (ticketData: {
  signature: string
  membershipId: string
  chain: string
  tokenId: string
  contractAddress: string
}): Promise<{ isSuccess: boolean; message: string }> => {
  try {
    await axios.post(
      `https://8765-88-203-244-169.eu.ngrok.io/membership/authenticate-ticket`,
      ticketData
    )

    return {
      isSuccess: true,
      message: 'The user was successfully authenticated and can join the event.'
    }
  } catch (err: any) {
    return { isSuccess: false, message: err.response.data.message }
  }
}
