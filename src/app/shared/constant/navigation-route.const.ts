export const CrudRoutes = {
  CREATE: 'create',
  DETAIL: ':id/view',
  EDIT: ':id'
};

export const NavigationRoute = {
  AUTH: {
    BASE: 'auth',
    LOG_IN: 'login',
    USER_ACTIVATION: 'activate'
  },
  FEATURE: {
    DASHBOARD: 'dashboard',
    MANAGE_USER: generateRoutes('manage-user')
  },
  FORBIDDEN: 'forbidden'
};

// function to generate path for pages of CRUD for uniformity
function generateRoutes(basePath: string) {
  return {
    BASE: basePath,
    CREATE: `${basePath}/create`,
    DETAIL: `${basePath}/:id/view`,
    EDIT: `${basePath}/:id`
  };
}
