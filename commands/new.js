const userInfo = require('../schema.js');
var id = 0;

module.exports = {
    name: 'new',
    description: 'add an assignment to the database',
    data:  [
        {
            name: 'assignment',
            type: 'STRING',
            description: 'name of the assignment',
            required: true,
        },
        {
            name: 'date',
            type: 'STRING',
            description: 'assignment date due (MM/DD/YYYY)',
            required: true,
        },
        {
            name: 'time',
            type: 'STRING',
            description: 'assignment time due (HH:MM AM or HH:MM PM)',
            required: true,
        }
    ],

    run(msg, args, command) {
        let assignment = args[0];

        let month = args[1];
        let day = args[2];
        let year = args[3];

        let hour = args[4];
        let minute = args[5];
        let meridian = args[6];

        // instructions to use command
        if (!args.length) {
            msg.channel.send(
                'To add an assignment, use "h!new \<name\> \<date\> \<time\>".\n The NAME must not contain any spaces. (Try CamelCase.)\n The DATE must be in the format "mm dd yyyy". \n The TIME must be in the format "HH MM AM" or "HH MM PM" (ensure AM/PM is capitalized). As of now, this bot only supports EST times. \n Example: h!new AssignmentName 1 1 1900 01 00 AM'
                ); }

        // handle errors for wrong number of args
        else if (args.length != 7) { msg.channel.send('Error: Invalid number of arguments'); }

        // handle errors for invalid input
        else if (isNaN(month) || isNaN(day) || isNaN(year) || isNaN(hour)) { msg.channel.send('I don\'t understand this input. Sorry!'); }

        // handle errors for time units out of rangeh!new a 12 1 2022 1 1 PM
        else if (month < 0 || month > 12) { msg.channel.send('Error: Invalid month'); }
        else if (day < 0 || day > 31) { msg.channel.send('Error: Invalid day'); }
        else if (year < 2022 || year > 2100) { msg.channel.send('Error: Year must be between this year (2022) and 2100'); }
        else if (hour < 0 || hour > 12 || isNaN(minute) || minute < 0 || minute > 59) { msg.channel.send('Error: Invalid time'); }
        else if (meridian !== "PM" && meridian !== "AM") { msg.channel.send('AM/PM not specified or uncapitalized. Try again.'); }

        else { console.log(`[ASSIGNMENT ADDED] User: ${msg.author.username} | Name: "${assignment}" | Date: ${month}/${day.padStart(2, '0')}/${year} | Time: ${hour}:${minute.padStart(2, '0')} ${meridian} | ID: ${id}`); }

        id++;

        // write data into MongoDB database
        setTimeout(async () => {
            await new userInfo ({
                user: `${msg.author.username}`,
                assignment: `${assignment}`,
                date: `${month}/${day.padStart(2, '0')}/${year}`,
                time: `${hour}:${minute.padStart(2, '0')} ${meridian}`,
                id: `${id}`
            }).save()
        }, 1000)

        // ping user at specified time (wip)
    }
}