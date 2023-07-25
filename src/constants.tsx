export const FILTER_TYPES = [
    'predefined','resource_type', 'action','usernames','build_reason',
];

export const RESOURCES = [
    'api_key', 'convert_login', 'git_ssh-key', 'convert_login', 'group', 'license', 'template', 'template_version', 'user', 'workspace', 'workspace_build'
];

export const ACTIONS = [
    'create', 'delete', 'login', 'logout', 'register', 'start', 'stop', 'write' 
];

export const USERS = [
    { name: 'David Leiva' },
    { name: 'Bruno Quaresma'}
];

export const PREDEFINED_FILTERS = [
    {
        label: 'Created workspaces',
        value: { resource_type: RESOURCES[9], action: ACTIONS[0] },
    },
    {
        label: 'Added templates',
        value: { resource_type: RESOURCES[6], action: ACTIONS[0] },
    },
    {
        label: 'Deleted users',
        value: { resource_type: RESOURCES[8], action: ACTIONS[1] },
    },
    {
        label: 'Builds started by a user',
        value: { resource_type: RESOURCES[10], action: ACTIONS[5], build_reason: 'initiator' },
    },
    {
        label: 'User logins',
        value: { resource_type: RESOURCES[0], action: ACTIONS[2] },
    }
];

export const RESOURCE_FILTERS = [
    {
        label: 'Api Key',
        value: { resource_type: RESOURCES[0] },
    },
    {
        label: 'Login',
        queryValue: RESOURCES[1],
        value: { resource_type: RESOURCES[1] },
    },
    {
        label: 'Git SSH Key',
        value: { resource_type: RESOURCES[2] },
    },
    {
        label: 'Group',
        value: { resource_type: RESOURCES[3] },
    },
    {
        label: 'Template',
        value: { resource_type: RESOURCES[4] },
    },
    {
        label: 'Template version',
        value: { resource_type: RESOURCES[5] },
    },
    {
        label: 'User',
        value: { resource_type: RESOURCES[6] },
    },
    {
        label: 'Workspace',
        value: { resource_type: RESOURCES[7] },
    },
    {
        label: 'Workspace Build',
        value: { resource_type: RESOURCES[8] },
    }
];

// export const RESOURCE_FILTERS = [
//     {
//         label: 'Api Key',
//         value: { action: ACTIONS[0] },
//     },
//     {
//         label: 'Login',
//         value: { action: ACTIONS[1] },
//     },
//     {
//         label: 'Git SSH Key',
//         value: { action: ACTIONS[2] },
//     },
//     {
//         label: 'Group',
//         value: { action: ACTIONS[3] },
//     },
//     {
//         label: 'Template',
//         value: { action: ACTIONS[4] },
//     },
//     {
//         label: 'Template version',
//         value: { action: ACTIONS[5] },
//     },
//     {
//         label: 'User',
//         value: { action: ACTIONS[6] },
//     },
//     {
//         label: 'Workspace',
//         value: { action: ACTIONS[7] },
//     },
//     {
//         label: 'Workspace Build',
//         value: { action: ACTIONS[8] },
//     }
// ];

export const ACTION_FILTERS = [
    {
        label: 'Api Key',
        value: { action: ACTIONS[0] },
    },
    {
        label: 'Login',
        value: { action: ACTIONS[1] },
    },
    {
        label: 'Git SSH Key',
        value: { action: ACTIONS[2] },
    },
    {
        label: 'Group',
        value: { action: ACTIONS[3] },
    },
    {
        label: 'Template',
        value: { action: ACTIONS[4] },
    },
    {
        label: 'Template version',
        value: { action: ACTIONS[5] },
    },
    {
        label: 'User',
        value: { action: ACTIONS[6] },
    },
    {
        label: 'Workspace',
        value: { action: ACTIONS[7] },
    },
    {
        label: 'Workspace Build',
        value: { action: ACTIONS[8] },
    }
];

