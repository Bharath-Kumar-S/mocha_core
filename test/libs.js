const student = {
    name: 'Bharath',
    id: 60108696,
    mail: 'bharath.kum.s@dxc.com'
}

const getname = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(student.name);
        }, Math.floor(Math.random() * 1000));
    })
}

exports.getname = getname;