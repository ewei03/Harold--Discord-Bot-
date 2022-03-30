const AssignmentEmbed = require('../assignment-embeds.js');

module.exports = {
    name: 'view',
    description: 'view list of assignments',

    run(msg) {
        msg.channel.send({ embeds: [AssignmentEmbed] });
    }
}