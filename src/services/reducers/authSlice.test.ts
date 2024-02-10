import authSlice, {
  getRegisterRequest,
  getRegisterSuccess,
  getRegisterFailed,
  getLoginRequest,
  getLoginSuccess,
  getLoginFailed,
  getUserRequest,
  getUserSuccess,
  getUserFailed,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
  disableReset
} from './auth';

describe('authSlice reducer', () => {
  const initialState = {
    userData: null,
    registerRequest: false,
    registerFailed: false,
    loginRequest: false,
    loginFailed: false,
    userRequest: false,
    userFailed: false,
    updateRequest: false,
    updateFailed: false,
    forgotSuccess: false,
    forgotRequest: false,
    forgotFailed: false,
    resetSuccess: false,
    resetRequest: false,
    resetFailed: false,
    logoutRequest: false,
    logoutFailed: false
  };

  it('should return the initial state', () => {
    expect(authSlice.reducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle getRegisterRequest', () => {
    const nextState = authSlice.reducer(initialState, getRegisterRequest());
    expect(nextState.registerRequest).toEqual(true);
    expect(nextState.registerFailed).toEqual(false);
  });

  it('should handle getRegisterSuccess', () => {
    const mockUserData = { id: 1, name: 'Marat Zagriev' };
    const nextState = authSlice.reducer(
      initialState,
      getRegisterSuccess(mockUserData)
    );
    expect(nextState.userData).toEqual(mockUserData);
    expect(nextState.registerRequest).toEqual(false);
  });
  it('should handle getRegisterFailed', () => {
    const nextState = authSlice.reducer(initialState, getRegisterFailed());
    expect(nextState.registerRequest).toEqual(false);
    expect(nextState.registerFailed).toEqual(true);
  });
  it('should handle getLoginRequest', () => {
    const nextState = authSlice.reducer(initialState, getLoginRequest());
    expect(nextState.loginRequest).toEqual(true);
    expect(nextState.loginFailed).toEqual(false);
  });

  it('should handle getLoginSuccess', () => {
    const mockUserData = { id: 2, name: 'Daniyar' };
    const nextState = authSlice.reducer(
      initialState,
      getLoginSuccess(mockUserData)
    );
    expect(nextState.userData).toEqual(mockUserData);
    expect(nextState.loginRequest).toEqual(false);
  });
  it('should handle getLoginFailed', () => {
    const nextState = authSlice.reducer(initialState, getLoginFailed());
    expect(nextState.loginRequest).toEqual(false);
    expect(nextState.loginFailed).toEqual(true);
  });
  it('should handle getUserRequest', () => {
    const nextState = authSlice.reducer(initialState, getUserRequest());
    expect(nextState.userRequest).toEqual(true);
    expect(nextState.userFailed).toEqual(false);
  });
  it('should handle getUserSuccess', () => {
    const mockUserData = { id: 4, name: 'Elena' };
    const nextState = authSlice.reducer(
      initialState,
      getUserSuccess(mockUserData)
    );
    expect(nextState.userData).toEqual(mockUserData);
    expect(nextState.userRequest).toEqual(false);
  });

  it('should handle getUserFailed', () => {
    const nextState = authSlice.reducer(initialState, getUserFailed());
    expect(nextState.userRequest).toEqual(false);
    expect(nextState.userFailed).toEqual(true);
  });

  it('should handle updateUserRequest', () => {
    const nextState = authSlice.reducer(initialState, updateUserRequest());
    expect(nextState.updateRequest).toEqual(true);
    expect(nextState.updateFailed).toEqual(false);
  });

  it('should handle updateUserSuccess', () => {
    const mockUserData = { id: 5, name: 'Marat' };
    const nextState = authSlice.reducer(
      initialState,
      updateUserSuccess(mockUserData)
    );
    expect(nextState.userData).toEqual(mockUserData);
    expect(nextState.updateRequest).toEqual(false);
  });

  it('should handle updateUserFailed', () => {
    const nextState = authSlice.reducer(initialState, updateUserFailed());
    expect(nextState.updateRequest).toEqual(false);
    expect(nextState.updateFailed).toEqual(true);
  });
  it('should handle forgotPasswordRequest', () => {
    const nextState = authSlice.reducer(initialState, forgotPasswordRequest());
    expect(nextState.forgotRequest).toEqual(true);
    expect(nextState.forgotFailed).toEqual(false);
  });

  it('should handle forgotPasswordSuccess', () => {
    const mockData = { message: 'Password reset sent' };
    const nextState = authSlice.reducer(
      initialState,
      forgotPasswordSuccess(mockData)
    );
    expect(nextState.forgotSuccess).toEqual(mockData);
    expect(nextState.forgotRequest).toEqual(false);
  });

  it('should handle forgotPasswordFailed', () => {
    const nextState = authSlice.reducer(initialState, forgotPasswordFailed());
    expect(nextState.forgotRequest).toEqual(false);
    expect(nextState.forgotFailed).toEqual(true);
  });

  it('should handle resetPasswordRequest', () => {
    const nextState = authSlice.reducer(initialState, resetPasswordRequest());
    expect(nextState.resetRequest).toEqual(true);
    expect(nextState.resetFailed).toEqual(false);
  });

  it('should handle resetPasswordSuccess', () => {
    const mockData = { message: 'Password reset successful' };
    const nextState = authSlice.reducer(
      initialState,
      resetPasswordSuccess(mockData)
    );
    expect(nextState.resetSuccess).toEqual(mockData);
    expect(nextState.resetRequest).toEqual(false);
  });

  it('should handle resetPasswordFailed', () => {
    const nextState = authSlice.reducer(initialState, resetPasswordFailed());
    expect(nextState.resetRequest).toEqual(false);
    expect(nextState.resetFailed).toEqual(true);
  });

  it('should handle logoutRequest', () => {
    const nextState = authSlice.reducer(initialState, logoutRequest());
    expect(nextState.logoutRequest).toEqual(true);
    expect(nextState.logoutFailed).toEqual(false);
  });

  it('should handle logoutSuccess', () => {
    const nextState = authSlice.reducer(initialState, logoutSuccess());
    expect(nextState.userData).toBeNull();
    expect(nextState.logoutRequest).toEqual(false);
  });

  it('should handle logoutFailed', () => {
    const nextState = authSlice.reducer(initialState, logoutFailed());
    expect(nextState.logoutRequest).toEqual(false);
    expect(nextState.logoutFailed).toEqual(true);
  });

  it('should handle disableReset', () => {
    const nextState = authSlice.reducer(initialState, disableReset());
    expect(nextState.forgotSuccess).toEqual(false);
    expect(nextState.resetSuccess).toEqual(false);
  });
});
