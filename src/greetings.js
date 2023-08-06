const joinTwoNames = (twoNames) => {
    return `${twoNames.join(' and ')}`;
};

const getLongGreetings = (longListOfNames) => {
    return longListOfNames.reduce(
        (acc, name, currentIndex) =>
            currentIndex < longListOfNames.length - 1
                ? `${acc}${name}, `
                : `${acc.slice(0, acc.length - 2)} and ${name}`,
        ''
    );
};

const getGreetings = (names) => {
    const greetingsList = [
        'Hello world!',
        `Hi there ${names}!`,
        `Hi there ${joinTwoNames(names)}!`,
        `Hi there ${getLongGreetings(names)}!`,
    ];
    const greetingsIndex = names.length >= 3 ? 3 : names.length;
    return `${greetingsList[greetingsIndex]}`;
};

const showGreeting = (names) => {
    const greeting = getGreetings(names);
    console.log(greeting);
};

module.exports = {
    getGreetings,
    showGreeting,
};
