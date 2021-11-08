const isLoading = (state: any) => state.loginReducer.isLoading;

const getAllLoginScreenSuccess = (state: any) => state.loginReducer.token;

const getAllLoginScreenError = (state: any) => state.loginReducer.loginError;

export {isLoading, getAllLoginScreenError, getAllLoginScreenSuccess};
