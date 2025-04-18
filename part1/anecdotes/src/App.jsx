import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const PopularQuote = ({ anecdotes, votes }) => {
  let highestVote = Math.max(...votes);
  console.log(highestVote);
  let highestIndex = votes.indexOf(highestVote);
  console.log(highestIndex);
  return <div>{anecdotes[highestIndex]}</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const votes = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(votes);

  const generateAnecdote = () => {
    const nextQuote = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextQuote);
  };

  const countVote = () => {
    const newVotes = [...voted];
    newVotes[selected] += 1;
    setVoted(newVotes);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {voted[selected]} votes</div>
      <Button onClick={countVote} text="vote" />
      <Button onClick={generateAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <PopularQuote anecdotes={anecdotes} votes={voted} />
    </>
  );
};

export default App;
