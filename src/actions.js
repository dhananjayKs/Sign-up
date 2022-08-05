export const page1 = (fullName, displayName) => {
  return {
    type: 'PAGE1',
    payload: { fullName, displayName },
  };
};

export const page2 = (workspaceName, workspaceUrl) => {
  return {
    type: 'PAGE2',
    payload: {
      workspaceName,
      workspaceUrl,
    },
  };
};

export const page3 = (subscriptionType) => {
  return {
    type: 'PAGE3',
    payload: { subscriptionType },
  };
};
