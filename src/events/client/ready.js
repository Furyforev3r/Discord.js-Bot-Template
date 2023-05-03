const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Ready! ${client.user.tag} is logged and online!`);

        const activities = [
            { name: 'server', type: ActivityType.Competing, status: 'dnd' },
            { name: 'https://github.com/Furyforev3r (Template by: https://github.com/kayqueprogram)', type: ActivityType.Watching, status: 'idle' },
            { name: 'seus problemas', type: ActivityType.Listening, status: 'idle' },
        ];

        let activityIndex = 0;

        setInterval(() => {
            const activity = activities[activityIndex];
            client.user.setPresence({
                activities: [
                    {
                        name: activity.name,
                        type: activity.type,
                    },
                ],
                status: activity.status,
            });
            activityIndex = (activityIndex + 1) % activities.length;
        }, 300000);

    }
}
