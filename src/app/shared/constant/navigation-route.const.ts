export const NavigationRoute = {
  AUTH: {
    LOG_IN: 'login',
    USER_ACTIVATION: 'activate'
  },
  FEATURE: {
    DASHBOARD: 'dashboard',
    MANAGE_USER: generateRoutes('manage-user')
  }
};

// function to generate path for pages of CRUD for uniformity
function generateRoutes(basePath: string) {
  return {
    LIST: basePath,
    CREATE: `${basePath}/create`,
    DETAIL: `${basePath}/:id/view`,
    EDIT: `${basePath}/:id`
  };
}
