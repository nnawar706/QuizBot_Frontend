const Quote = () => {
    
    const quotes = [
        "Education is the key to success, but the lock is way too complicated. 🙃",
        "Quizzes are like a cruel mirage in the desert of education, promising wisdom but often delivering only thirst for knowledge.",
        "I'm not saying school is hard, but even Google has to think for a while. 😏",
        "Exams: the art of turning sleep-deprived students into caffeine-fueled philosophers overnight.",
        "Education is the foundation upon which we build our future, and our future looks like a game of Jenga.",
        "Quiizzes are the ultimate battle of wits, where the questions are tricky and the stakes are the precious minutes of your youth. 😩",
        "Why attend lectures when you can just imagine yourself becoming the next Einstein?",
        "The only true wisdom is in knowing you know nothing, especially during an quiz.",
        "Learning is like a marathon, except it's a marathon where you forget what running is halfway through.",
        "Quizzes are a game of hide and seek where the answers play hard to get, and your GPA is the prize.",
        "Education is the path to enlightenment, or at least a decent cup of coffee.",
        "In the world of exams, time flies faster than a caffeinated student in a race against the clock.",
        "They say 'knowledge is power,' but I'm still waiting for my superpowers to kick in. 🙄",
        "Studying because 'I don't know' is just not a fancy enough answer. 😂",
        "Quizzes are like a fine dining experience - you pay for every mistake you make, and the results leave a lasting impression. 🤯",
        "I don't always study, but when I do, I pretend I'm on a TED Talk. 😎",
        "Education is a journey, and sometimes it feels like you're on a never-ending scenic route to nowhere. 😑",
        "Quizzes: where the questions are made up, and the points don't matter, but your future somehow does. 😛"
    ]

    const randomIndex = Math.floor(Math.random() * 18)

    return (
        <div className="mt-4 flex flex-auto justify-center">
            <div className="p-5 bg-white w-4/5 rounded-md">
                <h3 className="text-center font-bold">Inspiration For Today</h3>
                <p className="text-center">{quotes[randomIndex]}</p>
            </div>
        </div>
    )
}

export default Quote