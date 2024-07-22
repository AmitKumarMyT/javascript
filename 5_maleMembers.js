const complexObject = {
    members: [
        { name: 'John', gender: 'male' },
        { name: 'Alex', gender: 'male' },
        { name: 'Sarah', gender: 'female' },
        { name: 'Michael', gender: 'male' },
        { name: 'Emily', gender: 'female' }
    ]
};




const pritntOnlyMales = function(obj) {
    obj.members.forEach(member => {
        if (member.gender === 'male') {
            console.log(member.name);
        }
    });
};

pritntOnlyMales(complexObject);