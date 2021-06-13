const publicRuntimeConfig = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    API_URL: process.env.REACT_APP_API_URL,
    RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    LOCALSTORAGE_TOKEN_NAME: 'token',
}

export const { NODE_ENV, API_URL, RECAPTCHA_SITE_KEY, LOCALSTORAGE_TOKEN_NAME } =
    publicRuntimeConfig

export default publicRuntimeConfig.NODE_ENV
