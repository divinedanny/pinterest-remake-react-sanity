import { createClient } from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: "dqmd5zzy",
    // projectId: process.env.REACT_GOOGLE_PROJECT_APP_ID,
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
    toekn: 'skohV1o1dHOnIjGHlvNRp44K57NPl0XxLGKsSx0wkNzG8ZQBIb0nk1CT6IGjtl2iafThu5LPH7ZKLXcP21Eyh23qS1tFtoB2jz514lTjlQbCtAo7WtTAviINPMfzAimtCUzvfSkVtDDwHlJ4zhWWUccJQRoGZqSNwiUUAVKwgCnAINnBhMeR',
    // toekn: process.env.REACT_GOOGLE_PROJECT_APP_TOKEN,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);

