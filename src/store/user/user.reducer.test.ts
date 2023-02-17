import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";
import { userReducer, UserState } from "./user.reducer";

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

describe("userReducer", () => {
  it("should return initial state", () => {
    const currentUser = {
      id: "1",
      displayName: "Miro",
      createdAt: new Date(),
      email: "miro@gmail.com",
    };
    const state: UserState = {
      ...initialState,
      currentUser,
    };

    expect(userReducer(state, signInSuccess(currentUser)).currentUser).toEqual(
      currentUser
    );
  });

  it("should set currentUser to null on signOutSuccess action", () => {
    expect(userReducer(initialState, signOutSuccess).currentUser).toBe(null);
  });

  it("should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action", () => {
    const mockError: Error = {
      message: "Something went wrong",
      name: "Server error",
    };

    expect(userReducer(initialState, signInFailed(mockError)).error).toBe(
      mockError
    );

    expect(userReducer(initialState, signUpFailed(mockError)).error).toBe(
      mockError
    );

    expect(userReducer(initialState, signOutFailed(mockError)).error).toBe(
      mockError
    );
  });
});
