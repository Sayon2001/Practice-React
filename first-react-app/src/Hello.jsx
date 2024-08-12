function Hello() {

    let myName = 'Sayon';
    let fullName = () => {
        return "Sayon Shrestha";
    }

    return <h3>
        Hello! this is the future speaking. I am your master {myName}. My full name is {fullName()}.
    </h3>
}

export default Hello;