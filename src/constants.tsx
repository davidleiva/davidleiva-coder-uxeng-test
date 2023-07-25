/* eslint-disable react-refresh/only-export-components */
export const FILTER_TYPES = [
    'predefined','resource_type', 'action','usernames','build_reason',
];

export const RESOURCES = [
    'api_key', 'convert_login', 'git_ssh-key', 'group', 'template', 'template_version', 'user', 'workspace', 'workspace_build'
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
        queryValue: 'created_workspaces',
        value: { resource_type: RESOURCES[7], action: ACTIONS[0] },
    },
    {
        label: 'Added templates',
        queryValue: 'added_templates',
        value: { resource_type: RESOURCES[5], action: ACTIONS[0] },
    },
    {
        label: 'Deleted users',
        queryValue: 'deleted_users',
        value: { resource_type: RESOURCES[6], action: ACTIONS[1] },
    },
    {
        label: 'Builds started by a user',
        queryValue: 'builds_started',
        value: { resource_type: RESOURCES[8], action: ACTIONS[5], build_reason: 'initiator' },
    },
    {
        label: 'User logins',
        queryValue: 'user_logins',
        value: { resource_type: RESOURCES[0], action: ACTIONS[2] },
    }
];

export const PREDEFINED_FILTERS_VALUES = [
    { resource_type: RESOURCES[7], action: ACTIONS[0] },
    { resource_type: RESOURCES[5], action: ACTIONS[0] },
    { resource_type: RESOURCES[6], action: ACTIONS[1] },
    { resource_type: RESOURCES[8], action: ACTIONS[5], build_reason: 'initiator' },
    { resource_type: RESOURCES[0], action: ACTIONS[2] },
];


export const RESOURCE_FILTERS = [
    {
        label: 'Api Key',
        queryValue: RESOURCES[0],
        value: { resource_type: RESOURCES[0] },
    },
    {
        label: 'Login',
        queryValue: RESOURCES[1],
        value: { resource_type: RESOURCES[1] },
    },
    {
        label: 'Git SSH Key',
        queryValue: RESOURCES[2],
        value: { resource_type: RESOURCES[2] },
    },
    {
        label: 'Group',
        queryValue: RESOURCES[3],
        value: { resource_type: RESOURCES[3] },
    },
    {
        label: 'Template',
        queryValue: RESOURCES[4],
        value: { resource_type: RESOURCES[4] },
    },
    {
        label: 'Template version',
        queryValue: RESOURCES[5],
        value: { resource_type: RESOURCES[5] },
    },
    {
        label: 'User',
        queryValue: RESOURCES[6],
        value: { resource_type: RESOURCES[6] },
    },
    {
        label: 'Workspace',
        queryValue: RESOURCES[7],
        value: { resource_type: RESOURCES[7] },
    },
    {
        label: 'Workspace Build',
        queryValue: RESOURCES[8],
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
        label: 'Create',
        queryValue: ACTIONS[0],
        value: { action: ACTIONS[0] },
    },
    {
        label: 'Delete',
        queryValue: ACTIONS[1],
        value: { action: ACTIONS[1] },
    },
    {
        label: 'Login',
        queryValue: ACTIONS[2],
        value: { action: ACTIONS[2] },
    },
    {
        label: 'Logout',
        queryValue: ACTIONS[3],
        value: { action: ACTIONS[3] },
    },
    {
        label: 'Register',
        queryValue: ACTIONS[4],
        value: { action: ACTIONS[4] },
    },
    {
        label: 'Start',
        queryValue: ACTIONS[5],
        value: { action: ACTIONS[5] },
    },
    {
        label: 'Stop',
        queryValue: ACTIONS[6],
        value: { action: ACTIONS[6] },
    },
    {
        label: 'Write',
        queryValue: ACTIONS[7],
        value: { action: ACTIONS[7] },
    },
];

