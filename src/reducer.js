export const reducer = (state, action) => {
  switch (action.type) {
    case 'PAGE1':
      return {
        ...state,
        fullName: action.payload.fullName,
        displayName: action.payload.displayName,
        currentPage: 2,
      };
    case 'PAGE2':
      return {
        ...state,
        workspaceName: action.payload.workspaceName,
        workspaceUrl: action.payload.workspaceUrl,
        currentPage: 3,
      };

    case 'PAGE3':
      return {
        ...state,
        subscriptionType: action.payload.subscriptionType,
        currentPage: 4,
      };
    default:
      break;
  }
};
