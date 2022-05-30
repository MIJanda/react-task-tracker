import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
    const [tasks] = useState([
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Jun 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Daily standup',
            day: 'Jun 7th at 5:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Grocery shopping',
            day: 'Jun 10th at 10:30am',
            reminder: false,
        },
    ])

	return (
		<div className="container">
			<Header/>
            <Tasks tasks={tasks}/>
		</div>
	);
}

export default App;
