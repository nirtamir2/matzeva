export function getRandomBoolean() {
    return Math.random() >= 0.5;
}

export function getSoldiers() {
    const firstNames = ['Nir',
        'Mor',
        'Avi',
        'Pazit',
        'Noam',
        'Hanan',
        'Barak',
        'Almog',
        'Keren',
        'Sharon',
        'Dana',
        'Gil',
        'Oren',
        'Navot',
        'Shani',
        'Reut',
        'Vlady',
        'Alex',
        'Omri',
        'Ortal',
        'Oleg',
        'Hasan'];

    return firstNames.reduce((acc, name, i) => {
        acc.push({
            id: i,
            name: name,
            image: `https://placeimg.com/40/40/people/${i}`,
        });
        return acc;
    }, []);
};

export function getMatzevaSoldiers() {
    return getSoldiers().reduce((acc, soldier, i) => {
        acc.push({
            id: i,
            name: soldier.name,
            image: soldier.image,
            i: i,
            isHere: getRandomBoolean(),
            isKnown: getRandomBoolean(),
            status: 'UNKNOWN'
        });
        return acc;
    }, []);
};

export function getMatzevaSoldiersFromFirebase() {
    return firebase.database().ref('/matzevas/0/soldiers').once('value').then((snapshot)=>{
        return snapshot.val();});
};
export function updateSoldierStatus(newStatus) {
    return firebase.database().ref('/matzevas/0/soldiers/'+newStatus.id+'/status').set(newStatus.status);
    console.log('status updated!');
};

export default {
    getSoldiers,
    getMatzevaSoldiers,
    getMatzevaSoldiersFromFirebase,
    updateSoldierStatus
}