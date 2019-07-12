let hour = 2200

if (hour >= 0600 && hour < 1200) {
    console.log('Between 6-12')
} else if (hour >= 1200 && hour < 1800) {
    console.log('Between 12-16')
} else {
    console.log('Something else')
}

let role = 'Moderator'

switch (role) {
    case 'Moderator':
        console.log('Moderator Access, Switch')
        break;
    case 'Admin':
        console.log('Administrator Access, Switch')
        break;
    default:
        console.log('Guest Access, Switch');
}

if (role === 'Moderator') {
    console.log('Moderator Access, If')
} else if (role === 'Admin') {
    console.log('Adminstrator Access, If')
} else {
    console.log('Guest Access, If')
}

for (let i = 0; i < 5; i++) {
    console.log('User Access ' + i)
}
for (let index = 1; index < 10; index++) {
    if (index % 2 !== 0)
        console.log('Admin Access, Odd ' + index)
}
console.log('fresh')
console.log('fresh')

let time = 0700

if (time > 0600 && time <= 1200)
    console.log('Between 0600-1200');
else if (time > 1200 && time <= 2000)
    console.log('Between 1200-2000');
else
    console.log('Between 2000-0600');

let access = 'admin'

switch (access) {
    case 'guest':
        console.log('Guest access, switch');
        break
    case 'moderator':
        console.log('Moderator access, switch');
        break
    case 'admin':
        console.log('Adminstrator Access, switch')
        break
    default:
        console.log('Denied access, switch')
}

if (access === 'admin')
    console.log('Adminstrator access, if')
else if (access = 'moderator')
    console.log('Moderator access, if')
else if (access = 'guest')
    console.log('Guest access, if')
else console.log('Denied access, if')