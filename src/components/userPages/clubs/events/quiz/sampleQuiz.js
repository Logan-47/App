export const Quizzes =[ 
    {
        id: 1232341423,
        formTitle: 'Sample Quiz',
        formDescription: 'This is a sample quiz. In this Sample Quiz you can test the fuctionality of Rendering Quiz',
        color: '#ff9800',
        questions: [
            {
                question: 'Welcome to the first question. You have to attempt this Question',
                type: 'Multiple Choice',
                options: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
                answer: 'Option 2',
                points: 10,
                time: '00:01:30'
            },
            {
                question: 'Welcome to the Second question',
                type: 'Multiple Select',
                options: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
                answer: [true, , false],
                points: 20,
                time: '00:01:00'
            },
            {
                question: 'Welcome to the Third question',
                type: 'Short Answer',
                answer: ['8', 'Eight', 8],
                points: 10
            },
            {
                question: 'Welcome to the forth question',
                type: 'Integer Type',
                answer: 3,
                points: 10
            },
            {
                question: 'Welcome to the fifth question. In this question you have to choose from multiple options . There will be four multiple options ',
                type: 'Long Answer',
                points: 5
            },
            {
                question: 'Welcome to the first question. You have to attempt this Question',
                type: 'Drop-down',
                options: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
                answer: 'Option 2',
                points: 10
            },
            {
                question: 'Welcome to the Second question',
                type: 'Multiple Select',
                options: [ 'Option 1', 'Option 2', 'Option 3', 'Option 4'],
                answer: [true, , false],
                points: 20
            },
            {
                question: 'Welcome to the Third question',
                type: 'Short Answer',
                answer: ['8', 'Eight', 8],
                points: 10
            },
            {
                question: 'Welcome to the forth question',
                type: 'Integer Type',
                answer: 3,
                points: 10
            },
            {
                question: 'Welcome to the fifth question. In this question you have to choose from multiple options . There will be four multiple options ',
                type: 'Long Answer',
                points: 5
            }
        ]
    }
]
