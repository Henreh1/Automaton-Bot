export const API_URL = "http://localhost:3002";

export const InviteURL = "I still need to generate a new link";

export const Config = [
    {
      name: 'General',
      options: [
        { key: 'welcomeMessage', label: 'Welcome Message', type: 'text' },
        { key: 'logChannel', label: 'Log Channel', type: 'channel', allowed: ["Text"] },
      ],
    },
    {
      name: 'Moderation',
      options: [
        { key: 'autoBan', label: 'Auto Ban', type: 'toggle' },
        { key: 'modRole', label: 'Moderator Role', type: 'role' },
        { key: 'banThreshold', label: 'Ban Threshold', type: 'number' },
      ],
    },
